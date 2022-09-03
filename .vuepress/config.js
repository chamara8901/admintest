module.exports = {
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',
  dest: "dist",
  themeConfig: {
      nav:[
          {text:'Home', link:'/'},
          {text:'categories', link:'/categories/'}
      ],
  },  
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ],
  }
}