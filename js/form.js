"use strict"

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById('bookingButton');
	const formData = document.getElementById('forms');
	const booking = document.getElementById('booking-form');
	form.addEventListener('click', formSend);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
		if (error === 0) {
			let formDates = new FormData(formData);
			booking.classList.add('_sending');
			let response = await fetch('send.php', {
				method: 'POST',
				body: formDates
			});
			if (response.ok) {
				alert('Заявка отправлена, мы с вами свяжемся в течение 10 минут');

				formData.reset();
				booking.classList.remove('_sending');
			}
			else {
			alert('Что-то пошло не так');
			booking.classList.remove('_sending');
			}


		}
		else {
			alert('Правильно заполните обязательные поля');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);
			if (input.classList.contains('_phone')) {
				if (phoneTest(input)) {
					formAddError(input);
					error++;
				}
			}
			if (input.classList.contains('_name')) {
				if (input.value==='') {
					formAddError(input);
					error++;
				}
			}
			return error;
		}
	}
	// Добавить класс ошибки
	function formAddError(input) {
		input.classList.add('_error');
	}
	// Убрать класс ошибки
	function formRemoveError(input) {
		input.classList.remove('_error');
	}

	// Проверяем на правильность почту
	function phoneTest(input) {
		return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
	}
});