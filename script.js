// Slide animation on scroll
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;

        if (slideTop < window.innerHeight - 100) {
            slide.classList.add('active');
        }
    });
}
function openModal() {
    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

/* Close when clicking outside */
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openResumeModal() {
    document.getElementById("resumeModal").style.display = "flex";
}

function closeResumeModal() {
    document.getElementById("resumeModal").style.display = "none";
}
// Run on scroll
window.addEventListener('scroll', showSlides);

// Run once on page load (so first section appears)
showSlides();