let button = document.getElementById('btn');
button.addEventListener('click', () => {
 const height = parseInt(document.getElementById('height').value);
 const weight = parseInt(document.getElementById('weight').value);
 const result = document.getElementById('output');
 let height_error = false;
 let weight_error = false;
 if(height === '' || isNaN(height) || (height <= 0)){
  document.getElementById('height_error').innerHTML = 'Please provide a valid height';
 }
 else{
  document.getElementById('height_error').innerHTML = ''
  height_error = true
 }
 if(weight === '' || isNaN(weight) || (weight <= 0)){
  document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
 }
 else{
  document.getElementById('weight_error').innerHTML = ''
  weight_error = true
 }
 if(height_error && weight_error){
  const bmi = (weight / ((height*height)/10000)).toFixed(2);
  if(bmi < 18.6){
   result.innerHTML =  'Under weight :' + bmi;
  }
  else if(bmi >=18.6  && bmi < 24.9){
    result.innerHTML = 'Normal : ' + bmi;
  }
  else{
   result.innerHTML = 'Over weight : ' + bmi;
  }
 }
 else{
  // alert('The form has errors');
  result.innerHTML = '';
 }
} ) 