module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        // rollupjs 会处理模块，所以设置成false
        modules: false
      }
    ]
  ],
  plugins: []
}