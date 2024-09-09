import { Card } from 'react-bootstrap';
import docImg1 from '../assets/img/doctors/doctors-1.jpg';
import docImg2 from '../assets/img/doctors/doctors-2.jpg';
import docImg3 from '../assets/img/doctors/doctors-3.jpg';
import docImg4 from '../assets/img/doctors/doctors-4.jpg';

const Doctors = () => {
  const doctors = [
    {img: docImg1, name: 'Walter White', desc: 'Cheif Medical Officer'},
    {img: docImg2, name: 'Sarah Jhonson', desc: 'Anesthesiologist'},
    {img: docImg3, name: 'William Anderson', desc: 'Cardiology'},
    {img: docImg4, name: 'Amanda Jepson', desc: 'Neurosurgeon'},
  ]
  return (
    <div>
          <div id='doctors' className="text-center py-5" style={{marginTop: '72px', background: '#e2ebee'}}>
            <h2>Doctors</h2>
            <hr className="mx-auto" style={{width: '6%', border: '3px solid #3fbbc0'}} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, obcaecati!</p>

          <div className='doctors d-flex justify-content-center align-items-center gap-4 mt-5'>
            {doctors.map((doctors) => (
              
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={doctors.img} />
      <Card.Body className='d-flex flex-column align-items-start'>
        <Card.Title>{doctors.name}</Card.Title>
        <Card.Text>
          {doctors.desc}
        </Card.Text>
      </Card.Body>
    </Card>
            
          ))}
          </div>
          </div>
    </div>
  )
}

export default Doctors