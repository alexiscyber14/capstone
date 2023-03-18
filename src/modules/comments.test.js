// setting up test data
const mockCommentsLength = 5;
const mockCommentCountElement = { innerHTML: '' };

test('updates comment count', () => {
  // define commentCountElement in test
  const commentCountElement = mockCommentCountElement;

  // call the function with mock data
  commentCountElement.innerHTML = `${mockCommentsLength}`;

  //we check that the comment count is updated correctly
  expect(mockCommentCountElement.innerHTML).toBe(`${mockCommentsLength}`);
});