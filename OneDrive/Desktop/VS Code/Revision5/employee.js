var data;
let allCards = document.getElementById("allcards");
let pageNumber = document.getElementById("pagenumber");

let itemsPerPage = 10;
let currentPage = 1;

async function myCards(){
  
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        data = await res.json();
        console.log(data);
        myPagination(data);
    } catch (error) {
        console.log(error);
    }
    
}

myCards();

function myPagination(data){
    let sortedData = mySort(data);
    let totalPage = sortedData.length/itemsPerPage;
        let startIndex = (currentPage-1)*itemsPerPage;
        let endIndex = startIndex + itemsPerPage;
        let visibleData = sortedData.slice(startIndex, endIndex);
        if(currentPage == 1){
            prevBtn.disabled = true;
        }
        else if(currentPage == 10){
            nextBtn.disabled = true;
        }
        else{
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }

        // mySort(visibleData);
        showCards(visibleData);
}

function showCards(data){
    allCards.innerHTML = "";

   data.forEach(el => {
    let div1 = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerText = el.id;
    let p1 = document.createElement("p");
    p1.innerText = `Title : ${el.title}`;
    let p2 = document.createElement("p");
    p2.innerText = `Body : ${el.body}`;
    div1.append(h1, p1, p2);
    allCards.append(div1);
    pageNumber.innerText = currentPage;
   });
}

let prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", myPrev);

function myPrev(){
    if(currentPage == 1){
        prevBtn.disabled = true;
    }
    else{
        currentPage--;
        myCards(currentPage);
    }
}

let nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", myNext);

function myNext(){
    if(currentPage == 10){
        nextBtn.disabled = true;
    }
    else{
        currentPage++;
        myCards(currentPage);
    }
}

let sortById = document.getElementById("sortid");

sortById.addEventListener("change", mySort);

function mySort(data){
    let val = sortById.value;

    if(val == "Low to High"){
      data.sort((a,b)=> a.id - b.id);
      return data;
    }
    else if(val == "High to Low"){
        data.sort((a,b)=> b.id - a.id);
        return data;
    }
    else{
        return data;
    }

}
