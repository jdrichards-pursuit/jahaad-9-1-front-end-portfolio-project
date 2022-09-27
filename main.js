const PURSUIT_BASE_URL = 'https://pursuit-9-1-full-stack-project.herokuapp.com'
const PURSUIT_URL_QUOTES = '/api/quotes'
const FULL_URL_QUOTES = `${PURSUIT_BASE_URL}${PURSUIT_URL_QUOTES}`
console.log(`QUOTES API URL: ${FULL_URL_QUOTES}`)
const singleQuote = ''

fetch(FULL_URL_QUOTES)
.then(res => res.json())
.then(res => {
    const data = res
        const roll = Math.floor(Math.random() * 30)
        let quote = null
        for (let i = 0; i < res.length; i++) { // exist to iterate through our retrieved data object
          quote = data[roll].quote;
          const quoteStorage = document.querySelector('.modal-content')
          
          singleQuote.textContent = quote
        }
        const modalContent = document.querySelector('.quote')
        modalContent.textContent = data[roll].quote
  
})

const messageForm = document.querySelector('.message')
console.log(messageForm)
messageForm.addEventListener('submit', event => {
  console.log(`Form has been submitted`)
  event.preventDefault

})

console.log(messageForm)