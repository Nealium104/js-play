import { helloWorld } from "../js/helloWorld.mjs";

export function TestHelloWorld() {
  let passing;

  const testCases = [
    ["", "Hello world!"],
    ["Josh", "Hello Josh!"],
    ["Jane", "Hello Jane!"],
  ];

  testCases.map((item) => {
    if (helloWorld(item[0]) === item[1]) {
      passing = true;
    } else {
      passing = false;
    }
  });

  return passing;
}
