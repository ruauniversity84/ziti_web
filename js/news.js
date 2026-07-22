async function loadNews() {
    const response = await fetch("data/news.json");
    const news = await response.json();

    const list = document.getElementById("news-list");

    news.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.date}　${item.title}`;
        list.appendChild(li);
    });
}

loadNews();