
const button = document.getElementById("select-button");
const list = document.getElementById("language-list");
const value = document.getElementById("select-value");
const result = document.getElementById("result");
const options = Array.from(
    list.querySelectorAll('[role="option"]')
);

let activeIndex = 0;
let selectedIndex = -1;

function updateActive(index) {
    activeIndex = (index + options.length) % options.length;

    options.forEach((option, i) => {
        option.classList.toggle(
            "select__option--active",
            i === activeIndex
        );
    });

    list.setAttribute("aria-activedescendant", options[activeIndex].id);
    options[activeIndex].scrollIntoView({ block: "nearest" });
}

function openList() {
    list.hidden = false;
    button.setAttribute("aria-expanded", "true");
    list.focus();
    updateActive(selectedIndex >= 0 ? selectedIndex : 0);
}

function closeList() {
    list.hidden = true;
    button.setAttribute("aria-expanded", "false");
    list.removeAttribute("aria-activedescendant");
    button.focus();
}

function selectOption(index) {
    selectedIndex = index;
    const language = options[index].textContent.trim();

    value.textContent = language;
    result.textContent = "Вы выбрали: " + language;

    options.forEach((option, i) => {
        option.setAttribute(
            "aria-selected",
            i === index ? "true" : "false"
        );
    });

    closeList();
}

button.addEventListener("click", () => {
    if (list.hidden) {
        openList();
    } else {
        closeList();
    }
});

button.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        openList();

        if (event.key === "ArrowUp") {
            updateActive(options.length - 1);
        }
    }
});

list.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        event.preventDefault();
        updateActive(activeIndex + 1);
    }

    if (event.key === "ArrowUp") {
        event.preventDefault();
        updateActive(activeIndex - 1);
    }

    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectOption(activeIndex);
    }

    if (event.key === "Escape") {
        event.preventDefault();
        closeList();
    }

    if (event.key === "Tab") {
        list.hidden = true;
        button.setAttribute("aria-expanded", "false");
        list.removeAttribute("aria-activedescendant");
    }

    if (event.key === "Home") {
        event.preventDefault();
        updateActive(0);
    }

    if (event.key === "End") {
        event.preventDefault();
        updateActive(options.length - 1);
    }
});

options.forEach((option, index) => {
    option.addEventListener("click", () => {
        selectOption(index);
    });

    option.addEventListener("mousemove", () => {
        updateActive(index);
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".select") && !list.hidden) {
        closeList();
    }
});
