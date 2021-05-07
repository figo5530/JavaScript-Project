class WatchList {
    constructor(watchlist) {
        this.name = watchlist.name
        this.id = watchlist.id
        this.movies = watchlist.movies
    }

    appendList() {
        const liDiv = document.getElementById("listDiv")
        const div = document.createElement("div")
        const innerDiv = document.createElement("div")
        const tag = document.createElement("h3")
        innerDiv.append(tag)
        WatchList.setCss(div, innerDiv, tag)
        tag.innerText = this.name
        tag.addEventListener('click', this.renderListShowPage.bind(this))
        appendMovies(this.movies, innerDiv)
        div.append(innerDiv)
        liDiv.append(div) 
    }

    renderListShowPage() {
        const liContainer = document.getElementById("container")
        liContainer.children[1].innerHTML = ""
        liContainer.children[0].remove()
        appendMovieForm()
        this.appendList()
    }

    static fetchWatchList() {
        fetch("http://localhost:3000/watch_lists").then(resp => resp.json())
        .then(this.appendLists)
    }
    
    static appendLists(lists) {
        for (const list of lists) {
            let watchList = new WatchList(list)
            watchList.appendList()
        }
    }

    static postList(e) {
        e.preventDefault()
        const userInput = e.target.children[0].children[0].value
        e.target.reset()
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({watchlist: {name: userInput}})
        }
        fetch("http://localhost:3000/watch_lists", option).then(resp => resp.json()).then(list => {
            let watchList = new WatchList(list)
            watchList.appendList()
        })
    }

    static setCss(div, innerDiv, tag) {
        div.className = "section-top-border"
        innerDiv.className = "col-lg-4 col-sm-6 mt-sm-30 typo-sec"
        tag.className = "mb-20 title_color"
    }
}








