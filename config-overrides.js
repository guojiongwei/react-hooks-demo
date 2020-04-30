const path = require('path')
const { override, addDecoratorsLegacy, addWebpackAlias} = require('customize-cra');
module.exports = {
    webpack:override(
        addDecoratorsLegacy(),
        addWebpackAlias({
            '@': path.resolve(__dirname, 'src')
        })
    )
}