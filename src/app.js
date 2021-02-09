const feetMeterInput = document.querySelector("#feet-meter");
const inchesCmInput = document.querySelector("#inches-cm");
const btn = document.querySelector(".btn");
const resultOutput = document.querySelector(".result");
const optionDiv = document.querySelector(".container-options");
const f2mInput = document.querySelector("#f2m");
const m2fInput = document.querySelector("#m2f");


optionDiv.addEventListener("click", () => {

  if (f2mInput.checked) {
    document.querySelector("#feetMeter").innerText = "Feet";
    document.querySelector("#inchesCm").innerText = "Inches";
  }
  else if (m2fInput.checked) {
    document.querySelector("#feetMeter").innerText = "Meter";
    document.querySelector("#inchesCm").innerText = "Cm";
  };
  feetMeterInput.value = 0;
  inchesCmInput.value = 0;
  resultOutput.innerText = "";

});

btn.addEventListener("click", () => {
  if (feetMeterInput.value < 0 || inchesCmInput.value < 0){
    resultOutput.innerText = "Invalid values";
  }else if(f2mInput.checked){
    resultOutput.innerText =  feet2Meter(feetMeterInput.value, inchesCmInput.value);
  }else if(m2fInput.checked){
    resultOutput.innerText = meter2Feet(feetMeterInput.value,inchesCmInput.value)
  }});

const meter2Feet = (meter, cm) => {
    let convertedValue= ((Number(meter)*100 + Number(cm)) / 2.54).toFixed(1);
      return  `${Math.floor(convertedValue/12)} Feet ${Math.round(convertedValue%12)} Inches`
    
  }

const feet2Meter = (feet, inches) => {
    let convertedValue = ((Number(feet) * 12 + Number(inches)) * 2.54).toFixed(1);
    return `${Math.floor(convertedValue/100)}M ${Math.round(convertedValue%100)}cm`;
  };

