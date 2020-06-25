import './scss/main.scss';

const clear = () => {
	if (document.mail_form.classList.contains('Errors')) {
		document.mail_form.classList.remove('Errors');
	}
};
function formSubmit(event) {
	
	event.preventDefault();
	let mail_check_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ,
		mail = document.mail_form.email_input;
		if (mail.value.match(mail_check_format)) {
			mail.value = '';
			clear();
		} else {
			document.mail_form.classList.add('Errors');
			mail.focus();
		}
};

document.mail_form.addEventListener('submit', formSubmit );

