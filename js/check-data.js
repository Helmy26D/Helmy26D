const form = document.getElementById('form');
const fullname = document.getElementById('full-name');
const region = document.getElementById('region');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const topic = document.getElementById('topic');
const messagebox = document.getElementById('message-box');
const success = document.getElementById ('success')
const failure = document.getElementById ('failure')
form.addEventListener('submit', (e) => {
    if (checkInputs()) {
        return true;
    } else {
        e.preventDefault();
    }
});
function checkInputs() {
    const fullnameValue = fullname.value.trim();
    const regionValue = region.value.trim();
    const mobileValue = mobile.value.trim();
    const emailValue = email.value.trim();
    const topicValue = topic.value.trim();
    const messageboxValue = messagebox.value.trim();
    if (fullnameValue === '') {
        setFailureFor(fullname, 'Required');
    } else {
        setSuccessFor(fullname);
    }
    if (regionValue === '') {
        setFailureFor(region, 'Required');
    } else {
        setSuccessFor(region);
    }
    if (mobileValue === '') {
        setFailureFor(mobile, 'Required');
    } else {
        setSuccessFor(mobile);
    }
	if(emailValue === '') {
		setFailureFor(email, 'Required');
	} else if (!isEmail(emailValue)) {
		setFailureFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
    if (topicValue === '') {
        setFailureFor(topic, 'Required');
    } else {
        setSuccessFor(topic);
    }
    if (messageboxValue === '') {
        setFailureFor(messagebox, 'Required');
    } else {
        setSuccessFor(messagebox);
    }
    if(fullnameValue === '' || regionValue === '' || mobileValue === '' | emailValue === '' || topicValue === '' || messageboxValue === '') {
        setFailureDataFor(failure, 'Failed, your message was not sent!');
    } else if(!isEmail(emailValue)) {
        setFailureDataFor(failure, 'Failed, your message was not sent!');
    } else {
        setSuccessDataFor(success,'Your message sent successfully!');
        return true;
    }
}
function setFailureFor(input, message) {
    const inputData = input.parentElement;
    const errorMessage = inputData.querySelector('error-message');
    errorMessage.innerText = message;
    inputData.className = 'input-data failure'; 
}
function setSuccessFor(input) {
    const inputData = input.parentElement;
    inputData.className = 'input-data success'; 
}
function setSuccessDataFor(input, message) {
    const errorMessage = input.parentElement;
    const success = errorMessage.querySelector('success');
    success.innerText = message;
    errorMessage.className = 'error-message-success'; 
}
function setFailureDataFor(input, message) {
    const errorMessage = input.parentElement;
    const failure = errorMessage.querySelector('failure');
    failure.innerText = message;
    errorMessage.className = 'error-message-failure'; 
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}