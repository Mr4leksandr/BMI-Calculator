document.querySelector(".btn").addEventListener("click", BMIValueCalcutation);

function BMIValueCalcutation(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmivalue = weight  / (height/100 * height/100);

    document.getElementById("Value").innerHTML = "BMI Value: " + bmivalue;  

    event.preventDefault();
}