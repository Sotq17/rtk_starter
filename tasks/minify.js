const imagemin = require('imagemin')
const pngquant = require('imagemin-pngquant')
const imageminSvgo = require('imagemin-svgo')
const imageminOpting = require('imagemin-optipng')
const jpegtran = require('imagemin-jpegtran')
const util = require('util')
const path = require('path')
const fs = require('graceful-fs')
const makeDir = require('make-dir')
const writeFile = util.promisify(fs.writeFile)
const paths = require('./paths')

const srcdir = paths.srcImg
const distdir = paths.distImg

imagemin(
  [
    paths.srcImg + '/**/*.{jpg,jpeg,png,gif,svg}',
    srcdir + '/*.{jpg,jpeg,png,gif,svg}'
  ],
  {
    plugins: [
      jpegtran({
        progressive: true
      }),
      pngquant({
        speed: 4,
        quality: [0.65, 0.8]
      }),
      imageminSvgo(),
      imageminOpting()
    ]
  }
).then(files =>
  files.forEach(async v => {
    let source = path.parse(v.sourcePath)
    v.destinationPath = `${source.dir.replace(srcdir, distdir)}/${source.name}${
      source.ext
    }`

    await makeDir(path.dirname(v.destinationPath))
    await writeFile(v.destinationPath, v.data)
  })
)
