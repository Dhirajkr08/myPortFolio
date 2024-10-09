var typed = new Typed(".text", {
    strings: ["Programmer . . ." , "Front-end developer . . .","Aspiring Full-stack developer..."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})


async function handleContactSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create an object to hold the data
    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    try {
        // Send a POST request to the mock API
        const response = await axios.post('https://crudcrud.com/api/990b6100fc2e45ac8f823e5481105060/myData', data);
        
        // Log the response to the console
        console.log("Response from server:", response.data);

        // Optionally, display a success message
        alert("Thank you for your message, " + name + "! We will get back to you soon.");

        // Clear the form fields
        document.getElementById('contactForm').reset();
    } catch (error) {
        console.error("There was an error sending the data:", error);
        alert("There was an error sending your message. Please try again later.");
    }
}