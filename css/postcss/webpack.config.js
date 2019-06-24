module.exports = {
    mode: 'development', // 设置mode
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    }
}