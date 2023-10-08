var data;
let maindata = document.getElementById("mainContainer");

async function myData(){
    try {
      let res = await fetch("http://localhost:3000/dogs");
      
      data = await res.json();

      console.log(data);
      showData(data);
    } 
    catch (error) {
        console.log(error);
    }
}

myData();

function showData(data){
    maindata.innerHTML = "";

   data.forEach(el => {
    let div1 = document.createElement("div");
    let img1 = document.createElement('img');
    img1.setAttribute("src", el.image);
    img1.setAttribute("alt", el.id);
    let h1 = document.createElement("h1");
    h1.innerText = `Name : ${el.name}`;
    let p1 = document.createElement("p");
    p1.innerText = `Age : ${el.age}`;
    let p2 = document.createElement("p");
    p2.innerText = `Gender : ${el.gender}`;
    let p3 = document.createElement("p");
    p3.innerText = `Place : ${el.place}`;
    div1.append(img1, h1, p1, p2, p3);
    maindata.append(div1);
   });
}

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", mySearch);

function mySearch(){
    let searchVal = document.getElementById("searchInput").value.toLowerCase();

    let filteredData = data.filter(el=>{
        let dataVal = el.name.toLowerCase();
        console.log(dataVal, searchVal);
        return dataVal == searchVal;
    });
    document.getElementById("searchInput").value = "";
    console.log(filteredData);
    showData(filteredData);
}

let sortId = document.getElementById('ageId');

sortId.addEventListener("change", mySort);

function mySort(){
    let sortName = document.getElementById('ageId').value;

    if(sortName == "low to high"){
        let sortedData = data.sort((a,b)=> a.age - b.age);
        showData(sortedData);
    }
    else{
        let sortedData = data.sort((a,b)=> b.age - a.age); 
        showData(sortedData);
    }
    
}



let maleId = document.getElementById("maleId");
maleId.addEventListener("change", myFilter);

let femaleId = document.getElementById("femaleId");
femaleId.addEventListener("change", myFilter);

function myFilter(){
    if(maleId.checked == true){
        let fitData = data.filter(el => el.gender == "Male");
        showData(fitData);
     }
     else if(femaleId.checked == true){
         let fitData = data.filter(el => el.gender == "Female");
         showData(fitData);
     }
}