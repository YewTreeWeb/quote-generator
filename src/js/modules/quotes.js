class Quotes {
  constructor (tag) {
    // Add API
    this.api = 'https://goquotes-api.herokuapp.com/api/v1/'
    // Set the count
    this.count = 1
    // Set the tag
    this.tag = tag || 'general'
    // Get random method
    this.method = 'random/'
  }

  // Get a random quote
  async getQuote () {
    const query = `${this.count}?type=tag&val=${this.tag}`
    try {
      const response = await fetch(this.api + this.method + query)
      const data = await response.json()

      if (data.status !== 200) {
        throw new Error('Cannot fetch the api!')
      }

      return data
    } catch (error) {
      console.error('Whoops, no quote!', error)
    }
  }
}

export default Quotes
