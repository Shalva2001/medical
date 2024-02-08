export const fillBookingList = (parentNode, booking) => {
	const data = {
		fullName: `${booking.get('firstname')} ${booking.get('lastname')}`,
		email: booking.get('email'),
		message: booking.get('message'),
	};

	const li = document.createElement('li');

	const nameP = document.createElement('p');
	nameP.innerHTML = `<b>სახელი:</b> ${data.fullName}`;

	const emailP = document.createElement('p');
	emailP.innerHTML = `<b>იმეილი:</b> ${data.email}`;

	const additionalInfoP = document.createElement('p');
	additionalInfoP.innerHTML = `<b>შეტყობინება:</b> ${data.message || ''}`;

	li.appendChild(nameP);
	li.appendChild(emailP);
	li.appendChild(additionalInfoP);
	parentNode.appendChild(li);
};
