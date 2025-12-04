// Modal functions for parking maps
function openModal(faculty) {
    const modal = document.getElementById('parkingModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    // Clear previous content
    modalImage.innerHTML = '';
    
    if (faculty === 'feb') {
        modalCaption.textContent = 'Denah Parkir FEB - Fakultas Ekonomika dan Bisnis';
        modalImage.innerHTML = `
            <div style="padding: 1rem; background: white; display: flex; justify-content: center; align-items: center;">
                <img src="c:\\Users\\Lenovo\\Downloads\\denah parkir feb.png" alt="Denah Parkir FEB" style="max-width: 100%; max-height: 70vh; object-fit: contain;">
            </div>
        `;
    } else if (faculty === 'fisipol') {
        modalCaption.textContent = 'Denah Parkir FISIPOL - Fakultas Ilmu Sosial dan Politik';
        modalImage.innerHTML = `
            <div style="padding: 1rem; background: white; display: flex; justify-content: center; align-items: center;">
                <img src="c:\\Users\\Lenovo\\Downloads\\denah parkir fisipol.png" alt="Denah Parkir FISIPOL" style="max-width: 100%; max-height: 70vh; object-fit: contain;">
            </div>
        `;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('parkingModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
document.getElementById('parkingModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});