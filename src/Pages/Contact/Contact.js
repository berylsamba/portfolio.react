import styles from './Contact.module.css'

export default function Contact(){
    return(
        <>
            <div>
            <h2 className={styles.h2}>Contact Form</h2>
            <input type="text" name="first" placeholder='First Name'/>
            <input type="text" name="last" placeholder='Last Name'/>
            <input type="email" name="first" placeholder='Email Address'/>
            <textarea rows={5} cols={60} name='message' placeholder='Enter Message'></textarea>
            <button type='submit'>Send Message</button>
            <br/>
            </div>

        </>
    )
}