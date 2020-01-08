console.log('%c HI', 'color: firebrick')




document.addEventListener("DOMContentLoaded", ()=> {
    //Get dog image
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(r => r.json())
    .then(jsonObj => {
        turnJSONtoHTML(jsonObj)    
        
    });
    
    function turnJSONtoHTML(jsonObj){
        let dogDiv = document.querySelector("#dog-image-container");
        
        for ( let i = 0; i<jsonObj.message.length; i++){
            let imageTag = document.createElement("img");
        
        
            let newLi = document.createElement('li');
            imageTag.src = jsonObj.message[i]
            imageTag.alt = "Good boy!";
                newLi.append(imageTag);
                dogDiv.append(newLi);
        }
            // jsonObj.message.forEach(pic => {
                
            //     imageTag.src = jsonObj.message[i]
            //     imageTag.alt = "Good boy!";
            //     let newLi = document.createElement('li');
            //     newLi.append(imageTag);
            //     dogDiv.append(newLi);
            // });;
            
    }
});