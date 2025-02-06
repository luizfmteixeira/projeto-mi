const startDate = new Date("May 12, 2019 23:34:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.436875); // Média de dias por mês
    const years = Math.floor(months / 12);
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months % 12;
    document.getElementById('days').textContent = Math.floor(days % 30.436875);
    document.getElementById('hours').textContent = hours % 24;
    document.getElementById('minutes').textContent = minutes % 60;
    document.getElementById('seconds').textContent = seconds % 60;
}

// Atualiza o timer a cada segundo
setInterval(updateTimer, 1000);
updateTimer(); // Primeira atualização

// Carousel Logic
const container = document.querySelector("#carousel-container");
const images = document.querySelectorAll("#carousel-container img");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
let currentIndex = 0;
let autoplayInterval;

function updateCarousel() {
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 3000); // Muda a imagem a cada 3 segundos
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

// Inicializa o carrossel e o autoplay
updateCarousel();
startAutoplay();

// Pausa o autoplay quando o mouse está sobre o carrossel
container.addEventListener('mouseenter', stopAutoplay);
container.addEventListener('mouseleave', startAutoplay);

// Remove a animação de carregamento quando a página é carregada
window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
});