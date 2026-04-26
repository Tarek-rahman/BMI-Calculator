const result = document.getElementById('result');
console.log('div');
const btnBMI = document.getElementById('btnBMI');
btnBMI.addEventListener('click', () => {
  const ageElement = document.getElementById('age');
  const weightElement = document.getElementById('weight');
  const heightElement = document.getElementById('height');
  const age = +ageElement.value;
  const weight = parseFloat(weightElement.value);
  const height = parseFloat(heightElement.value) / 100;
  if (isNaN(age) || age <= 0) {
    result.innerHTML = `Please Enter your age.`;
    return;
  }
  if (isNaN(weight) || weight < 0 || isNaN(height) || height < 0) {
    result.innerHTML = `Please Enter your valid height and weight.`;
    return;
  }
  const BMI = weight / (height * height);
  const category = getBMIcategory(BMI);
  result.innerHTML = `
     <p>Your Age is: ${age}</p>
     <p>Your BMI is: ${BMI.toFixed(1)}</p> 
     <p>You are: ${category}</p>`;
  ageElement.value = '';
  weightElement.value = '';
  heightElement.value = '';
});
const getBMIcategory = bmi => {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi > 18.5 && bmi < 25) {
    return 'Normal Weight';
  } else if (bmi > 25 && bmi < 30) {
    return 'Overweigth';
  } else {
    return 'Obesity';
  }
};
export {};
//# sourceMappingURL=script.js.map
