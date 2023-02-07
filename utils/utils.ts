import {
  level100Codes,
  level200Codes,
  level300Codes,
  level400Codes,
  level500Codes,
  StatusCode,
} from "static/data";
import _ from "lodash";

export type StatusCodeTestGroup = {
  testCode: StatusCode;
  decoyCode1: StatusCode;
  decoyCode2: StatusCode;
  shuffledCodes: number[];
};

export const getStatusCodes = (): StatusCodeTestGroup => {
  const levels = [
    level100Codes,
    level200Codes,
    level300Codes,
    level400Codes,
    level500Codes,
  ];
  const levelToTestIndex = _.random(0, 4);
  const levelToTest = levels[levelToTestIndex];

  let maxLevelIndex = levelToTest.length - 1;
  const testCodeIndex = _.random(0, maxLevelIndex);
  const testCode = levelToTest[testCodeIndex];
  levelToTest.splice(testCodeIndex, 1);

  maxLevelIndex = levelToTest.length - 1;
  const decoyCode1Index = _.random(0, maxLevelIndex);
  const decoyCode1 = levelToTest[decoyCode1Index];
  levelToTest.splice(decoyCode1Index, 1);

  maxLevelIndex = levelToTest.length - 1;
  const decoyCode2Index = _.random(0, maxLevelIndex);
  const decoyCode2 = levelToTest[decoyCode2Index];
  levelToTest.splice(decoyCode1Index, 1);

  const shuffledCodes = _.shuffle([
    testCode.statusCode,
    decoyCode1.statusCode,
    decoyCode2.statusCode,
  ]);

  return {
    testCode,
    decoyCode1,
    decoyCode2,
    shuffledCodes,
  };
};
