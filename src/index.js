import './style.css';

const navigation = require('./modules/navigation.js');

const list = require('./modules/list.js');

const liking = require('./modules/like.js');

const forms = require('./modules/forms.js');

navigation();

list();



const observer = new MutationObserver(() => {
  if (document.querySelectorAll('.movie-card')) {
    liking();
    forms();
    observer.disconnect();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false,
});