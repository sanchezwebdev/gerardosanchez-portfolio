import Nav from "../components/Nav"
import Footer from '../components/Footer'
import ContactPage from '../components/ContactPage'
import styles from '../styles/ContactGlobal.module.css'


const Contact = () => {
    return (
      <div className = {styles.container}>
        <Nav/>
        <ContactPage/>
        <Footer/>
      </div>
    )
  }
  
  export default Contact