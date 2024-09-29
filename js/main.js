// Start

 // Validating form
function validateForm(){
    console.log("Validate form starts");

    // Test
    console.log("loading func works!");
    

    // Get everything

    let name = document.getElementById('name');

    let email1 = document.getElementById('email1');

    let email2 = document.getElementById('email2');

    let phoneNum = document.getElementById('phoneNum');

    let preference;

    //If statement to specify which one they checked
    if (document.getElementById('contactPref') != null){
        preference = "Text";
    } else{
        preference = "Email";
    }

    let projectStart = document.getElementById('projectStart');

    let durationNum = document.getElementById('durationNum');

    let duration = document.getElementById('duration');

    let projectDescription = document.getElementById('projectDescription');

    //Does the checkDate() function
    checkDate(projectStart);
    
    //Check validity of the dates (if theyre more than a day away)
    projectStart.reportValidity();

    //Does the check Email function
    checkEmails(email1, email2);

    //Checcks validity of emails (if theyre matching)
    email1.reportValidity();


    //If valid
    if (projectStart.reportValidity() && email1.reportValidity()){
        //Create the confirmation string
        let string = ("Press confirm to send the email with the following details: \n To: 230078145@aston.ac.uk \n From: " +email1.value+
        "\nHi, this is "+ name.value+" emailing about a project that will start on "+projectStart.value+" for "+durationNum.value+" "+
        duration.value+".\n"+ projectDescription.value + ".\n My phone number is "+ phoneNum.value+ ", and my contact preferences are "+
        preference +".\nHope to hear from you soon, \n - "+ name.value );
        //If user clicks okay, perform the form submitted function
        if(confirm(string )) {
            formSubmitted();
        }
    //If isnt valid, perform the function to check if any of the events occur
    } else{
        eventListeners();
        
    }
}

//function to check if any of the events occur
function eventListeners(){
    //Checks if email 1 has changed and if so, perform validate form function
    document.getElementById('email1').addEventListener("input", validateForm);
    //Checks if email 2 has changed and if so, perform validate form function
    document.getElementById('email2').addEventListener("input", validateForm);
    //Checks if project start date has changed and if so, perform validate form function
    document.getElementById('projectStart').addEventListener("input", validateForm);

}

// Check emails are same
function checkEmails(email1, email2){
    //Creates local errorvariable
    let errors = '';
    //Test
    console.log("Email check starts");
    //If emails are same
    if(email1.value === email2.value){
        //set errors to blank
        email1.setCustomValidity('');
        } else{
            //Test
            console.log("Emails dont match");
            //Create an error message
            errors += "Emails Must Match";
            //Set the errors
            email1.setCustomValidity( errors);
        }
    
}

// Check date
function checkDate(projectStart){
    //Test
    console.log("Date check starts");
    //Create local variable with todays date
    let thisDate = new Date();
    //Create local variable with the proposed start date
    let startDate = new Date(projectStart.value);
    //Creates local errorvariable
    let errors = '';
    //Tests
    console.log(startDate);
    console.log(thisDate);
    //If Date is smaller than/equal to todays date
    if (thisDate >= startDate){
        //Test
        console.log("Date is too small");
        //Create error messgae
        errors += "Date must be at least one day in the future";
        //Set the errors
        projectStart.setCustomValidity( errors);
    //Otherwise keep errors clear
    } else{
        projectStart.setCustomValidity('');

    }

}

// Congratulates user for submitting form
function formSubmitted(){
    alert("Form submitted Successfully");

}
