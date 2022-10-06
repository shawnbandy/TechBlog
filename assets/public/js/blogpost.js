
const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#textArea').value.trim();
    //const user_id = req.session.userID;

    console.log(`${title}, ${content}`)

    if (title && content){
        const res = await fetch('/api/post/create', {
            method: 'POST',
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
    .addEventListener('submit', newPostHandler);
document
    .querySelector('#postForm')
    .addEventListener('submit', console.log('hellow'));