const burguer = document.querySelector(".icon-burger");
/*const menu = document.querySelector(".menu");*/

burguer.addEventListener("click", () => {
    burguer.classList.toggle('active');
    /*menu.classList.toggle('active');*/
});