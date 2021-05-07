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

function appendMovieForm() {
    const container = document.getElementById("container")
    const movieForm = `
    <div class="section-top-border">
        <h3 class="mb-30 title_color">Add Movie</h3>
        <form id="movieForm">
            <div class="mt-10">
                <input type="text" name="title" placeholder="Movie Title" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Movie Title'" required class="single-input">
            </div>
            <div class="mt-10">
            </div>
            <div class="button-group-area mt-40">
                <input type="submit" class="genric-btn success radius" value="Create">
            </div>
        </form>
    </div>
    `
    container.innerHTML += movieForm
    document.getElementById("movieForm").addEventListener('submit', addMovie)
}

function addMovie(e) {
    
}