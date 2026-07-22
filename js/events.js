async function loadEvents() {
    const response = await fetch("data/events.json");
    const events = await response.json();

    const container = document.getElementById("event-list");

    events.forEach(event => {
        const card = document.createElement("a");
        card.className = "card_right";
        card.href = event.page;

        card.innerHTML = `
            <h3 class="card_link">${event.title}</h3>
            <p>📅 ${event.date}</p>
            <br>
        `;

        container.appendChild(card);
    });
}

loadEvents();