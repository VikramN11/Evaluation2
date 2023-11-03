fetch("http://localhost:3000/quiz").then(res=>{
        return res.json();
    }).then(res=>{
        console.log(res);
        renderData(res);
    }).catch(err =>{
        console.log(err);
    })


    function getRandomNumbers() {
        const numbers = [];
        
        while (numbers.length < 10) {
          const randomNumber = Math.floor(Math.random() * 10) + 1;
          
          // Check if the generated number is not already in the 'numbers' array
          if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
          }
        }
        
        return numbers;
      }

    function renderData(data){
       let que_num = getRandomNumbers();
       console.log(que_num);
       let i = 1;

       let question_h1 = document.getElementById("question");

       que_num?.forEach(el =>{
        question_h1.innerText = `Q.${i} ${data[el]["question"]}`;
        i++;
        
       })

    //    console.log(que_num);
    }