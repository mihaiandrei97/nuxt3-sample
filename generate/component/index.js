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
       {
                path: 'components/index.js',
                pattern: /(\/\/ COMPONENT IMPORTS)/g,
                template: 'import {{pascalCase name}} from \'./components/{{pascalCase name}}\';\n$1',
                type: 'modify',
            },
            {
                path: 'components/index.js',
                pattern: /(\/\/ COMPONENT EXPORTS)/g,
                template: '\t{{pascalCase name}},\n$1',
                type: 'modify',
            },
    ];
  },
};
