alert('Welcome to Quiz Ninja!');

const characters = [
  ['Superman', 'Clark Kent'], 
  ['Wonder Woman', 'Diana Prince'],
  ['Batman', 'Bruce Wayne']
];

const heroes = new Map(characters);

let score = 0;

for(const [alterEgo, person] of heroes.entries()) {
  const response = prompt(`What is ${alterEgo}'s real name?`);
  if(response === person) {
    alert('Correct!');
    score++;
  } else {
    alert (`Wrong! The correct answer was ${person}.`);
  }
}
alert(`Your score is ${score}.`);