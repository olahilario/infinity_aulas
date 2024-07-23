
const button = document.getElementById('btn')
const convert_text = document.getElementById('text_span')

button.addEventListener('click', ()=>{
  getCheckedRadioValue(convertTo)
})

convert_text.addEventListener('click', ()=>{
  getCheckedRadioValue(convertTo)
})


function getCheckedRadioValue(callback){
  const num = parseFloat(document.getElementById('input_user').value);
  console.log(num)
  const final_result = document.getElementsByClassName('result')[0];
  const checked = document.querySelector('input[name="unity"]:checked');
  if (checked){
    const checkedValue = checked.value;
    const convertedValue = callback(checkedValue, num)
    if (!isNaN(num)){
      final_result.classList.add('result_show')
      final_result.textContent = `${convertedValue} ${checkedValue}`;
    }else{
      final_result.classList.add('result_show')
      final_result.textContent = "Fill the fields!";
    }
    
  }
}


function convertTo(checkedValue, num){
  let converted;
  if (checkedValue && (!isNaN(num))){
    if (checkedValue === 'yards'){
      converted = (num * 1094).toFixed(2)
    }else if (checkedValue === 'feets'){
      converted = (num * 3281).toFixed(2)
    }else if (checkedValue === 'inches'){
      converted = (num * 39.37).toFixed(2)
    } else if (checkedValue === 'miles'){
      converted = (num * 0.000621).toFixed(5)
    }
  } else{console.log('Erro na conta!')}
  return converted
}