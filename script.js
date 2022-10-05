//hide image
var isShowing = false;
function hideImage(){
    const image = document.getElementById("me-photo");
    const emoji = document.getElementById("emoji");
    switch(isShowing){
        case true:
            isShowing = false;
            image.style.opacity = 1;
            image.style.scale = 1;
            emoji.innerText = "🫣"
            break;
        case false:
            isShowing = true;
            image.style.opacity = 0;
            image.style.scale = 0;
            emoji.innerText = "😳"
            break;
        default:
            break;
    }
    
}