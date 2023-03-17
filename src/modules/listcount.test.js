const countShowsOnHomePage = () => {
  const movieCards = document.querySelectorAll('.movie-card');
  const showNumber = document.getElementById('show-count');
  showNumber.textContent = movieCards.length;
};

describe('countShowsOnHomePage', () => {
  beforeEach(() => {
    // Set up a mock DOM environment using JSDOM
    document.body.innerHTML = `
        <div id="movie-container">
          <div class="movie-card"></div>
          <div class="movie-card"></div>
          <div class="movie-card"></div>
          <div class="movie-card"></div>
          <div class="movie-card"></div>
          <div class="movie-card"></div>
          <div class="movie-card"></div>
          <div class="movie-card"></div>
          <div class="movie-card"></div>
          <div class="movie-card"></div>
        </div>
        <span id="show-count"></span>
      `;
  });

  test('displays the correct number of shows on the homepage', () => {
    countShowsOnHomePage();
    const showNumber = document.getElementById('show-count');
    expect(showNumber.textContent).toBe('10');
  });
});
