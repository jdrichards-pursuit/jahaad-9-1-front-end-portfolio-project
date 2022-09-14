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

// adding our h1 and h2
    const starterH1 = document.createElement('h1')
    starterH1.textContent = 'Frontend Portfolio Project'
    const starterH2 = document.createElement('h2')
    starterH2.textContent = 'Jahaad Petty'

    // selecting our destination for starterH1 & starterH2 ( header and article class=page-content )
    const header = document.querySelector('.page-header')
    const pageContent = document.querySelector('.page-content')

    // appending
    header.append(starterH1)
    pageContent.append(starterH2)

// adding footer example for visual purposes
    
    // first the element ( p )
    const starterFooter = document.createElement('p')
    starterFooter.textContent = `2022 pe.solutions`

    // selecting our destination for starterFooter
    const footer = document.querySelector('footer')
    
    // appending
    footer.append(starterFooter)