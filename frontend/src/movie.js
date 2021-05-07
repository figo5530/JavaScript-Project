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
        const movieDelete = HelperTool.createButton("Delete")
        movieDelete.addEventListener('click', (e) => {
            this.deleteMovie(li)
        })
        li.append(movieDelete)
        ele.append(li)
    }

    deleteMovie(ele) {
        fetch(HelperTool.url(`movies/${this.id}`), {
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
        fetch(HelperTool.url("movies"), HelperTool.postOption(body))
        .then(resp => resp.json())
        .then(movie => {
            let ul = document.getElementById(`watchlist-${movie.watch_list_id}`)
            let newMovie = new Movie(movie)
            newMovie.appendMovie(ul)
        })
    }
    
}
