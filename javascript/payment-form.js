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
function rewritePageVisa(form)  {
    // if fields are not empty move to success page
    if(typeof form.cname !== undefined){
        if(form.cname.value.length !=0 &&  form.cnum.value.length !=0 && 
            form.expdate.value.length !=0 && form.cvv.value.length !=0){
            var newPage = "<html>\n<head>\n<title>Page for ";
            newPage += form.cname.value;
            newPage += "</title>\n</head>\n<body bgcolor='#1B2838'>\n";
            newPage += "<h1 style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'>User " + form.cname.value + " has sucessfully purchased!</h1>\n";
            newPage += "</body>\n</html>";
            document.write(newPage);
            document.close();
        }else{
            console.log("Test");
            makeNewWindow();
        }
    }
}

function rewritePagePaypal(form)  {
    if(typeof form.username !== undefined){
        if(form.username.value.length !=0 &&  form.password.value.length !=0 ){
            var newPage = "<html>\n<head>\n<title>Page for ";
            newPage += form.username.value;
            newPage += "</title>\n</head>\n<body bgcolor='#1B2838'>\n";
            newPage += "<h1 style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'>User " + form.username.value + " has sucessfully purchased!</h1>\n";
            newPage += "</body>\n</html>";
            document.write(newPage);
            document.close();
        }else{
            console.log("Test");
            makeNewWindow();
        }
    }
}


function makeNewWindow() {
    // make sure it isn't already opened
    if (!newWindow || newWindow.closed) {
        newWindow = window.open("","sub","height=200,width=300");
        // the first parameter of window.open is url 
        // delay writing until window exists 
        setTimeout("writeToWindow( )", 500);
    } else if (newWindow.focus) {
        // window is already open and focusable, so bring it to the front
        newWindow.focus( );
    }
}

var newWindow;

function writeToWindow() {
    // assemble content for new window
    var newContent = "<html><head><title>Sub Window</title></head>\n";
    newContent += "<body>\n<h1>All fields must be filled in</h1>\n";
    newContent += "</body>\n</html>";
    // write HTML to new window document
    newWindow.document.write(newContent);
    newWindow.document.close( ); // close layout stream
}

// Set global variables
var totalCycles = 0;
var currColor = 0;
var colors, intervalID;
// Build array of color names
function init( ) {
    colors = ["red", "green", "yellow"];
}
// Advance  the color by one
function cycleColors( ) {
    // reset counter to 0 if it reaches 3; otherwise increment by 1
    currColor = (currColor == 2) ? 0 : ++currColor;
    // set style color to new color from array
    document.getElementById("hot1").style.color = colors[currColor];
    // invoke this function again until total = 27 so it ends on red
    
    intervalID = setTimeout("cycleColors( )", 700);
}