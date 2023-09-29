const galleryItems = document.querySelectorAll('.gallery-item-container');
let currentIndex = 0;

function showItem(index) {
    galleryItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'flex';
            setTimeout(() => {
                item.style.opacity = 1; 
            }, 10); 
        } else {
            item.style.opacity = 0;
            item.style.display = 'none';
        }
    });
}

showItem(currentIndex);

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showItem(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showItem(currentIndex);
});
