// Array that stores a list of the quotes and their author
const quotes = [
  { text: 'Hidup Seperti Larry', author: 'Firman' },
  { text: 'Hiduplah Seperti Air, Mengalir Sampai Jauh', author: 'Amal' },
  { text: 'Jika kita tidak pandai, maka kita harus rajin', author: 'Aldi' },
  { text: 'Tidak ada yang gagal, yang ada hanya menyerah untuk mencoba', author: 'Arif' },
  { text: 'Kehidupan itu baik, ekspektasi kita yang buruk', author: 'Alfi' },
  { text: 'Realita kadang tidak sesuai dengan yang kita mau', author: 'Adit' },
  { text: 'Menangislah, itu bisa membuat ketenangan', author: 'Budi' },
  { text: 'Tidak ada alasan untuk mencoba, karena orang sukses terlahir dari orang gagal yang terus mencoba', author: 'Wahyu' },
];

// Get HTML elements by their id
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// Function to generate a random quote
function generateQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Update the quote text and author in the HTML element
  quoteText.textContent = `"${randomQuote.text}"`;
  quoteAuthor.textContent = `- ${randomQuote.author}`;
}

// Add event listener to the button
newQuoteButton.addEventListener('click', generateQuote);

// Call generateQuote when page loaded
generateQuote();
