function appendMovies(movies, ele) {
    const ul = document.createElement("ul")
    ul.className = "unordered-list"
    ele.append(ul)
    for (const movie of movies) {
        const li = document.createElement("li")
        const movieDelete = createDeleteButton()
        li.innerText = movie.title
        ul.append(li)
        ul.append(movieDelete)
    }
}

function createDeleteButton() {
    const movieDelete = document.createElement("button")
    movieDelete.innerText = "Delete"
    movieDelete.className = "genric-btn success radius"
    return movieDelete
}