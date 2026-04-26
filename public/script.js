const result = document.getElementById('result');

const BMIfunction = ()=>{
    const age = document.getElementById('age').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value / 100);
    if (isNaN(age) || age <= 0) {
        result.innerHTML = `Please Enter your age.`;
        return;
    }
    if (isNaN(weight) || weight < 0 || isNaN(height) || height < 0) {
        result.innerHTML = `Please Enter your valid height and weight.`
        return;
    }
    const BMI = weight / (height * height);
    const category = getBMIcategory(BMI);
    result.innerHTML = `
     <p>Your Age is: ${age}</p>
     <p>Your BMI is: ${BMI.toFixed(1)}</p> 
     <p>You are: ${category}</p>`
}

const getBMIcategory = (bmi) =>{
if (bmi < 18.5) {
    return 'Underweight';
}else if (bmi > 18.5 && bmi < 25) {
    return 'Normal Weight';
}else if (bmi > 25 && bmi < 30) {
    return 'Overweigth';
}else{
    return 'Obesity';
}
}