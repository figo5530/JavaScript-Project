function fetchWatchList() {
    fetch("http://localhost:3000/watch_lists").then(resp => resp.json()).then(lists => {
        appendLists(lists)
    })
}

function appendLists(lists) {
    const liDiv = document.getElementById("listDiv")
    for (const list of lists) {
        const div = document.createElement("div")
        div.className = "section-top-border"
        const innerDiv = document.createElement("div")
        innerDiv.className = "col-lg-4 col-sm-6 mt-sm-30 typo-sec"
        const tag = document.createElement("h3")
        tag.className = "mb-20 title_color"
        tag.innerText = list.name
        const ul = document.createElement("ul")
        ul.className = "unordered-list"
        for (const movie of list.movies) {
            const li = document.createElement("li")
            li.innerText = movie.title
            ul.append(li)
        }
        innerDiv.append(tag)
        innerDiv.append(ul)
        div.append(innerDiv)
        liDiv.append(div) 
    }
}

// const form = document.getElementById("form")