function sendMail(contactForm) {
    emailjs.send("gmail", "sheffieldtrinityfc", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "topic": contactForm.topic.value,
        "enquiry_entry": contactForm.enquiry.value
    })
    .then(
        function(response) {
            console.log("SUCCESS",  response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}