$(document).ready(function() {

    $("#contactForm").submit(function() {

        var subject = $('#subject').val();
        var fromEmail = $('#fromEmail').val();
        var messageBody = $('#messageBody').val();

        Email.send({
            Host: "mail.isahealth.com:465/",
            Username: "isahealt",
            Password: "HsYpC7lx23",
            To: 'info@isahealth.com',
            From: fromEmail,
            Subject: subject,
            Body: messageBody
        }).then(
            message => {
                console.info('error: ' + message);
            }
        );

    });
});