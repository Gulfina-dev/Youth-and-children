// modal.js
document.addEventListener('DOMContentLoaded', function() {
    // Данные для каждого блока
    const modalData = {
        0: {
            title: "Образование доступно каждому",
            text: "Мы предлагаем бесплатные онлайн-курсы, чтобы дети и молодёжь могли учиться независимо от места проживания. Наш проект помогает развивать навыки и получать знания в удобном формате."
        },
        1: {
            title: "Спортивные площадки для района",
            text: "Новые спортивные площадки позволят детям активно проводить время на свежем воздухе. Мы поддерживаем здоровый образ жизни и создаём безопасные условия для занятия спортом."
        },
        2: {
            title: "Творческие мастерские",
            text: "Бесплатные секции и кружки помогут детям развивать художественные и музыкальные способности. Мы создаём пространство для самовыражения и творческого роста."
        }
    };

    const buttons = document.querySelectorAll('.card-btn');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const closeBtn = document.getElementById('modalCloseBtn');

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const data = modalData[index];
            if (data) {
                modalTitle.textContent = data.title;
                modalText.textContent = data.text;
                modal.style.display = 'flex';
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});