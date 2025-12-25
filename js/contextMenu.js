const menu = document.getElementById("contextMenu");
let selectedItem = null;

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    selectedItem = e.target.closest(".file, .folder");

    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
    menu.classList.remove("hidden");
});

document.addEventListener("click", () => {
    menu.classList.add("hidden");
});

document.getElementById("newFolder").onclick = () => {
    const folderName = prompt("Folder name?");
    if (!folderName) return;

    const folder = getCurrentFolder();
    folder[folderName] = {};
    saveFileSystem(fileSystem);
    renderFiles();
};



document.getElementById("deleteItem").onclick = () => {
    if (!selectedItem) return;

    const name = selectedItem.textContent;
    const folder = getCurrentFolder();

    delete folder[name];
    saveFileSystem(fileSystem);
    renderFiles();
};
