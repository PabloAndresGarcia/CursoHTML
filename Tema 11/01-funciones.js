function displayName()
{
    document.write ("Pablo Andres García");
}
function sayHello()
{
    document.write("Hola, qué tal?");
}
function displayScore()

{
    var playerScore=2300
    document.write ("<p> La puntuación del jugador es: "+ playerScore + "</p>");
}

/*
    FUNCIONES PARAMETRIZADAS
*/


function displayPlayerScore(thePlayerScore)
{
    thePlayerScore += 100;
    document.write("<br><b>"+ thePlayerScore + "</b><br>");
}

function addTwoNumbers (x, y)
{
    var addition = x + y;
    document.write("<b>" + addition + "</b>");
    return(addition);
}