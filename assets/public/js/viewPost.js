
const post_id = document.querySelector('#postID').textContent;
const postForm = document.querySelector('#postForm');
const addComment = document.querySelector('#addComment');

const hideStuff = (e) => {
    e.preventDefault();
    postForm.setAttribute('class', 'd-flex')
    addComment.setAttribute('class', 'd-none');
    console.log(postID);

}

const postComment = async (e) => {
    console.log(post_id)
    e.preventDefault();

    const content = document.querySelector('#commentArea').value.trim();
    
    if(content){
        const res = await fetch('/api/comments/create', {
            method: 'POST',
            body: JSON.stringify({ content, post_id,  }),
            headers: { 'Content-Type': 'application/json' }
        })
        console.log(res)
        if (res.ok){
            alert('Success!');
            document.location.reload();
        } else {
            alert('Something went wrong')
        }
    }
}

addComment.addEventListener('click', hideStuff);
postForm.addEventListener('submit', postComment);


