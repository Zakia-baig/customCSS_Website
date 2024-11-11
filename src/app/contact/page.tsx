export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-header">Contact Me</h1>
            
            <div className="contact-details">
                <p>Email: <a href="mailto:zakiabaig0507@gmail.com">zakiabaig0507@gmail.com</a></p>
                <p>Phone: <a href="tel:+03317438989">03317438989</a></p>
            </div>

            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message"  required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
