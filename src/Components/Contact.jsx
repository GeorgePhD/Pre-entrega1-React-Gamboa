import { useState } from 'react';
import '../styles/texts.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [orderId, setOrderId] = useState('');

  const db = getFirestore();
  const ordersCollection = collection(db, 'orders');

  const handleSubmit = async(e) => {
    e.preventDefault();

    const order = {
      name,
      email,
      message
    };
    
    console.log('sent')

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    console.log(name, email);

    
  

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }

    console.log(name, email, message);
};
  

  return (
    <>
    <h1 className="title">Contact form</h1>
    <form className='form' onSubmit={handleSubmit}>
        <label className='form-text' htmlFor="name">Name</label>
        <input className='form-text' type="text" name="name" id="name" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name}/>
        <label className='form-text' htmlFor="email">Email</label>
        <input className='form-text' type="email" name="email" id="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <label className='form-text' htmlFor="message">Message</label>
        <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='form-text' name="message" id="message" cols="30" rows="10" placeholder='Enter your message'></textarea>
        <input className='form-btn' type="submit" value="Submit"/>
    </form>
    <p>{orderId}</p>
    </>


  )
}

export default Contact