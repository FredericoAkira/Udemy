let userName=document.getElementById("txtUsername");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtpass");
let conPwd=document.getElementById("conpass");
let form=document.querySelector("form");

function validateForm(){
    if(userName.value.trim()===""){
        onError(userName,"User Name must be filled!");
    }else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty!");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

    if(pwd.value.trim()===""){
        onError(pwd,"Password must be filled!");
    }else{
        onSuccess(pwd);
    }
    if(conPwd.value.trim()===""){
        onError(conPwd,"Confirm Password must be filled!");
    }else{
        if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Confirm Password is wrong!");
        }else{
            onSuccess(conPwd);
        }
    }
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateForm();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    messageEle.innerText="";
}

function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
}

function isValidEmail(email){
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
}