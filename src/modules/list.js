const popper = require('./popup.js');
const itemsList = () => {
  const movieGrid = document.querySelector('#movie-grid');
  fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((shows) => {
      shows = shows.filter((show) => show.image && show.image.medium);
      shows = shows.slice(0, 10);
      shows.forEach((show, index) => {
        const movieContainer = document.createElement('div');
        movieContainer.className = 'movie-container';
        movieContainer.id = index;
        movieContainer.innerHTML = `
              <div class="movie-card" >
                <img src="${show.image.medium}" class="movie-image">
                <div class="card-titles">
                <h2>${show.name}</h2><button class="click-button"><i class="fa fa-heart"></i></button>
                </div>            
                <p class="counter"><span id="likes-count" class="counters"></span> likes</p>
                <button class="open-popup">Comments</button>
                <section class="popup">
                <button class="close-popup">close</button>
                <div class="pop-container">

                <img src="${show.image.original}" alt="">
                <h2 class="pop-title">${show.name}</h2>
                <p class="pop-summary">${show.summary.replace(/<\/?p>/g, '').replace(/<\/?b>/g, '')}</p>
                <div class="commentor">
                <h3>Comments (<span class="comment-count"></span>)</h3>
                <ul class="comments-list"></ul>
                </div>
                <div class="forma">
                <h3>Add a comment</h3>
                <form data-item-id="item1">
                <label for="username1">Username:</label>
                <input type="text" id="username1" class="username" name="username" required>
                <label for="comment1">Comment:</label>
                <input type="text" id="comment1" class="comment" name="comment" required>
                <button type="submit">Submit</button>
              </form>
                </div>
                </div>
              </section> 
                </div>
              `;
        movieGrid.appendChild(movieContainer);
        const observer = new MutationObserver(() => {
          if (document.querySelectorAll('.movie-card')) {
            // popper();
            const countShowsOnHomePage = () => {
              const movieCards = document.querySelectorAll('.movie-card');
              const showNumber = document.getElementById('show-count');
              showNumber.textContent = movieCards.length;
            };
            countShowsOnHomePage();
               popper();
            observer.disconnect();
          }
        });
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: false,
          characterData: false,
        });
      });
      return shows.map((show, index) => index);
    });
};
module.exports = itemsList;