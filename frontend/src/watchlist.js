class WatchList {
    static allList = []
    constructor(watchlist) {
        this.name = watchlist.name
        this.id = watchlist.id
        watchlist.movies.forEach(m => new Movie(m))
        WatchList.allList.push(this)
    }

    get movies() {
        return Movie.allMovies.filter(m => m.watch_list_id === this.id)
    }

    appendList() {
        const liDiv = document.getElementById("listDiv")
        const div = document.createElement("div")
        const innerDiv = document.createElement("div")
        const tag = document.createElement("h3")
        innerDiv.append(tag)
        HelperTool.setCss(div, innerDiv, tag)
        tag.innerText = this.name
        tag.addEventListener('click', this.renderListShowPage.bind(this))
        this.appendMovies(this.movies, innerDiv)
        div.append(innerDiv)
        liDiv.append(div) 
    }

    appendMovies(movies, ele) {
        const ul = document.createElement("ul")
        ul.className = "unordered-list"
        ul.id = `watchlist-${this.id}`
        ele.append(ul)
        for (const movie of movies) {
            movie.appendMovie(ul)
        }
    }

    renderListShowPage() {
        const liContainer = document.getElementById("container")
        liContainer.children[1].innerHTML = ""
        liContainer.children[0].remove()
        const returnBtn = HelperTool.createBtnForWatchList()
        liContainer.append(returnBtn)
        this.appendMovieForm()
        this.appendList()
        const coll = document.getElementsByClassName("genric-btn success radius")
        for (const e of coll) {
            if (e.innerText === 'Home') {
                e.addEventListener('click', returnHome)
            }else if (e.innerText === 'Drop') {
                e.addEventListener('click', (e) => {
                    const ele = document.getElementById(`watchlist-${this.id}`).parentElement.parentElement
                    this.dropWatchList(ele)})
            }else if (e.innerText === 'Edit') {
                e.addEventListener('click', (e) => {
                    this.editWatchList()})
            }
        }
    }

    dropWatchList(ele) {
        fetch(HelperTool.url(`watch_lists/${this.id}`), {
            method: "DELETE"}).then(resp => resp.json())
            .then(wl => {
                ele.remove()
                WatchList.allList = WatchList.allList.filter(w => w.id !== this.id)
                returnHome()
            })
    }

    editWatchList() {
        const container = document.getElementById("container")
        container.innerHTML = HelperTool.editWatchListForm(this.id)
        document.getElementById('form').addEventListener('submit', WatchList.editList)
        this.appendList()
        container.append(HelperTool.createButton('Home'))
        const coll = document.getElementsByClassName("genric-btn success radius")
        for (const e of coll) {
            if (e.innerText === 'Home') {
                e.addEventListener('click', returnHome)
            }
        }
    }

    appendMovieForm() {
        const container = document.getElementById("container")
        const movieForm = HelperTool.movieForm(this.id)
        container.innerHTML += movieForm
        document.getElementById("movieForm").addEventListener('submit', Movie.addMovie)
    }

    static fetchWatchList() {
        fetch(HelperTool.url("watch_lists")).then(resp => resp.json())
        .then(this.appendLists)
    }
    
    static appendLists(lists) {
        for (const list of lists) {
            let watchList = new WatchList(list)
            watchList.appendList()
        }
    }

    static appendListsForReturn() {
        for (const list of WatchList.allList) {
            list.appendList()
        }
    }

    static postList(e) {
        e.preventDefault()
        const userInput = e.target.children[0].children[0].value
        e.target.reset()
        const body = {watchlist: {name: userInput}}
        fetch(HelperTool.url("watch_lists"), HelperTool.postOption(body))
        .then(resp => resp.json()).then(list => {
            let watchList = new WatchList(list)
            watchList.appendList()
        })
    }

    static editList(e) {
        e.preventDefault()
        const userInput = e.target.children[0].children[0].value
        const id = e.target.children[0].children[1].value
        const body = {watchlist: {name: userInput}}
        fetch(HelperTool.url(`watch_lists/${id}`), HelperTool.postOption(body, "PATCH"))
        .then(resp => resp.json()).then(wl => {
            container.children[0].remove()
            container.children[0].innerHTML = ' '
            const wlist = WatchList.allList.find(e => e.id === wl.id)
            wlist.name = wl.name
            wlist.appendList()
        })
    }
}








