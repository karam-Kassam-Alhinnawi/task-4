import { faLocationPin, faMailBulk, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

const contactInfo = [
    {icon: faPhoneAlt, name: 'Call Us', desc: '+1 5589 55488 55'},
    {icon: faMailBulk, name: 'Email Us', desc: 'info@example.com'},
]

const Contact = () => {
  return (
      <div>
        <h2 className="text-center mt-5" id="contact">Contact Us</h2> 
       <hr className="mx-auto" style={{width: '6%', border: '3px solid #3fbbc0'}} />
       <p className="mb-5 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, consequuntur.</p>

       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.349645838469!2d-74.00687799319101!3d40.710318816346174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2s!4v1725912708796!5m2!1sen!2s" width="600" height="450" style={{border: '0'}}  
       className="w-100"
       allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
      <Container>

     <Row>
        <Col>
        <div className="mt-5">
    <div className="shadow p-2 text-center">
        <FontAwesomeIcon color="#3fbbc0" icon={faLocationPin} style={{border: '2px solid'}} className="p-4 rounded-circle" />
        <p className="h3">Address</p>
        <p>A108 Adam Street, New York, NY 535022</p>
    </div>

    <div className="d-flex align-items-center mt-5 gap-4">
        {contactInfo.map((info) => (
            <div className="shadow w-50 p-2 text-center">
            <FontAwesomeIcon color="#3fbbc0" icon={info.icon} style={{border: '2px solid'}} className="p-4 rounded-circle" />
            <p className="h3">{info.name}</p>
            <p>{info.desc}</p>
        </div>
        ))}
    </div>
</div>
</Col>

<Col>
<div className="mt-5">
    <div className="shadow p-2 text-center px-4">
        <div className="d-flex align-items-center justify-content-center gap-5">
        <input type="text" placeholder="Your Name" className="w-50" />
        <input type="text" placeholder="Your Name" className="w-50" />
        </div>
        <div>
            <input type="text" placeholder="Subject" className="w-100 mt-5"/>
            <textarea rows={7} placeholder="Message" className="w-100 mt-5"></textarea>
            <button className="px-4 py-2 text-light border-0 mt-2 rounded" style={{background: '#3fbbc0'}}>Send Message</button>
        </div>
    </div>
</div>
        </Col>
     </Row>


</Container>

     </div>
  )
}

export default Contact