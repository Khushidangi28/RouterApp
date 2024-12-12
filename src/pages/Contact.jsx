import './Home.css';  // Importing the CSS for styling

const Contact = () => {
  return (
    <div className="contact-form">
      <h1>Contact Me</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
