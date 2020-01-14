document.querySelector(".btn").addEventListener("click", BMIValueCalcutation);

function BMIValueCalcutation(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmivalue = weight  / (height/100 * height/100);  

    if(bmivalue < 18.5){
        document.getElementById("Value").innerHTML ="BMI Value: " + bmivalue +" : Underweight";
    };
    if(bmivalue => 18.5 || bmivalue <= 24.9){
        document.getElementById("Value").innerHTML ="BMI Value: " + bmivalue +" : Normal weight";
    };
    if(bmivalue => 25 || bmivalue <= 29.9){
        document.getElementById("Value").innerHTML ="BMI Value: " + bmivalue +" : Overweight";
    };
    if(bmivalue > 30){
        document.getElementById("Value").innerHTML ="BMI Value: " + bmivalue +" : Underweight";
    };

    event.preventDefault();
}