document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "c")) {
        event.preventDefault();
    }
});
