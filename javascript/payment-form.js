function toggle(){
    var list = document.getElementById("select");
    var visaForm = document.getElementById("visa");
    var paypalForm = document.getElementById("paypal");
    var selectedValue = list.options[list.selectedIndex].value;
    if(selectedValue == "visa"){
        visaForm.style.display = "block";
        paypalForm.style.display = "none";
    }else{
        visaForm.style.display = "none";
        paypalForm.style.display = "block";
    }
}




// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// <!-- 2.4 implementation -->

// Set global variables
var totalCycles = 0;
var currColor = 0;
var colors, intervalID;

function init( ) {
    colors = ["red", "green", "yellow"];
}
// Advance  the color by one
function cycleColors( ) {
    // reset counter to 0 if it reaches 2; otherwise increment by 1
    currColor = (currColor == 2) ? 0 : ++currColor;
    // set style color to new color from array
    document.getElementById("hot1").style.color = colors[currColor];
    // invoke this function continously
    
    intervalID = setTimeout("cycleColors( )", 700);
}