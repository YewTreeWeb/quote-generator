class Quotes {
  constructor() {
    // Add API
    this.api = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    // Set the count
    this.count = 1
    // Cache for loaded quotes dataset
    this._allQuotes = null
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
    try {
      const data = await this._loadAll()
      const pool = this._filterByTag(data, tag)
      if (!pool.length) throw new Error('No quotes available for the selected tag')
      const pick = pool[Math.floor(Math.random() * pool.length)]
      const mapped = this._mapQuote(pick)
      return { quotes: [mapped] }
    } catch (error) {
      console.error('Whoops, no quote!', error)
      return { quotes: [] }
    }
  }

  async fetchTags() {
    try {
      const data = await this._loadAll()
      const unique = new Set()
      data.forEach((q) => {
        const tags = this._extractTags(q)
        tags.forEach((t) => unique.add(t))
      })
      const tags = ['general', ...Array.from(unique).sort()].map((name) => ({ name }))
      return { tags }
    } catch (error) {
      console.error('Not able to fetch tags', error)
      return { tags: [{ name: 'general' }] }
    }
  }

  // Load and cache all quotes from the static JSON
  async _loadAll() {
    if (Array.isArray(this._allQuotes) && this._allQuotes.length) return this._allQuotes
    const response = await fetch(this.api)
    if (!response.ok) throw new Error(`API request failed: ${response.status}`)
    const data = await response.json()
    // Expecting an array of quote objects
    if (!Array.isArray(data)) throw new Error('Unexpected API response format')
    this._allQuotes = data
    return this._allQuotes
  }

  // Normalise quote object to { text, author }
  _mapQuote(q) {
    const text = q.text || q.quote || q.q || ''
    const author = q.author || q.a || 'Unknown'
    return { text, author }
  }

  // Extract tags array from a quote object
  _extractTags(q) {
    const tagFields = []
    if (Array.isArray(q.tags)) tagFields.push(...q.tags)
    if (typeof q.tag === 'string' && q.tag.trim()) tagFields.push(q.tag.trim())
    if (typeof q.category === 'string' && q.category.trim()) tagFields.push(q.category.trim())
    return tagFields.filter(Boolean)
  }

  // Filter quotes by a given tag; 'general' means no filter
  _filterByTag(all, tag) {
    if (!tag || tag === 'general') return all
    return all.filter((q) => {
      const tags = this._extractTags(q).map((t) => t.toLowerCase())
      return tags.includes(String(tag).toLowerCase())
    })
  }
}

export default Quotes
