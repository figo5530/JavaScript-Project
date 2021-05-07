WatchList.fetchWatchList()

let form = document.getElementById("form")
form.addEventListener('submit', WatchList.postList)

function returnHome() {
    document.getElementById("container").innerHTML = `
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
    form = document.getElementById("form")
    form.addEventListener('submit', WatchList.postList)
    WatchList.appendListsForReturn()

}