const forms = () => {
  const app_id = 'KzwZOCFbhGmm4eCzpr59';
  async function submitComment(event) {
    event.preventDefault();
    const formIndex = Array.from(document.querySelectorAll('form')).indexOf(event.target);
    const username = event.target.querySelector('.username').value;
    const comment = event.target.querySelector('.comment').value;
    const item_id = `item${formIndex + 1}`;
    try {
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${app_id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id,
          username,
          comment,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit comment.');
      }
      event.target.querySelector('.username').value = '';
      event.target.querySelector('.comment').value = '';
      displayComments();
    } catch (error) {
    }
  }
  async function displayComments() {
    const commentsLists = document.querySelectorAll('.comments-list');
    commentsLists.forEach(async (commentsList, index) => {
      const item_id = `item${index + 1}`;
      const commentCountElement = document.querySelectorAll('.comment-count')[index];

      try {
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${app_id}/comments?item_id=${item_id}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch comments for item ${item_id}.`);
        }

        const comments = await response.json();
        commentsList.innerHTML = '';
        comments.forEach((comment) => {
          const li = document.createElement('li');
          li.textContent = `${comment.creation_date} ${comment.username}_:  ${comment.comment}`;
          commentsList.appendChild(li);
        });
        commentCountElement.innerHTML = `${comments.length}`;
      } catch (error) {
      }
    });
  }
  const commentForms = document.querySelectorAll('form');
  commentForms.forEach((form) => {
    form.addEventListener('submit', submitComment);
  });
  displayComments();
};

module.exports = forms;
