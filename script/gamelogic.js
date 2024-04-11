function checkEncounters() {
    let player = characters.find(char => char.role === "player");
    let playerPos = player.coords[0];
    
    characters.forEach(char => {
        if (char.coords[0].x === playerPos.x && char.coords[0].z === playerPos.z) {
            if (char.role === "zombie") {
                window.location.href = "gameover.html"
            } else if (char.role === "cat") {
                console.log("Player found a cat!");
            }
        }
    });
}