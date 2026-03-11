function Init() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let X = Mitjana(num1,num2);
    document.getElementById("output").innerHTML = X;
}



function Mitjana(a,b){

        result = (a + b)/2;

        return result;
    }


        
