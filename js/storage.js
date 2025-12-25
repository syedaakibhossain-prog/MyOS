function loadFileSystem() {
    const saved = localStorage.getItem("myos-filesystem");
    return saved ? JSON.parse(saved) : structuredClone(defaultFileSystem);
}

function saveFileSystem(fs) {
    localStorage.setItem("myos-filesystem", JSON.stringify(fs));
}
