
import '../styles/texts.css';


const Contact = () => {

  return (
    <>
    <h1 className="title">Contact form</h1>
    <form className='form'>
        <label className='form-text' htmlFor="name">Name</label>
        <input className='form-text' type="text" name="name" id="name" placeholder='Enter your name'/>
        <label className='form-text' htmlFor="email">Email</label>
        <input className='form-text' type="email" name="email" id="email" placeholder='Enter your email'/>
        <label className='form-text' htmlFor="message">Message</label>
        <textarea className='form-text' name="message" id="message" cols="30" rows="10" placeholder='Enter your message'></textarea>
        <input className='form-btn' type="submit" value="Submit"/>
    </form>
    </>


  )
}

export default Contact