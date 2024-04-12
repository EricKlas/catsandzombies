function saveSettings() {
    var size = document.getElementById("boardSize").value
    localStorage.setItem("boardSize", size)
    alert("Settings saved!")
}
