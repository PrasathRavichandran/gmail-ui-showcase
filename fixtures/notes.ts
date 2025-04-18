import { LoremIpsum } from "lorem-ipsum";
import { Note } from "./model";

const DATA: Array<Note> = [];

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const capitalizeFirstLetter = ([first, ...rest]: string) =>
  first.toLocaleUpperCase() + rest.join("");

for (let i = 0; i < 100; i++) {
  DATA.push({
    id: "1",
    title: capitalizeFirstLetter(
      lorem.generateWords(Math.round(Math.random() * 10) + 2)
    ),
    body: capitalizeFirstLetter(
      lorem.generateSentences(Math.round(Math.random() * 3) + 1)
    ),
  });
}

export default DATA;
