 var  input1=document.getElementById("inpt1");
var  input2=document.getElementById("inpt2");

var res=document.getElementById("result");

function add(){
    var  val1 = Number(input1.value);
    var  val2 = Number(input2.value);
    var  addVal=val1+val2;
    res.innerHTML=addVal;

    input1.value=" ";
    input2.value=" ";
}
function sub(){
    var  val1 = Number(input1.value);
    var  val2 = Number(input2.value);
    res.innerHTML=(val1-val2);

    input1.value=" ";
    input2.value=" ";
}
function multiplier(){
    var  val1 = Number(input1.value);
    var  val2 = Number(input2.value);
    res.innerHTML=(val1*val2);

    input1.value=" ";
    input2.value=" ";
}
function division(){
    var  val1 = Number(input1.value);
    var  val2 = Number(input2.value);
    res.innerHTML=(val1/val2);

    input1.value=" ";
    input2.value=" ";
}