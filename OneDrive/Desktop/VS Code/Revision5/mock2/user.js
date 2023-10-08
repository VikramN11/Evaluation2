
let formid = document.getElementById("formid");

formid.addEventListener("submit", myForm);

async function myForm(e){
    e.preventDefault();

    let name1 = document.getElementById("name").value;
    let age1 = document.getElementById("age").value;
    let gender1 = document.getElementById("gender").value;
    let place1 = document.getElementById("place").value;

    let obj = {
        name : name1,
        age : age1,
        place : place1,
        gender : gender1
    };

    try {
        let res = await fetch("http://localhost:3000/dogs",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })

        let data = await res.json();
        console.log(data);
        alert("Data posted successfully");

        window.location.href = "index.html";

    } catch (error) {
       console.log(error) 
    }
}