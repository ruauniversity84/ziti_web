const floatingBtn = document.getElementById("floating-menu-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const menuLinks = document.querySelectorAll("nav a");

// メニューを閉じる
function closeMenu() {
    nav.classList.remove("active");
    floatingBtn.classList.add("show");
}

floatingBtn.classList.add("show");

// 固定☰
floatingBtn.addEventListener("click", () => {
    nav.classList.add("active");
    floatingBtn.classList.remove("show");
});

// ✕
closeBtn.addEventListener("click", closeMenu);

// メニューをクリックしたら閉じる
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});