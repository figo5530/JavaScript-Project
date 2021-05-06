function appendMovies(movies, ele) {
    const ul = document.createElement("ul")
    ul.className = "unordered-list"
    ele.append(ul)
    for (const movie of movies) {
        const li = document.createElement("li")
        li.innerText = movie.title
        ul.append(li)
    }
}