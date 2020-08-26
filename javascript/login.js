    function rewritePage(form)  {
    // if fields are not empty move to success page
    console.log(form.username.value);
            if(form.username.value.length !=0 &&  form.password.value.length !=0){
                var newPage = "<html>\n<head>\n<title>Page for ";
                newPage += form.username.value;
                newPage += "</title>\n</head>\n<body bgcolor='#1B2838'>\n";
                newPage += "<h1 style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'>User " + form.username.value + " has sucessfully purchased!</h1>\n";
                newPage += "</body>\n</html>";
                document.write(newPage);
                document.close();
            }else{
                makeNewWindow();
            }
        
    }

    var newWindow;
    function makeNewWindow() {
        if (!newWindow || newWindow.closed) {
            newWindow = window.open("","sub","height=200,width=300");
            setTimeout("writeToWindow( )", 500);
        } else if (newWindow.focus) {
            newWindow.focus();
        }
    }

    function writeToWindow() {
        var newContent = "<html><head><title>Sub Window</title></head>\n";
        newContent += "<body>\n<h1>All fields must be filled out</h1>\n";
        newContent += "</body>\n</html>";
        newWindow.document.write(newContent);
        newWindow.document.close();
    }