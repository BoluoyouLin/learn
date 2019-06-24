const autoprefixer = require('autoprefixer')
const atImport = require('postcss-import')
const cssnano = require('cssnano')
const cssnext = require('postcss-cssnext')
const precss = require('precss')

module.exports={
    plugins:[
        // cssnext,
        precss,
        // atImport,
        // autoprefixer({
        //     browsers:['last 2 versions']
        // }),
        // cssnano
    ]
}