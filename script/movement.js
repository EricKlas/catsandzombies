function randomnumber() 
{ 
    return Math.floor(Math.random() * 3);
}


function moveZombie(charRole, playerRole)
{
    let character = characters.find(char => char.role === charRole)
    let player = characters.find(player => player.role === playerRole)

    number = randomnumber()

    switch(number)
    {
        case 0: if (character.coords[0].x > player.coords[0].x) {
            character.coords[0].x -= 1;
        } else if (character.coords[0].x < player.coords[0].x) {
            character.coords[0].x += 1;
        }
         else if (character.coords[0].z > player.coords[0].z) {
            character.coords[0].z -= 1;
        } else if (character.coords[0].z < player.coords[0].z) {
            character.coords[0].z += 1;
        }
        else{
            break
        }
        case 1:break
        case 2:break
        default: return
    }

}


function moveplayer(charRole, direction) {
    let character = characters.find(char => char.role === charRole)

    switch(direction) {
       case 'up': character.coords[0].x -= 1; break
       case 'down': character.coords[0].x += 1; break
       case 'left': character.coords[0].z -= 1; break
       case 'right': character.coords[0].z += 1; break
       default: return
    }
    
    moveZombie('zombie', 'player')
    LocationSelect()
    updateGameBoard()
}