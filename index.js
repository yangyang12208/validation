let isVisible = false; // set this for to show password 

function see(){
    let input = document.getElementById("password");
    let see = document.getElementById("see");

    // to show value of password

    if(isVisible){
        input.type = "password";
        isVisible = false;
        see.style.color = "gray";
    }else{

        input.type = "text";
        isVisible = true;
        see.style.color = "red"
    }
}
//oninput is refert to input of user

function check(){
    let input = document.getElementById("password").value
    /// remove whitespace using trim()
    input = input.trim();
    document.getElementById("password").value = input;
    document.getElementById("count").innerText = "Length: " + input.length

    if(input.length >= 5){
        document.getElementById("check0").style.color = "green";
    }else{
        document.getElementById("check0").style.color = "red";
    }

    if(input.length <= 10){
        document.getElementById("check1").style.color = "red";
    }else{
        document.getElementById("check1").style.color = "green";
    }
        //numerical character
        if(input.match(/[0-9]/)){
            document.getElementById("check2").style.color = "green";
        }else{
            document.getElementById("check2").style.color = "red";
        }

        //special character

        if(input.match(/[^A-Za-z0-9-'']/i)){
            document.getElementById("check3").style.color = "green";
        }else{
            document.getElementById("check3").style.color = "red";
        }
        // contains spaces
        if(input.match(' ')){
            document.getElementById("check4").style.color = "green";
        }else{
            document.getElementById("check4").style.color = "red";
        }

        
}
