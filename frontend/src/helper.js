class HelperTool{
   
    static createButton(text) {
        const div = document.createElement("div")
        div.className = "button-group-area mt-40"
        const movieDelete = document.createElement("button")
        movieDelete.innerText = `${text}`
        movieDelete.className = "genric-btn success radius"
        div.append(movieDelete)
        return div
    }

    static setCss(div, innerDiv, tag) {
        div.className = "section-top-border"
        innerDiv.className = "col-lg-4 col-sm-6 mt-sm-30 typo-sec"
        tag.className = "mb-20 title_color"
    }

    static postOption(body) {
        return {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }
    }

    static url(suffix) {
        return `http://localhost:3000/${suffix}`
    }
}