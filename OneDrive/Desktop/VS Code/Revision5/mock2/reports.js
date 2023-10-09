
async function myData(){
    try {
      let res = await fetch("http://localhost:3000/dogs");
      
      let data = await res.json();

      console.log(data);
      showData(data);
    } 
    catch (error) {
        console.log(error);
    }
}

myData();

function showData(data){
    let tableBody = document.querySelector("tbody");

    let filterMale = data.filter(el => "Male" == el.gender);
    console.log(filterMale);

    let filterFemale = data.filter(el => "Female" == el.gender);
    console.log(filterFemale);

    let avg=0, total=0, num=0;
    for(let i=0; i<data.length; i++){
        total += Number(data[i]["age"]);
    }

    console.log(total,data.length);
    avg = Math.round(total/data.length);

    let tr1 = document.createElement("tr");

    let p1 = document.createElement("td");
    p1.innerText = data.length;

    let p2 = document.createElement("td");
    p2.innerText = filterMale.length;

    let p3 = document.createElement("td");
    p3.innerText = filterFemale.length;

    let p4 = document.createElement("td");
    p4.innerText = avg;
    
    tr1.append(p1, p2, p3, p4);

    tableBody.append(tr1);
}
