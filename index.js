
document.querySelector(".close-icon").addEventListener("click", function(){
    
    document.querySelector(".sidenav").style.marginLeft ="-300px";
    document.querySelector(".close-icon").style.opacity ="0";
    

});

document.querySelector("#all-icon").addEventListener("click", function(){

    document.querySelector(".sidenav").style.marginLeft="0";
    document.querySelector(".close-icon").style.opacity ="1";
    
});



    
