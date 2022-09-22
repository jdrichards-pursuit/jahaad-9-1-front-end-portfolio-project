const PURSUIT_BASE_URL = 'https://pursuit-9-1-full-stack-project.herokuapp.com'
const PURSUIT_URL_QUOTES = '/api/quotes'
const FULL_URL_QUOTES = `${PURSUIT_BASE_URL}${PURSUIT_URL_QUOTES}`
console.log(`QUOTES API URL: ${FULL_URL_QUOTES}`)

const displayQuote = document.createElement('p')
// time for the fetch
fetch(FULL_URL_QUOTES)
.then(res => res.json())
.then(res => {
    const data = res
    console.log(res)
        //This is calling the random advice from the api slip
        // rolling a number to see which is our quote
        // we need to roll from 1-30
        const roll = Math.floor(Math.random() * 30)
        let quote = null

        for (let i = 0; i < res.length; i++) { // exist to iterate through our retrieved data object
          quote = data[roll].quote;
          const quoteStorage = document.querySelector('.modal-content')

          
        }
        const modalStorage = document.querySelector('.modal-content')
        const modalContent = document.createElement('p')
        modalContent.textContent = data[roll].quote
        console.log(modalContent)
        console.log(modalStorage)
        modalStorage.append(modalContent)
        console.log(data[roll].quote)
        console.log(quote)
        // appendng to our modal

        // displayQuote.textContent = `${adviceData[0].quote}`
        // console.log(displayQuote)

})
// make a timer th

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

// modal functionality 
const trig = document.querySelectorAll("[data-modal-target]")
const modal = document.querySelectorAll(".modal")
const close = document.querySelectorAll(".modal-close")

// trig.forEach(q => {
//   q.addEventListener('click', event => toggle(event.currentTarget.getAttribute("data-modal-target")));
// });
// close.forEach(q => {
//   q.addEventListener("click", event => toggle(event.currentTarget.closest(".modal").id));
// });
// modal.forEach(q => {
//   q.addEventListener("click", event => {
//     if(event.currentTarget === event.target) toggle(event.currentTarget.id);
//   });
// });

// function toggle(modalId) {
//   const modals = document.getElementById(modalId);

//   if(getComputedStyle(modals).display==="flex") {  
//     modals.classList.add("modal-hide");
//     setTimeout(() => {
//       document.body.style.overflow = "initial"; 
//       modals.classList.remove("modal-show", "modal-hide");
//       modals.style.display = "none";      
//     }, 200);
//   }
//   else {
//     document.body.style.overflow = "hidden"; 
//     modals.style.display = "flex";
//     modals.classList.add("modal-show");
//   }
// }
// loading modal on page load
const modalTarget = document.querySelector(".modal")
window.addEventListener('load', (event) => {
  console.log('Page is fully loaded')
  toggle2(modalTarget)
  console.log (modalTarget)
  onload = (event) => { 
    console.log('page is fully loaded')
  };
})


// function toggle2(modalId) { // put model target here
//   const modals = modalId
//   modals.classList.add('modal-hide')
// }
// toggle2(modalTarget)

// modalTarget.add('modal-hide')

function modalToggle() {
  modalStorage = document.querySelector('.modal-content')
  // console.log('test')
  // if (modalStorage.style.display === "none"){
  //   modalStorage.style.display = 'block'
  // } else {
  //   modalStorage.style.display = 'none'
  // }
  modalStorage.classList.toggle("is-hidden")
}
setTimeout(modalToggle, 5000)
modalToggle()