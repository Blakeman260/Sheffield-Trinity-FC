function sendMail(contactForm) {
    emailjs.send("gmail", "sheffieldtrinityfc", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "topic": contactForm.topic.value,
        "enquiry_entry": contactForm.enquiry.value
    })
    .then(
        function(response) {
            alert("Thank you, your email has been sent, we will get back to you, as soon as possible.");
            contactForm.reset();
        },
        function(error) {
            alert("Sorry, we're having a few problems right now, please try again later.");
        });
    return false;
}