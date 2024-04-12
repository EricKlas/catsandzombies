let previousLocation = 0


function locationChange(img, text)
{
    document.getElementById("locationimage").src=img

    document.getElementById("locationtext").innerHTML = text

}

function randomlocation() 
{ 
    return Math.floor(Math.random() * 20)
}


function LocationSelect()
{

    const number = randomlocation()

    if (number === previousLocation)
    {
        LocationSelect()
    }
    else{
    switch(number)
        {
            case 0: locationChange("images/mountains1.png", "Du står i skogen och kan se ett berg i bakgrunden");  break
            case 1: locationChange("images/mountains2.jpg", "Du ser ett par stora berg i bakgrunden");  break
            case 2: locationChange("images/mountains3.jpg", "Du kan se en stenväg som leder till bergen");  break
            case 3: locationChange("images/mountains4.jpg", "Du kommer fram till en sjö med ett hus, och i bakgrunden kan du se berg");  break
            case 4: locationChange("images/mountains5.jpg", "Du står på ett öppet fält med några berg med snö i bakgrunden");  break
            case 5: locationChange("images/tree1.jpg", "Du kommer fram till ett träd med en bänk, men ser inget annat på grund av tjock dimma");  break
            case 6: locationChange("images/tree2.jpg", "Du ser ett träd där solen skiner igenom, med havet i bakgrunden");  break
            case 7: locationChange("images/tree3.jpg", "Du kommer fram till ett par gamla träd");  break
            case 8: locationChange("images/lake1.jpg", "Du kommer fram till en sjö och en skog på andra sidan");  break
            case 9: locationChange("images/hill1.jpg", "Du kommer fram till en kulle med ett ensamt träd");  break
            case 10: locationChange("images/hill2.jpg", "Du kommer upp på en av kullarna och ser hur berg och kullar växlar");  break
            case 11: locationChange("images/forestroad1.jpg", "Du hittar en skogsväg omgiven av många träd");  break
            case 12: locationChange("images/forestroad2.jpg", "Du hittar en skogsväg, men dimman gör det svårt att se något");  break
            case 13: locationChange("images/forest1.jpg", "Du hittar en gammal skogsväg som ser ut som om ingen har använt den på länge");  break
            case 14: locationChange("images/forest2.jpg", "Du hittar en gammal skogsväg och kan se spår efter bilar, men det verkar som om ingen har åkt här på ett tag");  break
            case 15: locationChange("images/forest3.jpg", "Du kommer ut ur skogsgränsen och ser ner över backen full av träd");  break
            case 16: locationChange("images/forest4.jpg", "Du går igenom skogen men ser inget särskilt");  break
            case 17: locationChange("images/canyon1.jpg", "Du hittar en kanjon där en å flyter igenom");  break
            case 18: locationChange("images/bridge1.jpg", "Du hittar en trädgård i skogen; över den lilla ån finns det en bro");  break
            case 19: locationChange("images/aurora1.jpg", "Du står ute på ett fält och kan se norrskenet"); break
            default: return
        }
    }
        previousLocation = number
}