// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {

    
    const generateMemebtn = document.querySelector(".generate-meme-btn");

    const memeImg = document.querySelector("img");
 
    const memeTitle = document.querySelector(".meme-title");

    const memeAuthor = document.querySelector(".meme-author");

    generateMemebtn.addEventListener("click", () => {
        // Fetch a meme from the API
        fetch("https://meme-api.com/gimme/indiameme")
            // Convert the response to JSON format
            .then(response => response.json())  
            // Once we have the JSON data, update the meme details on the webpage
            .then(data => {
                
                memeImg.src = data.url;  
                
                memeTitle.textContent = data.title;  
               
                memeAuthor.textContent = `Author: ${data.author}`;  
            })
            
            .catch(error => console.error("Error fetching meme:", error));  
    });
});
