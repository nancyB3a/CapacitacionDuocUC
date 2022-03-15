function sumar(){
    //rescatar desde el formulario num1 y num2
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;

    var sum=parseInt(n1)+parseInt(n2);

    //mostrar resultado en un alert
    alert("El resultado de la suma es: "+sum);  
    } 
