const display = document.getElementById('display');

const addButton = document.getElementById('add');
const minusButton = document.getElementById('minus');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

let firstValue;
let secondValue;
let selectedOperator = '';





const dataButtonsArray = document.querySelectorAll('[class = "data-number"]');
const dataOperationsArray = document.querySelectorAll('[class = "data-operation"]');

const clearButton = document.getElementById('data-clear');

const equalButton = document.getElementById('data-equals');



dataButtonsArray.forEach(function(elem){
    elem.addEventListener('click', function(){

        if(display.innerText === '0'){
            display.innerText = ' ';
            display.innerText += elem.innerText;
        }else{
        display.innerText += elem.innerText;
        }
    });
});


dataOperationsArray.forEach(function(elem){
    elem.addEventListener('click', function(){

        display.innerText += elem.innerText;
        console.log(firstValue);
        console.log(secondValue);

       
       
    });
});
//EQUALS ======================
equalButton.addEventListener('click', function(e){
    var list = display.innerText.match(/\d+/g);
    firstValue = list[0];
    secondValue = list[1];

   display.innerText = operate(selectedOperator, parseInt(firstValue),parseInt(secondValue));
   console.log(firstValue);
   console.log(secondValue);
   console.log((operate(selectedOperator, firstValue,secondValue)));
   
});
//////////////EQUALS


//CLEAR
clearButton.addEventListener('click', function(e){
     display.innerText = '0';
     console.log('clear');
 });


 //operators  = - / * ////////////////////////////
 addButton.addEventListener('click', function(e) {
   selectedOperator = '+';
});

minusButton.addEventListener('click', function(e){
    selectedOperator = '-';
});

divideButton.addEventListener('click', function(e){
    selectedOperator = '/';
});

multiplyButton.addEventListener('click', function(e){
    selectedOperator = '*';
});
///////////OPERATORS/////////////////////
 
 
 


 function operate(operator, a , b){
    if(operator ==='+') {
        return a+b;
    }else if(operator ==='-'){
        return a-b;
    }else if(operator ==='*'){
        return a*b;
    }else if(operator ==='/'){
        return a/b;
    }
        
}
