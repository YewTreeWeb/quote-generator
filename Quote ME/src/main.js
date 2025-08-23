import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="my-0 mx-auto block opacity-0 transition-opacity duration-700">
    <section
      class="container py-6 px-8 rounded-2xl bg-white bg-opacity-50 shadow-lg mx-auto lg:max-w-screen-900 lg:my-auto lg:mx-6 2xl:max-w-screen-1466"
      id="quote-container">
      <div class="flex justify-center items-start" id="quote-text">
        <i class="fas fa-quote-left text-7xl mr-6"></i>
        <h1 class="text-2xl text-left sm:text-clamp-2xl4xl lg:text-4xl font-semibold" id="quote"></h1>
      </div>
      <p class="text-clamp-lg2xl my-3 font-normal italic" id="author"></p>
      <div class="flex justify-between items-center" id="quote-buttons">
        <button class="cursor-pointer outline-none bg-gray-700 py-2 px-7 text-white text-lg w-fit rounded-md group"
          id="twitter" title="Tweet This!"><i class="fab fa-twitter group-hover:text-twitter"></i></button>
        <button class="cursor-pointer outline-none bg-gray-700 py-2 px-7 text-white text-lg w-fit rounded-md"
          id="new-quote">New Quote</button>
      </div>
    </section>
    <section class="py-6 px-8 rounded-2xl bg-white bg-opacity-50 shadow-lg mt-5 max-w-screen-md mx-auto">
      <form class="flex items-center justify-between">
        <label for="quote-categories">Select quote category</label>
        <select name="categories" id="quote-categories"></select>
        <button class="cursor-pointer outline-none bg-gray-700 py-2 px-7 text-white text-lg w-fit rounded-md"
          type="submit">Submit</button>
      </form>
    </section>
  </main>
  <div class="loading flex flex-wrap justify-center items-center">
    <div class="loader flex rounded-full border-4 border-solid border-transparent w-20 h-20 animate-spin"></div>
    <p class="block w-full mt-8 font-bold text-xl">Getting quote...</p>
  </div>
`
