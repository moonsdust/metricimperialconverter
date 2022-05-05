function convert() {
    let inputNum = document.getElementById("number").value;
    // length
    let meterToFeet = inputNum * 3.28084;
    let feetToMeter = inputNum / 3.28084;
    document.getElementById("length").textContent = inputNum + " meters = " + meterToFeet + " feet | " + inputNum + " feet = " + feetToMeter + " meters";
    // mass
    let kilosToPounds = inputNum * 2.20462262185;
    let poundsToKilos = inputNum / 2.20462262185;
    document.getElementById("mass").textContent = inputNum + " kilograms = " + kilosToPounds + " pounds | " + inputNum + " pounds = " + poundsToKilos + " kilograms";
    // volume 
    let litersToGallons = inputNum / 3.78541178;
    let gallonsToLiters = inputNum * 3.78541178;
    document.getElementById("volume").textContent = inputNum + " liters = " + litersToGallons + " gallons | " + inputNum + " gallons = " + gallonsToLiters + " liters";
}