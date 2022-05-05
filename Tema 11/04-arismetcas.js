function simpleArithmetics()
{
    var x = parseInt(prompt("Introduce el primer número a operar"));
    var y = parseInt(prompt("Introduce el segundo Número que quieres operar"));
    var op = prompt ("Introduce la operación que quieres hacer: +, -, *, /");


    switch(op)
    {
        case "+":
            var sum = x + y;
            alert( x + " + " + y +" = "+ sum);
        break;

        case "-":
            var diff = x - y;
            alert(x + " - " + y +" = "+ diff);
            break;

        case "*":
            var prod = x*y;
            alert (x + " * " + y +" = " + prod);
            break;

        case "/":
            if (y==0)
            {("no puedes dividir por cero!");
    }
            else
        {
            var div = x/y;
            alert (x + " / " + y +" = "+ div);
        }
    }
}
function circle()
{
    var r =  parseFloat(prompt("Introduce el radio de la circunferencia"));
    while (isNaN(r))
    {
        r =  parseFloat(prompt("Introduce el radio de la circunferencia"));
    }
    {
        var pi = Math.PI;
        var per = 2.0 * pi * r;
        alert("La circunfenrencia de radio "+ r + " tiene perimetro "+ per);
    }
}