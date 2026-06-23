import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const INPUT_DIR  = './public/images'
const OUTPUT_DIR = './public/optimized'
const MAX_WIDTH  = 1920
const QUALITY    = 82

const EXTENSIONS = ['.jpg', '.jpeg', '.JPG', '.JPEG', '.PNG', '.png']

// Skip logo — keep it as-is
const SKIP = ['logo_aasd.jpg']

if (!existsSync(OUTPUT_DIR)) {
  await mkdir(OUTPUT_DIR, { recursive: true })
}

const files = await readdir(INPUT_DIR)
const images = files.filter(f =>
  EXTENSIONS.some(ext => f.endsWith(ext)) && !SKIP.includes(f)
)

console.log(`Optimizing ${images.length} images...`)

let totalBefore = 0
let totalAfter  = 0

for (const file of images) {
  const inputPath  = path.join(INPUT_DIR, file)
  const baseName   = path.parse(file).name.toLowerCase().replace(/\s+/g, '-')
  const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`)

  try {
    const { size: before } = (await import('fs')).default.statSync(inputPath)
    totalBefore += before

    await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath)

    const { size: after } = (await import('fs')).default.statSync(outputPath)
    totalAfter += after

    const saving = (((before - after) / before) * 100).toFixed(1)
    console.log(`  ✓ ${file.padEnd(70)} ${(before/1024/1024).toFixed(1)}MB → ${(after/1024).toFixed(0)}KB  (-${saving}%)`)
  } catch (err) {
    console.error(`  ✗ ${file}: ${err.message}`)
  }
}

// Also copy logo as-is
try {
  await sharp('./public/images/logo_aasd.jpg')
    .resize({ width: 200, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile('./public/optimized/logo_aasd.webp')
  console.log('  ✓ logo_aasd.jpg (resized to 200px)')
} catch (e) { /* skip */ }

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB  (${(((totalBefore-totalAfter)/totalBefore)*100).toFixed(1)}% reduction)`)
