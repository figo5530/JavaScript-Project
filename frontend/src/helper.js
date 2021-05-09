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

    static createBtnForWatchList() {
        const div = document.createElement("div")
        div.className = "button-group-area mt-40"
        const home = document.createElement("button")
        home.innerText = "Home"
        home.className = "genric-btn success radius"
        div.append(home)
        div.className = "button-group-area mt-40"
        const edit = document.createElement("button")
        edit.innerText = "Edit"
        edit.className = "genric-btn success radius"
        div.append(" ")
        div.append(edit)
        div.className = "button-group-area mt-40"
        const drop = document.createElement("button")
        drop.innerText = "Drop"
        drop.className = "genric-btn success radius"
        div.append(" ")
        div.append(drop)
        return div
    }

    static setCss(div, innerDiv, tag) {
        div.className = "section-top-border"
        innerDiv.className = "col-lg-4 col-sm-6 mt-sm-30 typo-sec"
        tag.className = "mb-20 title_color"
    }

    static postOption(body, method="POST") {
        return {
            method: `${method}`,
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

    static movieForm(id) {
        return `
        <div class="section-top-border">
            <h3 class="mb-30 title_color">Add Movie</h3>
            <form id="movieForm">
                <div class="mt-10">
                <input type="text" name="title" placeholder="Movie Title" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Movie Title'" required class="single-input">
                <input type="hidden" id="${id}"
                </div>
                <div class="mt-10">
                </div>
                <div class="button-group-area mt-40">
                    <input type="submit" class="genric-btn success radius" value="Create">
                </div>
            </form>
        </div>
        `
    }

    static watchListForm() {
        return `
        <div class="section-top-border">
        <h3 class="mb-30 title_color">Create Your Own Watch list</h3>
        <form id="form">
            <div class="mt-10">
                <input type="text" name="list" placeholder="List Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'List Name'" required class="single-input">
            </div>
            <div class="mt-10">
            </div>
            <div class="button-group-area mt-40">
                <input type="submit" class="genric-btn success radius" value="Create">
            </div>
        </form>
        </div>
        
        <div id="listDiv">

        </div>`
    }

    static editWatchListForm(id) {
        return `
        <div class="section-top-border">
        <h3 class="mb-30 title_color">Edit Watch List Name</h3>
        <form id="form">
            <div class="mt-10">
                <input type="text" name="list" placeholder="List Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'List Name'" required class="single-input">
                <input type="hidden" value="${id}">
            </div>
            <div class="mt-10">
            </div>
            <div class="button-group-area mt-40">
                <input type="submit" class="genric-btn success radius" value="Edit">
            </div>
        </form>
        </div>
        
        <div id="listDiv">

        </div>`
    }
}