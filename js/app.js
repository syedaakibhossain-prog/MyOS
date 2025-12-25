function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);

const fileManagerIcon = document.querySelector('.icon');
const fileManagerWindow = document.getElementById('fileManagerWindow');
const closeBtn = document.querySelector('.close-btn');

fileManagerIcon.addEventListener('click', () => {
    fileManagerWindow.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    fileManagerWindow.classList.add('hidden');
});

const header = fileManagerWindow.querySelector('.window-header');
let isDragging = false;
let initialX, initialY;

header.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX - fileManagerWindow.offsetLeft;
    initialY = e.clientY - fileManagerWindow.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    fileManagerWindow.style.left = `${e.clientX - initialX}px`;
    fileManagerWindow.style.top = `${e.clientY - initialY}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});