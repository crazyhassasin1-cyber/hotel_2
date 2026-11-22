const modal = document.getElementById("bookingModal");
const openBtn = document.getElementById("openBooking");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const reviews = document.querySelectorAll(".review");

let current = 0;

setInterval(() => {

    reviews[current].classList.remove("active");

    current++;

    if (current >= reviews.length) {
        current = 0;
    }

    reviews[current].classList.add("active");

}, 4000);

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "2347046905080";

    const whatsappMessage =
`🏨 *New Hotel Website Inquiry*

👤 Name: ${name}

📧 Email: ${email}

💬 Message:
${message}`;

    const whatsappURL =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});