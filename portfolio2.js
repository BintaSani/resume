const form = document.querySelector('.form');

form.addEventListener('submit', sendMail);

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('mcyz3nP4-VCb6xgX9');
})();

function sendMail(e) {
    e.preventDefault();
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('msg').value;


    var contactParams = {
        fname: firstName,
        lname:  lastName,
        email: email,
        message: message,
    };

    emailjs.send('service_aug0tzp','template_pzyrh6c',contactParams).then(function (res) {})

    alert('Message Sent');
    e.target.reset();
};
