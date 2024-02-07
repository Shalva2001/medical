export const fillContactsList = (parentNode, contact) => {
	const name = `${contact.data().firstname} ${contact.data().lastname}`;

	const li = document.createElement('li');

	const nameP = document.createElement('p');
	nameP.innerHTML = `<b>Name:</b> ${name}`;

	const emailP = document.createElement('p');
	emailP.innerHTML = `<b>Email:</b> ${contact.data().email}`;

	const additionalInfoP = document.createElement('p');
	additionalInfoP.innerHTML = `<b>About:</b> ${contact.data().additional_info || ''}`;

	li.appendChild(nameP);
	li.appendChild(emailP);
	li.appendChild(additionalInfoP);
	parentNode.appendChild(li);
};
