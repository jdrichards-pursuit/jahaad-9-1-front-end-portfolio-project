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

// adding the empty nav bar ( / ! \  will need to make this into a function)

    // first the element ( list )

    //aboutus
    // const about = document.createElement('a')
    // about.href = 'Pages/aboutUs/index.html' //  # the hash is used to scroll to specific id of a page or top of a page when used by itself
    // about.textContent = 'About Us'

    // const homeInput = document.createElement('input')
    // homeInput.type = 'button'
    // homeInput.value = 'HOME'
    // homeInput.className = 'home'



    // selecting our navbar aside
    const navBar = document.querySelector('.navbar')

    // apending
    // navBar.append(about)
    // starterNavBarItem.append(starterNavBarItemInput)

// Add functionality to the navbar
navBar.addEventListener('click', event => {
    // event.preventDefault()
    // console.log(event.target.className) // our target is event.target.className
})

// Populating our NavBar
    // const pageNumber = 4
    // const home = 'Home'
    // const projects = 'Projects'
    // const pursuit = 'Pursuit'
    // // const story = 'Story'
    // const homeLink = './index.html'
    // const projectsLink = 'Pages/projects/index.html'
    // const pursuitLink = 'Pages/pursuit/index.html'
    // // const storyLink = 'Pages/story/index.html'
    // const arrOfPages = [home,projects,pursuit]
    // const arrOfPagesLinks = [homeLink,projectsLink,pursuitLink]
    // console.log(arrOfPages)
    // console.log(arrOfPagesLinks)
    // function populateNav(pageArr,pageLinksArr){ 
    //     console.log('test')
    //     console.log(pageArr[0])
    // for (let i = 0; i < pageNumber; i++) {
    //     // console.log(pageArr[i])
    //     const page = pageArr[i]
    //     const pageLink = pageLinksArr[i]
    //     // console.log(page)

    //     const appPage = document.createElement('a')
    //     console.log (appPage)
    //     appPage.textContent = page
    //     appPage.href = pageLink
        
    //     navBar.append(appPage)
        // console.log(pageLink)
        // page = document.createElement('a')
        // page.href = page.arrOfPagesLinks
//     }
// }
// populateNav(arrOfPages,arrOfPagesLinks)

