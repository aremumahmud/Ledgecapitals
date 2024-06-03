import '../css/about.css'
import img from '../assets/a1.jpg'

function About (){
    return (
        <div className="about" style={{flexDirection:'row'}}>
<div className="text up">
    <p>About us</p>
    <p>At Ledge Point Finance, we bring 25 years of experience in providing tailored loan and funding solutions. Our mission is to empower businesses to achieve their goals through expert guidance and innovative financial products.
<br /><br />
    We offer a range of services to support your business at every stage, from securing loans to strategic financial advice. Trust Ledge Point Finance to be your partner in financial success. Contact us today to get started!
    </p>
</div>
<div className="image up">
    <div className="wrap_img">
         <img src={img} alt="" />
    </div>
   
</div>
        </div>
    )
}

export default About