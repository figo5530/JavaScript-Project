class Movie {
    static allMovies = []
    constructor(movie) {
        this.title = movie.title
        this.id = movie.id
        this.watch_list_id = movie.watch_list_id
        Movie.allMovies.push(this)
    }

    appendMovie(ele) {
        const li = document.createElement("li")
        li.innerText = this.title
        const movieDelete = createDeleteButton()
        movieDelete.addEventListener('click', (e) => {
            this.deleteMovie(li)
        })
        li.append(movieDelete)
        ele.append(li)
    }

    deleteMovie(ele) {
        fetch(`http://localhost:3000/movies/${this.id}`, {
            method: "DELETE"}).then(resp => resp.json())
            .then(m => {
                ele.remove()
                Movie.allMovies = Movie.allMovies.filter(m => m.id !== this.id)
            })
    }

    static addMovie(e) {
        e.preventDefault()
        const userInput = e.target.children[0].children[0].value
        const watchListId = e.target.children[0].children[1].id
        const body = {
            movie: {
                title: userInput,
                watch_list_id: watchListId
            }
        }
        e.target.reset()
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch("http://localhost:3000/movies", option)
        .then(resp => resp.json())
        .then(movie => {
            let ul = document.getElementById(`watchlist-${movie.watch_list_id}`)
            let newMovie = new Movie(movie)
            newMovie.appendMovie(ul)
        })
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