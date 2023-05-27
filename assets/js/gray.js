
let btn=document.getElementById('grey-btn');
let html=document.documentElement.outerHTML;
btn.onclick = function(){
    html.style.-webkit-filter="grayscale(100%);"
};