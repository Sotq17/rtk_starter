const imagemin = require('imagemin');
const pngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo')
const imageminOpting = require('imagemin-optipng')
const paths = require('./paths');

/* 画像圧縮
 -------------------------------- */
(async () => {
  const file = await imagemin([
    `${paths.srcImg}/*.+(jpg|png|gif|svg)`,
    `${paths.srcImg}/**/**.+(jpg|png|gif|svg)`,
    // `!${paths.srcImg}/sprite/**.+(jpg|png|gif|svg)`
    `!${paths.srcImg}/common/favicon.png`
  ],
    {
      destination: 'dist/img',
      plugins: [
        pngquant({
          quality: [0.65, 0.8],
          speed: 1
        }),
        imageminSvgo(),
        imageminOpting(),

    ]
  }).catch((e)=> console.log(e))
  console.log(file)
})()
