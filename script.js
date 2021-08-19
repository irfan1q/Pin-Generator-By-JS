function randomPin(){
  const randomNumber = Math.round(Math.random() * 10000);
  const makeString = randomNumber + '';
  if (makeString.length == 4){
    return randomNumber;
  }
  else{
    return randomPin();
  }
}
function generatePin(){
  const pin = randomPin();
  document.getElementById('pin-display').value = pin;
}


document.getElementById('number-keys').addEventListener('click', function(event){
  const inputKey = event.target.innerText;
  const inputDisplay = document.getElementById('display-keys');
  if (isNaN(inputKey)){
    if (inputKey == 'C'){
      inputDisplay.value = '';
    }
    else{
       const deleteOneByOne = inputDisplay.value.slice(0, -1);
       inputDisplay.value = deleteOneByOne;
    }
  }
  else{
    const previousNum = inputDisplay.value;
    const newNum = previousNum + inputKey;
    inputDisplay.value = newNum;
  }
})

function checkPin(){
  const pin = document.getElementById('pin-display').value;
  const typeNum = document.getElementById('display-keys').value;
  const successNotify = document.getElementById('success');
  const failNotify = document.getElementById('fail');
  if (pin == typeNum){
    successNotify.style.display = 'block';
    failNotify.style.display = 'none';
  }
  else{
    successNotify.style.display = 'none';
    failNotify.style.display = 'block';
  }
}
