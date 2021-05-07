function fetchWatchList() {
    fetch("http://localhost:3000/watch_lists").then(resp => resp.json()).then(lists => {
        appendLists(lists)
    })
}

function appendLists(lists) {
    const liDiv = document.getElementById("listDiv")
    for (const list of lists) {
        const div = document.createElement("div")
        const innerDiv = document.createElement("div")
        const tag = document.createElement("h3")
        innerDiv.append(tag)
        setCss(div, innerDiv, tag)
        tag.innerText = list.name
        tag.addEventListener('click', (e) => renderListShowPage(list))
        appendMovies(list.movies, innerDiv)
        div.append(innerDiv)
        liDiv.append(div) 
    }
}

function setCss(div, innerDiv, tag) {
    div.className = "section-top-border"
    innerDiv.className = "col-lg-4 col-sm-6 mt-sm-30 typo-sec"
    tag.className = "mb-20 title_color"
}

const form = document.getElementById("form")

function postList(e) {
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
        const arr = []
        arr.push(list)
        appendLists(arr)
    })
}

function renderListShowPage(list) {
    const liContainer = document.getElementById("container")
    liContainer.children[1].innerHTML = ""
    liContainer.children[0].remove()
    appendMovieForm()
    const arr = []
    arr.push(list)
    appendLists(arr)
}

