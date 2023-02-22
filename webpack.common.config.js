const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // константа для содержимого кода
const MiniCSSExtractPlugin = require('mini-css-extract-plugin'); // константа для содержимого кода

module.exports = {
    // entry: 'src/entry.js' // можно поменять файл точки входа

    // output: {  // Можно поменять файл конечный
    //     path: path.resolve(__dirname, 'result'),  // позволяет дать абсолютный путь, относительно текущего каталога
    //     filename:'app.bundle.js',
    // }
    //mode: 'production', // production, development. development режими В development у нас будет информация в каком исходном файле какие стили, какие функции если таких файлов у нас много. Например несколько css файлов или несколько js файлов
    module: {
        rules: [ // Здесь распознавание и имена загрузщиков
            {
                test: /\.js/,
                exclude: /node_modules/, // Дирректива указывающая какие файлы или какие папки не нужно трогать для преобразования в нашем случае node-modules, работает через регулярное выражение
                loader: 'babel-loader'
            },
            {
                test: /\.txt$/,  // проверка что за файл
                loader: 'raw-loader'  // название загрузщика. Это только название его еще нужно установить npm i --save-dev raw-loader
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader, // затем этим
                    'css-loader' // загрузщики нужно указывать в обратном порядке, сначала обработается этим загрузщиком
                ]
            },   
        ]
    },
    plugins: [ // Здесь плагины к загрузщикам
        new HtmlWebpackPlugin({
            template: './src/index.html', // файл шаблона (какой файл будетпеределывать), и нужно создать этот файл в папке и создать в нем структуру документа
            filename: 'main.html' // так можно создать другой файл для конечной сборки
        }),
        new MiniCSSExtractPlugin()
    ],
    devServer: {
        watchFiles: './src',
        port: 9000,
    },   
}