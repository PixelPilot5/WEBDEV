   export default function about(){
    const getelement = document.getElementById("content");
    getelement.innerHTML=`
        <div class="nav-links">
            <button id="homebtn">Home</button> | 
            <button id="menubtn">Menu</button>
        </div>

        <div class="grid">
            <!-- Left Column: Contact Details & Hours -->
            <div class="contact-info">
                <h2>Get In Touch</h2>
                <p><strong>Address:</strong><br>123 Flavor Ave, Foodie City, FC 54321</p>
                <p><strong>Phone:</strong><br>(555) 123-4567</p>
                <p><strong>Email:</strong><br>hello@thecozybistro.com</p>
                
                <h2>Hours of Operation</h2>
                <p><strong>Tuesday - Thursday:</strong> 11:00 AM - 9:00 PM</p>
                <p><strong>Friday - Saturday:</strong> 11:00 AM - 10:00 PM</p>
                <p><strong>Sunday:</strong> 10:00 AM - 3:00 PM (Brunch)</p>
                <p><strong>Monday:</strong> Closed</p>
            </div>

            <!-- Right Column: Contact Form -->
            <div>
                <h2>Send a Message</h2>
                <form action="#" method="POST" onsubmit="alert('Thank you for your message! We will get back to you soon.'); return false;">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="Your Name">

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="yourname@email.com">

                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required placeholder="How can we help you? (Reservations, catering, feedback...)"></textarea>

                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
`
   }