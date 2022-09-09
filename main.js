const PURSUIT_BASE_URL = 'https://pursuit-9-1-full-stack-project.herokuapp.com'
const PURSUIT_URL_QUOTES = '/api/quotes'
const FULL_URL_QUOTES = `${PURSUIT_BASE_URL}${PURSUIT_URL_QUOTES}`
console.log(`QUOTES API URL: ${FULL_URL_QUOTES}`)

// time for the fetch
fetch(FULL_URL_QUOTES)
.then(res => res.json())
.then(res => {
    console.log(res)
})