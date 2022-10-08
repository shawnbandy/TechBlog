
const editPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newTitle').value.trim();
    const content = document.querySelector('#newText').value.trim();
    const id = document.querySelector('#postID').textContent
    console.log(id)
    //const user_id = req.session.userID;

    console.log(`${title}, ${content}`)

    if (title && content){
        const res = await fetch(`/api/post/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok){
            alert('Success!');
            document.location.replace('/dashboard')
        } else {
            alert('Something went wrong')
        }
    }
}

document
    .querySelector('#postForm')
    .addEventListener('submit', editPostHandler);
