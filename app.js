const auth = "563492ad6f91700001000001b75b3f9ab4664bd7b5b752c4f00a8179 "
const animal = document.querySelector('.animal');

let dogs;

const pictures = [
    'dog',
    'cat',
    'bear',
    'fish',
    'bird'
]

let arrays = [];

async function setContent(){

    for(let i = 0; i < pictures.length;i++ ){
        console.log(pictures[i])

    const promise = await fetch(
        `https://api.pexels.com/v1/search?query=${pictures[i]}&per_page=80`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
                
            },
        }
    );

    const object = await promise.json();
     arrays.push(object.photos);

    }
}

let flag = false;
    function buttonClick(value){

        if(!flag){
            animal.setAttribute("border","2px solid");
                flag = true;
            }
    
        const randomNum = parseInt(getRandomArbitrary(1 ,80));

        if(value === 'DOG'){
            console.log('entre a perros')


          animal.src = arrays[0][randomNum].src.medium;
          return;  
        }

        
        if(value === 'CAT'){
            console.log('entre a gatos')
            animal.src = arrays[1][randomNum].src.medium;
            return;  
          }

        if(value === 'BEAR'){
            console.log('entre a osso')
            animal.src = arrays[2][randomNum].src.medium;
            return;  
          }

        if(value === 'FISH'){
            console.log('entre a peces')

            animal.src = arrays[3][randomNum].src.medium;
            return;  
          }

        if(value === 'BIRD'){
            console.log('entre a pajaritos')
            animal.src = arrays[4][randomNum].src.medium;
            return;  
          }
    }
    function init(){
        setContent();
        document.querySelector(".header-buttons").addEventListener("click",function(event){
            buttonClick(event.target.innerText);
        });
    
    }
    
    
    function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
    
    init();
