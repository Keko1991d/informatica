// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.view-image').forEach(button => {
        button.addEventListener('click', (event) => {
            const imageUrl = event.target.getAttribute('data-image');
            modalImage.src = imageUrl;
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
