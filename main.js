const PURSUIT_BASE_URL = 'https://pursuit-9-1-full-stack-project.herokuapp.com';
const PURSUIT_URL_QUOTES = '/api/quotes';
const FULL_URL_QUOTES = `${PURSUIT_BASE_URL}${PURSUIT_URL_QUOTES}`;
const singleQuote = '';

fetch(FULL_URL_QUOTES)
  .then((res) => res.json())
  .then((res) => {
    const data = res;
    const roll = Math.floor(Math.random() * 30);
    let quote = null;
    for (let i = 0; i < res.length; i++) {
      // exist to iterate through our retrieved data object
      quote = data[roll].quote;
      const quoteStorage = document.querySelector('.modal-content');

      singleQuote.textContent = quote;
    }
    const modalContent = document.querySelector('.quote');
    modalContent.textContent = data[roll].quote;
  });

// functionality for Contact Us form on aboutUs/index.html
const messageForm = document.querySelector('.message');
const messageStorage = document.getElementById('messageStorage');
let logID = 1;

if (messageForm) {
  messageForm.addEventListener('submit', (event) => {
    alert(`Form has been submitted`);
    event.preventDefault();

    // saving our inputs into variables
    const firstNameValue = document.getElementById('fname').value;
    const lastNameValue = document.getElementById('lname').value;
    const emailValue = document.getElementById('email').value;
    const messageValue = document.getElementById('message').value;

    // creating our article
    const article = document.createElement('article');

    /* POPULATING ARTICLE WITH ELEMENTS */
    // creating our elements
    const articleFirstName = document.createElement('p');
    const articleLastName = document.createElement('p');
    const articleEmail = document.createElement('p');
    const articleMessage = document.createElement('p');
    // populating our elements with data from inputs
    articleFirstName.textContent = firstNameValue;
    articleLastName.textContent = lastNameValue;
    articleEmail.textContent = emailValue;
    articleMessage.textContent = messageValue;
    // appending our elements to article
    article.append(
      articleFirstName,
      articleLastName,
      articleEmail,
      articleMessage
    );
    // adding a class to our article
    article.classList.add('messageInput');
    // adding a unique id to our article
    article.setAttribute('id', `${logID}`);
    logID = logID + 1;
    // appending our article to our message box
    messageStorage.append(article);

    //reseting our form
    messageForm.reset();
  });
}
