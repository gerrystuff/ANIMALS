
const ANIMAL_URL  = [
    "https://dog.ceo/api/breeds/image/random",
    "https://api.thecatapi.com/v1/images/search"
    
]


const animal = document.querySelector('.animal');


let flag = false;


function addNewAnimal(value) {

    console.log('entre')
        if(!flag){
        animal.setAttribute("border","5px solid");
            flag = true;
        }

        const promise = fetch(ANIMAL_URL[value]);

        promise
        .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
        })
        .then(function(processedResponse) {

        if(value == 1)    
        animal.src =processedResponse[0].url;
        else
        animal.src = processedResponse.message;
        });


   
}


function buttonClick(value){


    if(value == 'DOG'){
       addNewAnimal(0);
        return;
    }

    if(value == 'CAT'){
        addNewAnimal(1)  
        return;
    }


}
function init(){
    document.querySelector(".header-buttons").addEventListener("click",function(event){
        buttonClick(event.target.innerText);
    });

}




init();