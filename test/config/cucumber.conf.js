const common = [
  "paths test/features/**/*.feature",
  "--require-module ts-node/register",
  "--require-module tsconfig-paths/register",
  "--require test/*/*.ts",
  "--format json:test/target/json/cucumber-report.json",
  "--format html:test/target/html/cucumber-report.html",
  "--format summary",
  '--format @cucumber/pretty-formatter --format-options {"colorsEnabled":true}',
  '--format-options \'{"snippetInterface": "async-await"}\'',
  "--backtrace",
  '--retry 1',
  "--exit",
];

module.exports = {
  default: [...common, "--tags @local"].join(" "),
};
