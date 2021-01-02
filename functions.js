
const DOG_URL = "https://api.thecatapi.com/v1/images/search";
const animal = document.querySelector('.animal');


let flag = false;


function addNewDoggo() {

        if(!flag){
        animal.setAttribute("border","5px solid");
            flag = true;
        }

        const promise = fetch(DOG_URL);
        promise
        .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
        })
        .then(function(processedResponse) {

        animal.src =processedResponse[0].url;
        });


   
}


function buttonClick(value){


    if(value == 'DOG'){
       addNewDoggo();
        return;
    }


}
function init(){
    document.querySelector(".header-buttons").addEventListener("click",function(event){
        buttonClick(event.target.innerText);
    });

}




init();