
var commentSection = document.querySelector('commentSection');

var showComments = async (event) =>{
    event.preventDefault();

    let id = event.target.id
    console.log(id)
    const res = await fetch(`/view/${id}`, {
        method: 'GET', 
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(res)
    if (res.ok){
        document.location.replace(`/view/${id}`)
    }


}


document.querySelectorAll('.showCommentsButton').forEach(el => el.addEventListener('click', showComments))
