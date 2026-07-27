// modal-reg.js
document.addEventListener('DOMContentLoaded', function() {
    // Элементы модальных окон
    const regModal = document.getElementById('registrationModal');
    const successModal = document.getElementById('successModal');
    
    // Элементы формы
    const form = document.getElementById('registrationForm');
    const clearBtn = document.getElementById('clearFormBtn');
    const successCloseBtn = document.getElementById('successCloseBtn');
    
    // Все кнопки "Зарегистрироваться" в карточках мероприятий
    const regButtons = document.querySelectorAll('.event-btn');
    
    // Переменная для хранения текущего мероприятия (если нужно)
    let currentEvent = null;
    
    // Открытие окна регистрации при клике на кнопку
    regButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Находим родительскую карточку с мероприятием
            const card = btn.closest('.event-card');
            if (card) {
                const eventName = card.querySelector('.event-name')?.textContent || 'Мероприятие';
                currentEvent = eventName;
            }
            regModal.style.display = 'flex';
        });
    });
    
    // Обработка отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Проверка заполнения полей
        const fio = document.getElementById('fio').value.trim();
        const count = document.getElementById('count').value;
        const email = document.getElementById('email').value.trim();
        
        if (fio === '') {
            alert('Пожалуйста, введите ФИО');
            return;
        }
        if (email === '') {
            alert('Пожалуйста, введите электронную почту');
            return;
        }
        if (!email.includes('@')) {
            alert('Введите корректный email');
            return;
        }
        
        // Закрываем окно регистрации
        regModal.style.display = 'none';
        
        // Очищаем форму
        form.reset();
        document.getElementById('count').value = '1';
        
        // Показываем окно успеха
        successModal.style.display = 'flex';
    });
    
    // Очистка формы
    clearBtn.addEventListener('click', function() {
        form.reset();
        document.getElementById('count').value = '1';
    });
    
    // Закрытие окна успеха
    successCloseBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    // Закрытие окон по клику на фон
    regModal.addEventListener('click', function(e) {
        if (e.target === regModal) {
            regModal.style.display = 'none';
            form.reset();
            document.getElementById('count').value = '1';
        }
    });
    
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});