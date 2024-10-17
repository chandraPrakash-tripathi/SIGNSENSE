const quotes = [
  {
    id: 1,
    quote: "Language is the road map of a culture. It tells you where its people come from and where they are going."
  },
  {
    id: 2,
    quote: "One language sets you in a corridor for life. Two languages open every door along the way."
  },
  {
    id: 3,
    quote: "A different language is a different vision of life."
  },
  {
    id: 4,
    quote: "Learning another language is not only learning different words for the same things but learning another way to think about things."
  },
  {
    id: 5,
    quote: "The beauty of the world lies in the diversity of its people and the languages they speak."
  },
  {
    id: 6,
    quote: "Language is the dress of thought."
  },
  {
    id: 7,
    quote: "Learning a language is opening a new window to the world."
  },
  {
    id: 8,
    quote: "Language is the light of the mind."
  },

];

const randomQuote = Math.floor(Math.random() * quotes.length);

export const quote = quotes[randomQuote];
