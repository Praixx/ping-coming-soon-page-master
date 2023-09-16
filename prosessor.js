(function(){

    "use strict"

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        
        const errorLabel = document.querySelector("label");
        const emailField = document.getElementById("email")

        const reName = /^[a-zA-Z]+(([\'\- ][a-zA-Z])?[a-zA-Z]*)*$/;

        if(!reName.test(emailField)){
            errorLabel.style.display = "block";
            emailField.style.border = "2px solid var(--Light-Red)";
        

            setTimeout(function(){
                errorLabel.style.display = "none";
                emailField.focus();
                emailField.style.border = "2px solid var(--Very-Dark-Blue)";
            }, 2000)
        }
    })
}());
