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
const quotes = new Quotes()

/**
 * Content Goes Here
 */
if (process.env.NODE_ENV !== 'production') console.log("Let's go!!")

// Capitalize first letter
const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Get HTML
const main = document.getElementsByTagName('main')[0]
const loader = document.querySelector('.loading')
const loaderText = document.querySelector('.loading p')
const quoteContainer = document.querySelector('#quote-container')
const quoteText = quoteContainer.querySelector('#quote-text h1')
const quoteAuthor = quoteContainer.querySelector('#author')
const newQuote = quoteContainer.querySelector('#new-quote')
const tweetBtn = quoteContainer.querySelector('#twitter')
const form = main.querySelector('form')
const select = form.querySelector('#quote-categories')

// Set category value
let category = localStorage.getItem('category')
  ? localStorage.getItem('category')
  : 'general'

// Pass the quote to Twitter
const tweetQuote = () => {
  const quote = quoteText.textContent
  const author = quoteAuthor.textContent
  const tweet = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
  window.open(tweet, '_blank', 'noopener', 'noreferrer')
}

// Update quote
const updateQuote = () => {
  main.classList.remove('opacity-100')
  setTimeout(() => {
    loader.classList.remove('hidden')
    main.classList.add('hidden')
  }, 150)

  quotes
    .fetchQuotes(category)
    .then(data => {
      const { getQuotes } = data
      updateUI(getQuotes.quotes)
    })
    .then(() => {
      setTimeout(() => {
        loader.classList.add('hidden')
        main.classList.remove('hidden')
      }, 100)
      setTimeout(() => {
        main.classList.add('opacity-100')
      }, 450)
    })
    .catch(error => console.error(error))
}

// Create UI
const populateUI = data => {
  const { getQuotes, getTags } = data
  const quotes = getQuotes.quotes
  const tags = getTags.tags
  const options = Array.from(select.options)

  updateUI(quotes)

  tags.forEach(tag => {
    if (tag.name === category) {
      select.options.add(new Option(capitalize(tag.name), tag.name, true, true))
    } else {
      select.options.add(new Option(capitalize(tag.name), tag.name))
    }
  })
}

// Update UI
const updateUI = data => {
  const author = data[0].author
  const text = data[0].text

  // Generate HTML
  quoteText.textContent = text
  quoteAuthor.textContent = author

  if (text.length > 120) {
    quoteText.classList.remove(
      'text-2xl',
      'sm:text-clamp-2xl4xl',
      'lg:text-4xl'
    )
    quoteText.classList.add('text-xl', 'sm:text-clamp-xl3xl', 'lg:text-3xl')
  } else {
    quoteText.classList.remove('text-xl', 'sm:text-clamp-xl3xl', 'lg:text-3xl')
    quoteText.classList.add('text-2xl', 'sm:text-clamp-2xl4xl', 'lg:text-4xl')
  }
}

// Change quote tag
form.addEventListener('submit', e => {
  e.preventDefault()
  category = select.value
  localStorage.setItem('category', select.value)
  updateQuote()
})

// On load
quotes
  .fetchQuotes(category)
  .then(data => {
    populateUI(data)
  })
  .then(() => {
    setTimeout(() => {
      loader.classList.add('hidden')
      loaderText.classList.add('hidden')
      main.classList.remove('hidden')
    }, 100)
    setTimeout(() => {
      main.classList.add('opacity-100')
    }, 450)
  })
  .catch(error => console.error(error))

// Button events
newQuote.addEventListener('click', () => {
  updateQuote()
})

tweetBtn.addEventListener('click', tweetQuote)
