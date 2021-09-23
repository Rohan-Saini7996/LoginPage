function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="user"){
        window.alert("login succesfully");
        
    }
    else{
        window.alert("login failed");
        this.validate();
    }

}