// Слайдер для прошедших событий
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const prevBtn = document.querySelector('.slider-container .prev');
    const nextBtn = document.querySelector('.slider-container .next');
    
    if (!track || !prevBtn || !nextBtn) {
        console.log('Слайдер не найден');
        return;
    }
    
    const cards = document.querySelectorAll('.past-card');
    const cardWidth = 337; // 313px + 24px gap
    const totalCards = cards.length;
    let currentIndex = 0;
    const maxIndex = totalCards - 3; // показываем 3 блока
    
    function updateSlider() {
        const offset = currentIndex * cardWidth;
        track.style.transform = 'translateX(-' + offset + 'px)';
        
        // Управление кнопками
        if (currentIndex <= 0) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
        
        if (currentIndex >= maxIndex) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });
    
    // Запускаем слайдер
    updateSlider();
});// Слайдер для прошедших событий
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const prevBtn = document.querySelector('.slider-container .prev');
    const nextBtn = document.querySelector('.slider-container .next');
    
    if (!track || !prevBtn || !nextBtn) {
        console.log('Слайдер не найден');
        return;
    }
    
    const cards = document.querySelectorAll('.past-card');
    const cardWidth = 337; // 313px + 24px gap
    const totalCards = cards.length;
    let currentIndex = 0;
    const maxIndex = totalCards - 3; // показываем 3 блока
    
    function updateSlider() {
        const offset = currentIndex * cardWidth;
        track.style.transform = 'translateX(-' + offset + 'px)';
        
        // Управление кнопками
        if (currentIndex <= 0) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
        
        if (currentIndex >= maxIndex) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });
    
    // Запускаем слайдер
    updateSlider();
});