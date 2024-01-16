let navbar = document.querySelector('nav');
let Menulinks = document.getElementById("menulinks")
function toogle1(){
    Menulinks.classList.toggle('show')  
}
window.onscroll = function(){
if(window.scrollY >0)
{
    navbar.style.background = '#eefff9';

}
else{
    navbar.style.background = 'transparent';
}
}

