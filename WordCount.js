// Write a function that inputs a paragraph string and outputs the total repetitions of each unique word.

// Create a map for words
// Lowercase, remove punctuation, then split
// Split the string by " "
// Loop through the array, if the word doesn't begin or end with a letter, remove it
// Check with alphabet string
// If the word is not empty, add it to the map

const wordCount = (paragraph) => {
  if (!paragraph.length) return [];
  const words = {};
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const splitString = paragraph.toLowerCase().split(" "); // [ "i" , "am", "here!!", "", "cat?"]

  for (let i = 0; i < splitString.length; i++) {
    const string = splitString[i];

    const letters = string.split("");
    while (!alphabet.includes(letters[0])) letters.unshift();
    while (!alphabet.includes(letters[letters.length - 1])) letters.pop();
    const word = letters.join("");

    if (word && words[word] === undefined) {
      words[word] = 1;
    } else {
      words[word]++;
    }
  }

  return Object.entries(words).sort();
};

const testCases = [
  {
    input: ["banana apple"],
    expected: [
      ["apple", 1],
      ["banana", 1],
    ],
  },
  {
    input: ["the cat and the dog"],
    expected: [
      ["and", 1],
      ["cat", 1],
      ["dog", 1],
      ["the", 2],
    ],
  },
  {
    input: ["Apple apple APPLE"],
    expected: [["apple", 3]],
  },
  {
    input: ["Hello world, hello!"],
    expected: [
      ["hello", 2],
      ["world", 1],
    ],
  },
  {
    input: [""],
    expected: [],
  },
  {
    input: ["it's it's its"],
    expected: [
      ["it's", 2],
      ["its", 1],
    ],
  },
  {
    input: ["To be. Or not to be?"],
    expected: [
      ["be", 2],
      ["not", 1],
      ["or", 1],
      ["to", 2],
    ],
  },
  {
    input: ["a ab abc"],
    expected: [
      ["a", 1],
      ["ab", 1],
      ["abc", 1],
    ],
  },
  {
    input: ["zebra ant zebra"],
    expected: [
      ["ant", 1],
      ["zebra", 2],
    ],
  },
];

import test from "./Test.js";
test(wordCount, testCases);
