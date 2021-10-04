var ar=["red","yellow","green","pink"]
var h=document.getElementById("hl");

h.addEventListener('click',clr)

function clr(){
    var i=parseInt(Math.random()*ar.length);
    document.body.style.backgroundColor=ar[i];
}
