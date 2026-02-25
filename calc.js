function add()
{
    var a=Number(document.getElementById("num1").value);
    var b=Number(document.getElementById("num2").value);
    var c=a+b;
    document.getElementById("res").value=c;
}

function sub()
{
    var a=Number(document.getElementById("num1").value);
    var b=Number(document.getElementById("num2").value);
    var c=a-b;
    document.getElementById("res").value=c;
}

function mul()
{
    var a=Number(document.getElementById("num1").value);
    var b=Number(document.getElementById("num2").value);
    var c=a*b;
    document.getElementById("res").value=c;
}

function div()
{
    var a=Number(document.getElementById("num1").value);
    var b=Number(document.getElementById("num2").value);
    var c=a/b;
    document.getElementById("res").value=c;
}