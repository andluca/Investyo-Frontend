import React, {useContext, createContext} from "react";

function decimalAdjust( value, exp) {
   
    
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    value = value.toString().split('e');

    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    
  }

  

function CompoundInterestCalculate(
  initialValue,
  monthValue,
  interestRate,
  period
) {
  let init = parseInt(initialValue);
  let month = parseInt(monthValue);
  let rate = parseFloat(interestRate);
  let t = parseInt(period);

  let decimalrate = rate / 100;

  var ListResults = [init];
  

  for (let i = 1; i <= t; i++) {
    let tax = 1 + decimalrate;

    let realValue = decimalAdjust((ListResults[i - 1] * tax + month),-2);
    
    ListResults.push(realValue);
  
  
}
return ListResults;
}


function ListPeriod(
  period){

    let t = parseInt(period);

    var ListPeriod = [0];

    for(let i = 1; i<=t;i++){


      ListPeriod.push(i);

    }

    return ListPeriod;
}




export { CompoundInterestCalculate, ListPeriod }
