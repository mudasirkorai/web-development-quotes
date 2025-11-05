const btn = document.getElementById('btn');
const quote = document.getElementById('quote');

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Web development is not just about code — it’s about creating experiences.",
  "A website without users is like a car without fuel.",
  "Simplicity is the soul of good design.",
  "Every great website starts with a single line of code.",
  "Good design is invisible; bad design shouts at you.",
  "The best way to learn to code is to build something that matters.",
  "A responsive website shows respect for every user.",
  "Don’t comment bad code — rewrite it.",
  "Make it work, make it right, make it fast.",
  "Clean code always looks like it was written by someone who cares.",
  "Your website is your first impression — make it beautiful and fast.",
  "Design is not just what it looks like, but how it works.",
  "The details are not the details — they make the design.",
  "A good developer is always learning, never finished.",
  "If your website takes too long to load, users will take too long to return.",
  "Web performance is not optional — it’s user experience.",
  "Accessibility is not a feature — it’s a right.",
  "Version control isn’t just for teams; it’s for your sanity.",
  "The web is constantly changing — stay curious.",
  "The cleaner the code, the faster the future changes.",
  "Don't build for browsers, build for people.",
  "Design systems turn chaos into consistency.",
  "Debugging is like being the detective in a crime movie where you are also the murderer.",
  "Testing saves time — even when it feels like it costs time.",
  "Your code should tell a story without needing narration.",
  "Good developers copy; great developers understand.",
  "Perfection is achieved not when there is nothing to add, but when there is nothing left to take away.",
  "Learning web development is a marathon, not a sprint."
];


btn.addEventListener('click', () => {
  const random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
});
