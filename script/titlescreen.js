function titleScreen() {
    var websiteName = 'Cat and Zombies'
    var indexUrl = 'index.html'

    var titleLink = document.createElement('a')
    titleLink.href = indexUrl
    titleLink.textContent = websiteName
    titleLink.style.cursor = 'pointer'

    var title = document.createElement('h1')
    title.appendChild(titleLink)

    document.getElementById('titlename').appendChild(title)
}

titleScreen()