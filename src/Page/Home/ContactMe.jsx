import { useState } from "react";

export default function ContactMe() {

    // Show options in select form
    const [option, setOption] = useState('');
    // Make form more dynamic and show message after submitting
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const contactOptions = [
        {
            "id": "1",
            "option": "Web development",
        },
        {
            "id": "2",
            "option": "UI/UX design",
        },
        {
            "id": "3",
            "option": "SEO",
        }
    ];

    const handleOptionsChange = (e) => {
        setOption(e.target.value);
    }



    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormSubmitted(true);
        setSelectedTopic(option);
    }
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
                </p>
            </div>
            {!formSubmitted ? (
                <form className="contact--form--container">
                    <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                        type="text"
                        className="contact--input text-md"
                        name="first-name"
                        id="first-name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                        type="text"
                        className="contact--input text-md"
                        name="last-name"
                        id="last-name"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                        type="email"
                        className="contact--input text-md"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">phone-number</span>
                        <input
                        type="number"
                        className="contact--input text-md"
                        name="phone-number"
                        id="phone-number"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                    </div>
                    <label htmlFor="choose-topic" className="contact--label">
                        <span className="text-md">Choose a topic</span>
                        <select
                            id="choose-topic"
                            className="contact--input text-md"
                            value={option}
                            onChange={handleOptionsChange}
                        >
                            <option value="">Select One...</option>
                            {contactOptions.map((item) => (
                                <option
                                    key={item.id}
                                    value={item.option}
                                >
                                    {item.option}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input text-md"
                        id="message"
                        rows="8"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </label>
                    <label htmlFor="checkboc" className="checkbox--label">
                    <input
                        type="checkbox"
                        required name="checkbox"
                        id="checkbox"
                        checked={agreement}
                        onChange={(e) => setAgreement(e.target.checked)}
                    />
                    <span className="text-sm">I accept the terms</span>
                    </label>
                    <div>
                    <button
                        type="submit"
                        className="btn btn-primary contact--form--btn"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    </div>
                </form>
            ) : (
                <div>
                    <p className="text-lg">
                        Thank you {firstName} {lastName} for your message. We'll contact you soon about
                        {selectedTopic && (
                            <p>Topic: {selectedTopic}</p>
                        )}
                    </p>
                </div>
            )}
        </section>
    );
}