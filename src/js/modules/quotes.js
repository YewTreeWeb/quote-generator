class Quotes {
  constructor() {
    // Add API
    this.api = 'https://goquotes-api.herokuapp.com/api/v1/'
    // Set the count
    this.count = 1
  }

  async fetchQuotes(tag) {
    const getQuotes = await this.getQuotes(tag)
    const getTags = await this.fetchTags()

    return {
      getQuotes,
      getTags,
    }
  }

  // Get a random quote
  async getQuotes(tag) {
    const query = `random/${this.count}?type=tag&val=${tag}`
    try {
      const response = await fetch(this.api + query)
      const data = await response.json()

      if (data.status !== 200) {
        throw new Error('Cannot fetch the api!')
      }

      return data
    } catch (error) {
      console.error('Whoops, no quote!', error)
    }
  }

  async fetchTags() {
    try {
      const response = await fetch(`${this.api}all/tags`)
      const data = await response.json()

      if (data.status !== 200) {
        throw new Error('Cannot fetch the api!')
      }

      return data
    } catch (error) {
      console.error('Not able to fetch tags', error)
    }
  }
}

export default Quotes
