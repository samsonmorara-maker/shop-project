// making the menu to display page links
const menu = document.getElementById("menu")
const Mobilemenu = document.getElementById("Mobile-menu")
 menu.addEventListener("click",()=> 
 {
Mobilemenu.classList.toggle("hidden");
if
(Mobilemenu.classList.contains("hidden"))
{
    menu.textContent = "☰"
}
else
{
    menu.textContent = "x"
}
})