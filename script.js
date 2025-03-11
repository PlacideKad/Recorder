
//opens and closes the side bar when we click where ever on the screen out of the  side bar
document.addEventListener("click",function(event){
    let sideBar=document.querySelector(".sideBar");
    let button=document.getElementById("openSideBar");
    let closeButton=document.querySelector(".closeSideBar");

    if(!sideBar.contains(event.target)){
        button.contains(event.target)?sideBar.classList.toggle("show"):sideBar.classList.remove("show");
    }
    
    if(closeButton.contains(event.target))sideBar.classList.remove("show");
})
