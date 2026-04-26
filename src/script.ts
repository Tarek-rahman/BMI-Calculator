const result = document.getElementById('result') as HTMLDivElement;
console.log('div');
const btnBMI = document.getElementById('btnBMI') as HTMLButtonElement;
btnBMI.addEventListener('click', () => {
  const ageElement = document.getElementById('age') as HTMLInputElement;
  const weightElement = document.getElementById('weight') as HTMLInputElement;
  const heightElement = document.getElementById('height') as HTMLInputElement;
  const age: number = +ageElement.value;
  const weight: number = parseFloat(weightElement.value);
  const height: number = parseFloat(heightElement.value) / 100;
  if (isNaN(age) || age <= 0) {
    result.innerHTML = `Please Enter your age.`;
    return;
  }
  if (isNaN(weight) || weight < 0 || isNaN(height) || height < 0) {
    result.innerHTML = `Please Enter your valid height and weight.`;
    return;
  }
  const BMI: number = weight / (height * height);
  const category = getBMIcategory(BMI);
  result.innerHTML = `
     <p>Your Age is: ${age}</p>
     <p>Your BMI is: ${BMI.toFixed(1)}</p> 
     <p>You are: ${category}</p>`;
  ageElement.value = '';
  weightElement.value = '';
  heightElement.value = '';
});

const getBMIcategory = (bmi: number): string => {
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
