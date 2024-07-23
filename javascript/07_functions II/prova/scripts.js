function captureValues(callback){
  let bill = document.getElementById('bill').value;
  let rate = document.querySelector('input[name="quality"]:checked').value
  
  try{
    const bill_value = parseFloat(bill)
    if (isNaN(bill_value)){
      throw ("Fill the fields, please!");
    } else{
      let tip = callback((bill_value), rate)
    }
  } catch(Error){
    tipsuggest.innerHTML = Error
  }

  if (isNAN(bill_value) == true){
    bill_value = 0
  }
}

function calculateTip(bill, rate){
  let tip
  if (rate === 'very_good'){
    tip = `Tip $${(bill* 0.1).toFixed(2)}!`
  } else if (rate === 'ok'){
    tip = `Tip $${(bill* 0.05).toFixed(2)}!`
  } else if (rate === 'very_bad'){
    tip = `Tip nothing! Sorry!`
  }
  tipsuggest.innerHTML = tip
  return tip
}

let btn = document.getElementById('btn');
let very_good_text = document.getElementById('very_good_text');
let ok_text = document.getElementById('ok_text');
let very_bad_text = document.getElementById('very_bad_text');
let tipsuggest = document.getElementById('tip');

btn.addEventListener('click', ()=>{
  captureValues(calculateTip)
})



