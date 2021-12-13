module.exports = {
  description: "Generates new React component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What's the name of the Component?",
    },
  ],
  actions: function () {
    return [
      {
        type: "add",
        path: "components/{{pascalCase name}}.vue",
        templateFile: "./generate/component/templates/component.hbs",
      },
    ];
  },
};
