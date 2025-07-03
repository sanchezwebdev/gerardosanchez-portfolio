import Layout from "../../components/Layout";
import styles from "../../styles/Crown.module.css";
export default function ProjectPage() {
  return (
    <>
      <Layout>
      <div className={styles.container}>
        <div className = {styles.topContainer}>
          <h1>Crown Invoice</h1>
          <div className={styles.imageContainer}>
            <a href=""><img className={styles.image} src="/project_images/gifs/crown1.gif" alt="" /></a>
            <div className={styles.imageLinks}>
              <span>Links:</span>
              <a href="">Live Site</a>
              <a href="">Github Codebase</a>
            </div>
          </div>
            <p>Crown Invoice is a sleek, user-friendly web application designed to make invoice creation quick and stress-free. The interface allows users to customize sender and recipient details, add as many line items as needed, set tax rates, and include personal notes — all in a single, intuitive form. The app automatically calculates subtotals, tax, and the final total in real time as you type.<br /><br />

            When you're done, simply click Download PDF to instantly generate a professional invoice, powered by html2pdf.js, right from the browser — no accounts or back-end storage needed. Everything stays local, making it both fast and privacy-friendly.<br /><br />

            The app also includes modals for privacy policy, terms of service, and a contact section to provide transparency and support.<br /><br />

            Whether you’re a freelancer, small business owner, or just need to send the occasional invoice, Crown Invoice offers a smooth, no-fuss experience that looks great and works beautifully.<br /><br />        
          <strong>Tech Stack: </strong> HTML, CSS, Javascript, html2pdf.js, Vercel</p>
        </div>
      
        <div className={styles.devNotes}>
          <h2>Development Notes</h2><br />

          <p>A key challenge in building this app was ensuring that all invoice calculations (subtotal, tax, and total) updated accurately and instantly as the user edited line items. Managing deeply nested state for sender, recipient, and a dynamic list of items required careful state updates to avoid accidental overwrites or stale data.<br /><br />        

          Another important piece was integrating html2pdf.js to reliably convert the dynamic, styled invoice into a downloadable PDF. Handling asynchronous imports and ensuring the PDF output matched the on-screen design took extra fine-tuning.<br /><br />        

          Finally, keeping everything client-side (without a backend) meant focusing on privacy but also required careful handling of form resets, validation, and download feedback so the experience felt complete and smooth even without server-side support.</p>
        </div>
      </div>
      </Layout>
    </>
  );
}
