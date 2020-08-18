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