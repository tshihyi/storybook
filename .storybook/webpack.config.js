module.exports = (baseConfig, env, defaultConfig) => Object.assign(
  {}, defaultConfig, {
    module: {
      rules: defaultConfig.module.rules.concat({
        test: /\.sass$/,
        use: 'style-loader css-loader sass-loader'.split(' ')
      })
    }
  }
)
