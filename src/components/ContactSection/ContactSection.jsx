import styles from "./contactsection.module.css"
import { useRef } from "react";
import emailjs from "@emailjs/browser"

function ContactSection() {
    const nameInput = useRef();
    const emailInput = useRef();
    const contentInput = useRef();
    const form = useRef();

    function onSend(e) {
        e.preventDefault();

        const name = nameInput.current.value;
        const email = emailInput.current.value;
        const content = contentInput.current.value;

        if (name && email && content) {
            emailjs.sendForm('service_x8gv41b', 'template_zf12z9l', form.current, 'bgtrg0TwDdkIlRA_Y')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }

        form.current.reset();
    }

    return (
        <section className={styles.contact_section}>
            <h2 className={styles.heading}>Contact Me</h2>

            <form ref={form} className={styles.form} action="">
                <input ref={nameInput} type="text" name="user_name" id="user_name_input" placeholder="batman" />
                <input ref={emailInput} type="email" name="user_email" id="user_email_input" placeholder="batman@gotham.com" />
                <textarea ref={contentInput} name="message" id="email_content_input" cols="50" rows="10"></textarea>

                <input type="submit" value="SEND" onClick={onSend} />
            </form>
        </section>
    )
}

export default ContactSection;