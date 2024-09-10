window.onload = () => {
  const title = document.getElementById("quote-type");
  const card_text = document.getElementById("quote-text");
  const author = document.getElementById("author_section");
  const titles = ['Inspirational', 'Motivational', 'Wisdom'];
  const quotes = ['Every day may not be good, but there is something good in every day','Make each day your masterpiece.', 'In a gentle way, you can shake the world.'];
  const authors = ['Alice Morse Earl', 'John Wooden', 'Mahatma Gandhi'];
  const getQuote = document.getElementById("get_quote")
  getQuote.addEventListener('click', () => {
    let idx = Math.floor(Math.random() * (titles.length - 1))
    title.innerHTML = titles[idx];
    card_text.innerHTML = quotes[idx];
    author.innerHTML = authors[idx];
  })
}