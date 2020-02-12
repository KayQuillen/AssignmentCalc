function equal(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    x = y;
document.getElementById("output").innerHTML = x;
}
function plusE(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    x += y;
document.getElementById("output").innerHTML = x
}
function minE(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    var z;
    if(x < y){
        z = y %= x;
    }else{
        z = x %= y;}
    document.getElementById("output").innerHTML = z
}
function timE(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    x *= y ;
document.getElementById("output").innerHTML = x
}
function divE(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    x /= y ;
document.getElementById("output").innerHTML = x
}
function modE(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    var z;
    if(x < y){
        z = y %= x;
    }else{
        z = x %= y;}
    document.getElementById("output").innerHTML = z
    
}

