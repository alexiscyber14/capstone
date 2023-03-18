import './style.css';

const navigation = require('./modules/navigation.js');

const list = require('./modules/list.js');

const liking = require('./modules/like.js');

const forms = require('./modules/forms.js');

navigation();

list();

forms();

const observer = new MutationObserver(() => {
  if (document.querySelectorAll('.movie-card')) {
    liking();

    observer.disconnect();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false,
});