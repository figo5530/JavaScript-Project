const container = document.getElementById("container")
container.innerHTML = HelperTool.watchListForm()
WatchList.fetchWatchList()

let form = document.getElementById("form")
form.addEventListener('submit', WatchList.postList)

function returnHome() {
    document.getElementById("container").innerHTML = HelperTool.watchListForm()
    form = document.getElementById("form")
    form.addEventListener('submit', WatchList.postList)
    WatchList.appendListsForReturn()
}