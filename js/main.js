const menuBtn = document.querySelector(".menu-btn");
const floatingBtn = document.getElementById("floating-menu-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const menuLinks = document.querySelectorAll("nav a");

// メニューを閉じる共通処理
function closeMenu() {
    nav.classList.remove("active");

    // ヘッダーが見えていなければ固定ボタンを再表示
    if (header.getBoundingClientRect().bottom <= 0) {
        floatingBtn.classList.add("show");
    }
}

// ヘッダーの☰
menuBtn.addEventListener("click", () => {
    nav.classList.add("active");
    floatingBtn.classList.remove("show");
});

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

// スクロールで表示
window.addEventListener("scroll", () => {
    if (header.getBoundingClientRect().bottom <= 0) {
        floatingBtn.classList.add("show");
    } else {
        floatingBtn.classList.remove("show");
    }
});