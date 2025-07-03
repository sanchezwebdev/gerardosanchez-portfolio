import style from '../styles/Contact.module.css'
import Form from './Form'

const ContactPage = () => {
  return (
    <div className={style.container}>
        <div className={style.innerContainer}>
          <p>Thanks for taking the time to reach out.</p>
          <p>How can I help you today?</p>
        <Form/>
        </div>
    </div>

  )
}

export default ContactPage