const wordLadder = (beginWord, endWord, wordList) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const map = {};
  const visited = {};
  const queue = [[beginWord, 1]];

  for (let i = 0; i < wordList.length; i++) map[wordList[i]] = true;

  while (queue.length) {
    const [word, count] = queue.shift();
    if (word === endWord) {
      return count;
    } else {
      if (visited[word]) continue;
      visited[word] = true;
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
          let newWord = word.split("");
          newWord[i] = alphabet[j];
          newWord = newWord.join("");

          if (map[newWord]) {
            queue.push([newWord, count + 1]);
          }
        }
      }
    }
  }

  return 0;
};

const testCases = [
  {
    input: ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]],
    expected: 5,
  },
  {
    input: ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]],
    expected: 0,
  },
  {
    input: ["a", "c", ["a", "b", "c"]],
    expected: 2,
  },
  {
    input: ["lost", "cost", ["cost"]],
    expected: 2,
  },
  {
    input: ["cat", "dog", ["cot", "cog", "dog"]],
    expected: 4,
  },
  {
    input: ["lead", "gold", ["load", "goad", "gold"]],
    expected: 4,
  },
  {
    input: ["talk", "tail", ["talk", "tall", "tail"]],
    expected: 3,
  },
  {
    input: ["game", "thee", ["tame", "tome", "toee", "thee"]],
    expected: 5,
  },
  {
    input: ["charge", "comets", ["chase", "chose", "coose"]],
    expected: 0,
  },
  {
    input: ["stone", "money", ["mtone", "moone", "monne", "monee", "money"]],
    expected: 6,
  },
];

import test from "../Test.js";
test(wordLadder, testCases);
