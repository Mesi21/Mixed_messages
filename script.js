window.onload = () => {
  const title = document.getElementById("quote-type");
  const card_text = document.getElementById("quote-text");
  const author = document.getElementById("author_section");
  const titles = ['Inspirational', 'Motivational', 'Wisdom', 'Wisdom', 'Inspirational', 'Wisdom', 'Inspirational'];
  const quotes = ['Every day may not be good, but there is something good in every day','Make each day your masterpiece.', 'In a gentle way, you can shake the world.', 'You can\'t make a cloudy day a sunny day, but you can embrace it and decide it\’s going to be a good day after all.', 'You can, you should, and if you\’re brave enough to start, you will.', 'Happiness is not by chance, but by choice.', 'If I cannot do great things, I can do small things in a great way.'];
  const authors = ['Alice Morse Earl', 'John Wooden', 'Mahatma Gandhi', 'Jane Lynch', 'Stephen King', 'Jim Rohn', 'Martin Luther King Jr.'];
  const getQuote = document.getElementById("get_quote")
  getQuote.addEventListener('click', () => {
    let idx = Math.floor(Math.random() * (titles.length - 1))
    title.innerHTML = titles[idx];
    card_text.innerHTML = quotes[idx];
    author.innerHTML = authors[idx];
  })
}