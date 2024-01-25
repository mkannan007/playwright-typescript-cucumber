import {
  existsSync,
  mkdirSync,
  removeSync,
  createFileSync,
  writeFileSync,
} from 'fs-extra';
import { resolve } from 'path';

const pathToTarget = resolve('test/target');
const pathToJson = resolve('test/target/json/cucumber-report.json');
const emptyJson = [];

if (existsSync(pathToTarget)) {
  removeSync(pathToTarget);
}

mkdirSync(pathToTarget);
createFileSync(pathToJson);
writeFileSync(pathToJson, JSON.stringify(emptyJson));
