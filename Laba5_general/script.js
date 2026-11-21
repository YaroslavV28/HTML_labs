
const button = document.querySelector(".card__button");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Товар добавлен в корзину";

    button.textContent = "Добавлено!";
    button.setAttribute("aria-label", "Товар добавлен в корзину");

    setTimeout(function () {
        message.textContent = "";
        button.textContent = "В корзину";
        button.setAttribute(
            "aria-label",
            "Добавить беспроводные наушники в корзину"
        );
    }, 3000);
});
