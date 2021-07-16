"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const config = require("./templates/package.json");
const { name } = require("../../package.json");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the glorious ${chalk.red(name)} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "What sould the project name be? "
      },
      {
        type: "input",
        name: "author",
        message: "What is your username? "
      },
      {
        type: "input",
        name: "description",
        message: "What is your description? "
      },
      {
        type: "input",
        name: "version",
        message: "What is the version of your project? ",
        default: "1.0.0"
      },
      {
        type: "input",
        name: "license",
        message: "What is your license? ",
        default: "MIT"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      config.name = props.name;
      config.author = props.author;
      config.description = props.description;
      config.version = props.version;
      config.license = props.license;
    });
  }

  writing() {
    this.fs.writeJSON(
      //this.templatePath("package.json"),
      this.destinationPath("package.json"),
      config
    );
  }

  install() {
    //this.installDependencies();
  }
};
