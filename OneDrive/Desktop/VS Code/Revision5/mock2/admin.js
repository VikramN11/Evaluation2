let form1 = document.querySelector("form");
form1.addEventListener("submit", myForm);

async function myForm(e){
    e.preventDefault();
    let email1 = document.getElementById("emailid").value;
    let pass1 = document.getElementById("passid").value;

    let obj = {
        email : email1,
        password : pass1
    }


    let res = await fetch("https://reqres.in/api/login",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(obj)
    });
    let data = await res.json()
    console.log(data);

    localStorage.setItem("token", data.token);

    if(data.token){
        alert("Login successfull");
        window.location.href = "dashboard.html";
    }
}