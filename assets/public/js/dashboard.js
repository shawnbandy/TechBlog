document
  .querySelectorAll('.editButton')
  .forEach((el) => el.addEventListener('click', editPost));
document
  .querySelectorAll('.deleteButton')
  .forEach((el) => el.addEventListener('click', deletePost));

var editPost = async (e) => {
  e.preventDefault();

  let id = e.target.id;

  const res = await fetch(`edit/post/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.ok) {
    document.location.replace(`/edit/post/${id}`);
  }
};

var deletePost = async (e) => {
  e.preventDefault();

  let id = e.target.id;

  const res = await fetch(`/api/post/delete/${id}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    document.location.reload();
  }
};
