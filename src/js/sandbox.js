/* eslint-disable dot-notation */
/* eslint-disable no-array-constructor */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */

// Import externals
import 'airbnb-browser-shims'

// Import internals
import './modules/helpers'
import Quotes from './modules/quotes'

// Call new quotes class
const quotes = new Quotes('motivational')

/**
 * Content Goes Here
 */
if (process.env.NODE_ENV !== 'production') {
  console.log("Let's go!!")
}

// Get HTML
const quoteContainer = document.querySelector('#quote-container')
const quoteText = quoteContainer.querySelector('#quote-text h1')
const quoteAuthor = quoteContainer.querySelector('#author')

// Update UI
const updateUI = data => {
  console.log(data)

  const { quotes } = data

  const author = quotes[0].author
  const text = quotes[0].text

  // Generate HTML
  quoteText.textContent = text
  quoteAuthor.textContent = author

  console.log(text.length)

  if (text.length > 120) {
    quoteText.classList.remove('text-2xl sm:text-clamp-2xl4xl lg:text-4xl')
    quoteText.classList.add('text-xl sm:text-clamp-xl3xl lg:text-3xl')
  } else {
    quoteText.classList.remove('text-xl sm:text-clamp-xl3xl lg:text-3xl')
    quoteText.classList.add('text-2xl sm:text-clamp-2xl4xl lg:text-4xl')
  }
}

// On load
quotes
  .getQuote()
  .then(data => {
    updateUI(data)
  })
  .catch(error => console.error(error))
