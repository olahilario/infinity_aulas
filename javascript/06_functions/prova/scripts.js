btn = document.getElementById('btn')

btn.addEventListener('click', CalculateImc)


function CalculateImc(){

  let weight = document.getElementById('weight').value;
  document.getElementById('weight').value = ''
  let height = document.getElementById('height').value;
  document.getElementById('height').value = ''
  let diagnostic = document.getElementById('diagnostic')
  let result = document.getElementsByClassName('result_hide')[0]

  if (weight && height && height !== '0'){
    const imc = (weight/(height**2)).toFixed(2)
    let msg = `Your IMC is ${imc}! Google it to know if you're good to go! =)`
    diagnostic.innerHTML = msg
  } else{
    let msg = 'Fill the fields, Bro!'
    diagnostic.innerHTML = msg

  }

result.classList.add('result_show')

  return imc
}