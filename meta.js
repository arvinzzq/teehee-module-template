module.exports = {
  prompts: [
    {
      type: 'input',
      name: "description",
      message: "项目的描述：",
      default: "A simple module"
    },
    {
      type: 'input',
      name: "keywords",
      message: "请输入关键字：",
      default: "module"
    },
    {
      type: 'input',
      name: "license",
      message: "项目使用的协议：",
      default: "MIT"
    }
  ]
}
