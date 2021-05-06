function appendMovies(movies, ele) {
    const ul = document.createElement("ul")
    ul.className = "unordered-list"
    ele.append(ul)
    for (const movie of movies) {
        const li = document.createElement("li")
        li.innerText = movie.title
        const movieDelete = createDeleteButton()
        movieDelete.addEventListener('click', function(e) {
            deleteMovie(movie.id, li)
        })
        li.append(movieDelete)
        ul.append(li)
    }
}

function createDeleteButton() {
    const div = document.createElement("div")
    div.className = "button-group-area mt-40"
    const movieDelete = document.createElement("button")
    movieDelete.innerText = "Delete"
    movieDelete.className = "genric-btn success radius"
    div.append(movieDelete)
    return div
}

function deleteMovie(movieId, ele) {
    fetch(`http://localhost:3000/movies/${movieId}`, {
        method: "DELETE"}).then(resp => resp.json())
        .then(m => {
            ele.remove()
        })
}