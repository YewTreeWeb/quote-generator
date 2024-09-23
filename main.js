import './fontawesome-all.min.js'

const loading = document.getElementById('loading')
const getQuotes = async () => {
  const api = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
  loading.classList.remove('hidden')
  loading.classList.add('flex')
  try {
    const res = await fetch(api)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  } finally {
    loading.classList.remove('flex')
    loading.classList.add('hidden')
  }
}

getQuotes()
