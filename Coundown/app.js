const endDate = "26 Dec 2024 09:50 AM"
const inputs = document.querySelectorAll("input")
document.getElementById("endDate").innerText = endDate;

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    console.log(end,now);
    const diff = (end - now)/1000   // converted mili-sec to sec
     
    console.log(diff);
    if(diff < 0){
        return
    }

    
    //convert into days
    inputs[0].value = Math.floor(diff /3600/24)



    //convert into Hours
    inputs[1].value = Math.floor(diff /3600) % 24
    
    

    //convert into minutes
    inputs[2].value = Math.floor(diff /60) % 60

    //convert into seconds
    inputs[3].value = Math.floor(diff ) % 60

    
}
clock()


// 1 day = 24 Hrs 
// 1 hrs = 60 Min
// ! min = 60 Sec 


setInterval(() => {
    clock()
}, 1000);