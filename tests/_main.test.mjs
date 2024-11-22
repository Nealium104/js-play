import { TestHelloWorld } from "./helloWorld.test.mjs";
import { TestBubbleSort } from "./bubbleSort.test.mjs";

const testsContainer = document.querySelector("#tests-container");

const tests = [
  ["HelloWorld()", TestHelloWorld()],
  ["BubbleSort()", TestBubbleSort()],
];

function TestResult(test) {
  if (test[1] === true) {
    createLi(`✅ ${test[0]} Success!`);
  } else {
    createLi(`❌ ${test[0]} Test failed!`);
  }
}

function createLi(text) {
  const li = document.createElement("li");
  li.innerText = `Test: ${text}`;
  testsContainer.appendChild(li);
}

for (const test of tests) {
  TestResult(test);
}
