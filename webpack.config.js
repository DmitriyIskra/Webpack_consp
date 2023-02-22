const {merge} = require ('webpack-merge');

const commonConfig = require ('./webpack.common.config.js');    // Объект для общей сборки

const productionConfig = require ('./webpack.production.config.js'); // Объект для продакшн

const developmentConfig = require ('./webpack.development.config.js'); // Объект для отладочной сборки, например для подключения дополнительных опций к серверу

module.exports = (env, args) => {
        if(env.development) {
            return merge(commonConfig, developmentConfig);
        }
        else {
            return merge(commonConfig, productionConfig);
        }
 
}