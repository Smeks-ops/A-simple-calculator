//get History 
function getHistory(){
  return document.getElementById("HistoryValue").innerText;
};

//print History
function printHistory(num) {
  document.getElementById("HistoryValue").innerText=num;
}
// get print output for the calculator
function getOutput() {
  return document.getElementById("OutputValue").innerText;
}
function printOutput(num) {
  if (num=="") {
    document.getElementById("OutputValue").innerText=num;
  }
  else {
    document.getElementById("OutputValue").innerText=getFormattedNumber (num);
  }
};
function getFormattedNumber(num) {
  const n = Number(num);
  const value = n.toLocaleString("en");
  return value;
}

//return number back to normal format for calculation
function reverseNumberFormat (num) {
  return Number(num.replace(/,/g,''));
}

//deal with operators
let operator = document.getElementsByClassName("operator");
for (var i = 0; i<operator.length; i++) {
  operator[i].addEventListener('click', function(){
    //clear button
    if(this.id=="clear"){
      printHistory("");
      printOutput("");
    }
    //backspace
    if(this.id=="backspace"){
      let output = reverseNumberFormat(getOutput()).toString();
      if(output){
        output = output.substring(0, output.length-1);
        printOutput(output);
      }
    
    }
    else {
      let output=getOutput();
			let history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substring(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					let result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
      }
    }

  });
};

//deal with numbers
let number = document.getElementsByClassName("number");
for (var i = 0; i<number.length; i++) {
  number[i].addEventListener('click', function(){
    let output = reverseNumberFormat(getOutput());
    // if output is a number
    if(output!=NaN) {
      output = output + this.id;
      printOutput(output);
    }
    
  });
};

