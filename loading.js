const sleep = ms => new Promise(r => setTimeout(r, ms));


const skillCallBack = async dom => {
    const points = document.getElementsByClassName("pointrow");
    dom.classList.add("active");
    for(let i = 0; i < points.length; i++){
        points[i].classList.add("active")
        await sleep(125);
    }
}
const skillBlinker = async () => {
    const blinker = document.getElementById("skillblinker");
    await sleep(2000);
    blinker.classList.remove("disabled");
}

const projectCallBack = async dom => {
    const points = document.getElementsByClassName("project");
    dom.classList.add("active");
    for(let i = 0; i < points.length; i++){
        points[i].classList.add("active")
        await sleep(300);
    }
}
const weclomeTextCallBack = async dom => {
    const string = "Welcome to my page!";
    dom.classList.add("active")
    let building = "";
    await sleep(1000);
    for(let i = 0; i < string.length; i++){
        const char = string.charAt(i);
        building += char;
        dom.innerText = building
        await sleep(100);
    }
}

const objects = [
    {DOM: document.getElementById("welcometext"), callback: async dom => {weclomeTextCallBack(dom)}},
    {DOM: document.getElementById("skills"), callback: async dom => {await skillCallBack(dom); await skillBlinker();}},
    {DOM: document.getElementById("projects"), callback: async (dom) => {projectCallBack(dom)}},
    {DOM: document.getElementById("education"), callback: async () => {}}
]


document.addEventListener('scroll', function () {
    objects.forEach(dom => {
        switch(isInViewport(dom.DOM)){
            case true:
                if(!dom.DOM.classList.contains("active")){
                    dom.callback(dom.DOM);
                }
                break;
            case false:
                break;
            default:
                break;
        }
    });
}, {
    passive: true
});


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight * 1.7 || document.documentElement.clientHeight / 2) &&
        rect.right <= (window.innerWidth * 1|| document.documentElement.clientWidth / 2)
    );
}



objects[0].callback(objects[0].DOM);