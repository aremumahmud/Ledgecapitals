import "../css/contact.css";
import jane from '../assets/update.jpg'

import {FaMessage} from 'react-icons/fa6'

import { useEffect } from 'react';
import SendEmail from "../utils/sendmail";

function Contact() {

  let form = useRef()
  let handleSubmit = (event)=>{
      event.preventDefault();
      setOnn(true)
      const formData = new FormData(form.current);
      const jsonData = {};
  
      formData.forEach((value, key) => {
        jsonData[key] = value;
      });
//window.alert(JSON.stringify(jsonData))
      SendEmail(jsonData).then(res=>{

          if(res.error) return alert('an unexpected error has occured')
          window.alert('Message sent successfully')
          location.reload()
      }).catch(err=>{
          alert('an unexpected error has occured')
          setOnn(false)
      })
  }
  
  useEffect(() => {
    // Configure the scroll reveal animation
 
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="profession client stat">
        <p className="client_title contact_title up">Contact Us.</p>
        <p className="up">Feel free to send a message through the contact box. We will send a reply with a proffesional within 24 hours</p>
      </div>
      <br />
      <div className="form">
        <form ref={form} onSubmit={handleSubmit} method="post">
          <input name="Full_name" className="up" type="text" placeholder="Full Name" required/>
          <input name="Email_Adress" className="up" type="email" placeholder="Email address" required/>
          <input name="Phone_Number" className="up" type="tel" placeholder="Phone number" required/>
          <input name="Location" className="up" type="text" placeholder="Home address / Location" required />
          <input name="Service_Required" className="up" type="text" placeholder="Service Required" required />
          <input type="hidden" name="designated_email" value={'pointledge1@gmail.com'} />
          <textarea  className="up"  name="Message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
          <button className="up"  type="submit">Send me a message <FaMessage /></button>
        </form> 
        <div className="image1">
        <div className="image up">
          <img src={jane} alt="" />
         
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
