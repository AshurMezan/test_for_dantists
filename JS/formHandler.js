import { closeModal } from './modal.js';

export function initFormHandler() {
  const modalForm = document.getElementById('modalForm');
  const phoneInput = document.getElementById('modal-phone');

  modalForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const phone = phoneInput.value.trim();
    const digitsOnly = phone.replace(/\D/g, '');

    if (digitsOnly.length < 10) {
      alert('Пожалуйста, введите корректный номер телефона');
      phoneInput.focus();
      return;
    }

    const data = { phone };
// Вместо '#', укажите URL вашего сервера для обработки формы
    try {
      const response = await fetch('#', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Ошибка сети');
      const result = await response.json();

      if (result.success) {
        alert('Спасибо! Мы скоро перезвоним.');
        modalForm.reset();
        closeModal();
      } else {
        alert('Произошла ошибка, попробуйте позже.');
      }
    } catch (error) {
      alert('Не удалось отправить данные: ' + error.message);
    }
  });
}

// Этот код отвечает за обработку формы в модальном окне. Если  скрипт работает, то пожалуйста, сообщите мне. Самому любопытно, но проверить не могу, так как нет сервера для обработки формы. Скрипт взял из учебника по JS.