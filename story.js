/** APIS **/
// PURSUIT API QUOTE URLS
const PURSUIT_BASE_URL = 'https://pursuit-9-1-full-stack-project.herokuapp.com';
const PURSUIT_URL_QUOTES = '/api/quotes';
const FULL_URL_QUOTES = `${PURSUIT_BASE_URL}${PURSUIT_URL_QUOTES}`;
console.log(`QUOTES API URL: ${FULL_URL_QUOTES}`);
const singleQuote = '';

//NEWS API URLS
const TC_NEWS_URL =
  'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=939315bc84374110960eec2aa85bd20a';
const WSJ_NEWS_URL =
  'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=939315bc84374110960eec2aa85bd20a';
const TESLA_NEWS_URL =
  'https://newsapi.org/v2/everything?q=tesla&from=2022-08-28&sortBy=publishedAt&apiKey=939315bc84374110960eec2aa85bd20a';

/** DOM NODES **/
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const row3 = document.getElementById('row3');

const wsjButton = document.querySelector('.wsj');
const tcButton = document.querySelector('.tc');
const teslaButton = document.querySelector('.tesla');
const trashButton = document.querySelector('.trash');

//EVENT LISTENERS
wsjButton.addEventListener('click', () => {
  getArticles(WSJ_NEWS_URL);
});

tcButton.addEventListener('click', () => {
  getArticles(TC_NEWS_URL);
});

teslaButton.addEventListener('click', () => {
  getArticles(TESLA_NEWS_URL);
});

trashButton.addEventListener('click', () => {
  eraseStories();
});

/** FUNCTIONS **/

function fetchQuotes(url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const data = res;
      const roll = Math.floor(Math.random() * 30);
      let quote = null;
      for (let i = 0; i < res.length; i++) {
        // exist to iterate through our retrieved data object
        quote = data[roll].quote;
        singleQuote.textContent = quote;
      }
      const modalContent = document.querySelector('.quote');
      modalContent.textContent = data[roll].quote;
    });
}

// REMOVES ALL STORIES
function eraseStories() {
  row1.innerHTML = '';
  row2.innerHTML = '';
  row3.innerHTML = '';
}

// FETCH STORY ARTICLES AND APPEND TO DOM
function getArticles(url) {
  eraseStories();
  if (!document.querySelector('h1')) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const article1 = res.articles[0];
        const article2 = res.articles[1];
        const article3 = res.articles[2];

        const article1Title = document.createElement('h1');
        const article2Title = document.createElement('h1');
        const article3Title = document.createElement('h1');
        const article1Content = document.createElement('p');
        const article2Content = document.createElement('p');
        const article3Content = document.createElement('p');

        article1Title.textContent = article1.title;
        article2Title.textContent = article2.title;
        article3Title.textContent = article3.title;
        article1Content.textContent = article1.content;
        article2Content.textContent = article2.content;
        article3Content.textContent = article3.content;

        row1.append(article1Title, article1Content);
        row2.append(article2Title, article2Content);
        row3.append(article3Title, article3Content);
      });
  } else {
    console.log('overfill');
  }
}

/* RUN AT EXECUTION */
fetchQuotes(FULL_URL_QUOTES);
