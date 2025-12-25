let fileSystem = loadFileSystem();

let currentPath = ["Desktop"];


function getCurrentFolder() {
    return currentPath.reduce((acc, key) => acc[key], fileSystem);
}

function renderFiles() {
    const files = getCurrentFolder();
    const fileArea = document.getElementById("fileArea");
    const pathDiv = document.getElementById("path");

    fileArea.innerHTML = "";
    pathDiv.textContent = currentPath.join(" / ");

    Object.keys(files).forEach((key) => {
        const value = files[key];
        const item = document.createElement("div");

        // 📁 Folder
        if (typeof value === "object") {
            item.classList.add("folder");
            item.textContent = key;

            item.addEventListener("click", () => {
                currentPath.push(key);
                renderFiles();
            });

        }
        // 📄 File
        else {
            item.classList.add("file");
            item.textContent = key;

            item.addEventListener("click", () => {
                alert(value); // later → open file window
            });
        }

        fileArea.appendChild(item);
    });
}
if (!fileSystem[currentPath[0]]) {
    currentPath = ["Desktop"];
}


renderFiles();
document.getElementById("backBtn").onclick = () => {
    if (currentPath.length > 1) {
        currentPath.pop();
        renderFiles();
    }
};
