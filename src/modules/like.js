const liking = () => {
  const app_id = 'KzwZOCFbhGmm4eCzpr59';
  const urls = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${app_id}/likes`;
  async function getLikesTotal(itemId) {
    try {
      const response = await fetch(urls);

      if (!response.ok) {
        throw new Error('Failed to get likes total.');
      }
      const data = await response.json();
      const likesTotal = data.find((item) => item.item_id === itemId)?.likes ?? 0;
      return likesTotal;
    } catch (error) {
      return 0;
    }
  }
  async function sendLikesTotal(itemId, likesTotal) {
    try {
      const response = await fetch(urls, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
          likes: likesTotal,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to send likes total.');
      }
    } catch (error) {
    }
  }
  async function updateClickCount() {
    const buttons = Array.from(document.querySelectorAll('.click-button'));
    const paragraphs = Array.from(document.querySelectorAll('.counters'));

    buttons.forEach((button, index) => {
      const paragraph = paragraphs[index];
      const itemId = `click-counter-${index + 1}`;
      getLikesTotal(itemId).then((likesTotal) => {
        let count = parseInt(likesTotal);
        paragraph.textContent = count;
        button.addEventListener('click', () => {
          count + 1;
          paragraph.textContent = count;
          sendLikesTotal(itemId, count);
          window.location.reload();
        });
      });
    });
  }

  updateClickCount();
};

module.exports = liking;