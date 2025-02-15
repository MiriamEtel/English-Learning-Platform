const questions = {
  easy: [
    { question: "What color is the sun?", answers: [{ text: "Blue", correct: false }, { text: "Yellow", correct: true }] },
    { question: "What do you drink when you are thirsty?", answers: [{ text: "Water", correct: true }, { text: "Sand", correct: false }] },
    { question: "Which animal says 'Meow'?", answers: [{ text: "Dog", correct: false }, { text: "Cat", correct: true }] },
    { question: "What do you use to write?", answers: [{ text: "Spoon", correct: false }, { text: "Pen", correct: true }] },
    { question: "Where do you sleep?", answers: [{ text: "Chair", correct: false }, { text: "Bed", correct: true }] },
    { question: "Which fruit is red and round?", answers: [{ text: "Apple", correct: true }, { text: "Banana", correct: false }] },
    { question: "What do you wear on your feet?", answers: [{ text: "Shoes", correct: true }, { text: "Hat", correct: false }] },
    { question: "What do you use to eat soup?", answers: [{ text: "Fork", correct: false }, { text: "Spoon", correct: true }] },
    { question: "Which one can fly?", answers: [{ text: "Fish", correct: false }, { text: "Bird", correct: true }] },
    { question: "What do you say when you meet someone?", answers: [{ text: "Goodbye", correct: false }, { text: "Hello", correct: true }] },
    { question: "Which drink is hot?", answers: [{ text: "Tea", correct: true }, { text: "Juice", correct: false }] },
    { question: "What do you put on bread?", answers: [{ text: "Salt", correct: false }, { text: "Butter", correct: true }] },
  ],

  medium: [
    { question: "What do bees make?", answers: [{ text: "Milk", correct: false }, { text: "Honey", correct: true }] },
    { question: "Which month comes after March?", answers: [{ text: "May", correct: false }, { text: "April", correct: true }] },
    { question: "What do you use to open a door?", answers: [{ text: "Brush", correct: false }, { text: "Key", correct: true }] },
    { question: "What is a baby cat called?", answers: [{ text: "Kitten", correct: true }, { text: "Puppy", correct: false }] },
    { question: "Which season is the coldest?", answers: [{ text: "Winter", correct: true }, { text: "Summer", correct: false }] },
    { question: "What do you use to see?", answers: [{ text: "Ears", correct: false }, { text: "Eyes", correct: true }] },
    { question: "What is the opposite of small?", answers: [{ text: "Short", correct: false }, { text: "Big", correct: true }] },
    { question: "Which one is a vegetable?", answers: [{ text: "Orange", correct: false }, { text: "Carrot", correct: true }] },
    { question: "Where do fish live?", answers: [{ text: "Tree", correct: false }, { text: "Water", correct: true }] },
    { question: "What do you use to call someone?", answers: [{ text: "Book", correct: false }, { text: "Phone", correct: true }] },
    { question: "Which animal lives in the desert?", answers: [{ text: "Penguin", correct: false }, { text: "Camel", correct: true }] },
    { question: "What do plants need to grow?", answers: [{ text: "Sugar", correct: false }, { text: "Water", correct: true }] },
  ],

  hard: [
    { question: "What is the opposite of fast?", answers: [{ text: "Quick", correct: false }, { text: "Slow", correct: true }] },
    { question: "What do you use to keep food cold?", answers: [{ text: "Fridge", correct: true }, { text: "Oven", correct: false }] },
    { question: "What do you wear when it's raining?", answers: [{ text: "T-shirt", correct: false }, { text: "Raincoat", correct: true }] },
    { question: "Which animal is the largest in the ocean?", answers: [{ text: "Shark", correct: false }, { text: "Whale", correct: true }] },
    { question: "What is the opposite of soft?", answers: [{ text: "Smooth", correct: false }, { text: "Hard", correct: true }] },
    { question: "What do you use to travel long distances quickly?", answers: [{ text: "Bicycle", correct: false }, { text: "Airplane", correct: true }] },
    { question: "Which one is a type of musical instrument?", answers: [{ text: "Spoon", correct: false }, { text: "Guitar", correct: true }] },
    { question: "Which sense helps you smell?", answers: [{ text: "Hands", correct: false }, { text: "Nose", correct: true }] },
    { question: "What do you use to tell time?", answers: [{ text: "Mirror", correct: false }, { text: "Clock", correct: true }] },
    { question: "What do you wear on your head?", answers: [{ text: "Hat", correct: true }, { text: "Socks", correct: false }] },
    { question: "Which one is a type of energy?", answers: [{ text: "Plastic", correct: false }, { text: "Electricity", correct: true }] },
    { question: "What do you use to write an email?", answers: [{ text: "Television", correct: false }, { text: "Computer", correct: true }] },
  ],
};

export default questions;
