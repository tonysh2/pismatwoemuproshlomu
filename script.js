// Список стихов (можно вручную добавить или автоматизировать, если хостинг позволяет)
const poems = [
    "стихи/стих1.txt",
    "стихи/стих2.txt",
    // ...
];

async function loadRandomPoem() {
    const randomPoemPath = poems[Math.floor(Math.random() * poems.length)];
    try {
        const response = await fetch(randomPoemPath);
        const text = await response.text();
        document.getElementById("poem").textContent = text;
    } catch (error) {
        console.error("Ошибка загрузки стиха:", error);
        document.getElementById("poem").textContent = "Не удалось загрузить стих :(";
    }
}

// Загружаем случайное стихотворение при открытии страницы
loadRandomPoem();