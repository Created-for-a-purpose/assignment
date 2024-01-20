import { Navbar, Footer } from "../components"
import "../styles/ContactForm.css"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setFormInput({
            ...formInput,
            [name]: value,
        })
    }

    const submit = async (e) => {
        e.preventDefault();
        await emailjs
            .send(
                "service_nt5feoc",
                "template_ubbyjip",
                {
                    from_name: formInput.name,
                    to_name: "Me",
                    from_email: formInput.email,
                    to_email: "noah20272@gmail.com",
                    subject: formInput.subject,
                    message: formInput.message,
                },
                "NLuZyNc5CT4QGJICg"
            )

        setFormInput({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }

    return (
        <>
            <Navbar isInView={true} />
            <div className="contact-form-header">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-form">
                <div className="contact-form-card">
                    <div className="contact-form-card-input">
                        <p>Your name</p>
                        <input name="name" onChange={(e) => handleChange(e)} value={formInput.name} />
                    </div>
                    <div className="contact-form-card-input">
                        <p>Your email</p>
                        <input name="email" onChange={(e) => handleChange(e)} value={formInput.email} />
                    </div>
                    <div className="contact-form-card-input">
                        <p>Subject</p>
                        <input name="subject" onChange={(e) => handleChange(e)} value={formInput.subject} />
                    </div>
                    <div className="contact-form-card-textarea">
                        <div>Your Message (Optional)</div>
                        <textarea name="message" onChange={(e) => handleChange(e)} value={formInput.message} />
                    </div>
                    <button className="form-button" onClick={(e) => submit(e)}>Submit</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactForm