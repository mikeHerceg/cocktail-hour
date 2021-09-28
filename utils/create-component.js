require("colors");
const strHelper = require("./stringHelpers");
const fs = require("fs");
const components = require("./templates/component");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

const kebabCase = strHelper.kebabCase(componentName);
const paschalCase = strHelper.paschalCase(componentName);
const titleCase = strHelper.titleCase(componentName);


console.log("Creating Component Templates with name: " + paschalCase);

// build Component Directory
const componentDirectory = `./src/components/${kebabCase}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${paschalCase} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);


const generatedComponents = components.map((component) =>
  component(kebabCase, paschalCase)
);

generatedComponents.forEach((component) => {
  fs.writeFileSync(
    `${componentDirectory}/${kebabCase}${component.extension}`,
    component.content
  );
});


//add index file
fs.writeFile(
  `${componentDirectory}/index.jsx`,
  `export { default } from './${kebabCase}';`,
  function(err, result) {
    if(err) console.log('error', err);
  }
);


console.log(
  "Successfully created component under: " + componentDirectory.green
);
