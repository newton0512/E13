// создаем элемент заголовка
const heading = document.createElement("h1");
heading.textContent = "Hello, world!!!";

// добавляем заголовок в DOM
const root = document.querySelector("#root");
root.append(heading);