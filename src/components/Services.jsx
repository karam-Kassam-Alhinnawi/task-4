import { faDna, faHospitalUser, faNotesMedical, faTablets, faWheelchair } from "@fortawesome/free-solid-svg-icons"
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons/faHeartPulse"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"

const Services = () => {
  const servicesOne = [
    {icon: faHeartPulse, name: 'Lorem Ipsum', desc: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius'},
    {icon: faTablets,  name: 'Lorem Ipsum', desc: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius '},
    {icon: faHospitalUser,  name: 'Lorem Ipsum', desc: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius '},
  ];

  const servicesTwo = [
    {icon: faDna,  name: 'Lorem Ipsum', desc: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius'},
    {icon: faWheelchair,  name: 'Lorem Ipsum', desc: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius'},
    {icon: faNotesMedical,  name: 'Lorem Ipsum', desc: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius'},
  ];

  return (
        <Container>
            <div id="services" className="mt-5 text-center">
       <h2 className="text-center">Services</h2> 
       <hr className="mx-auto" style={{width: '6%', border: '3px solid #3fbbc0'}} />
       <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, consequuntur.</p>

       <div className="servicesContainer d-flex justify-content-center align-items-center gap-5">
      {servicesOne.map((service) => (
         <div>
         <FontAwesomeIcon icon={service.icon} color='#3fbbc0' className='shadow rounded-circle p-4' style={{width: '32px', height: '32px'}} />
         <p>{service.name}</p>
         <p>{service.desc}</p>
         </div>
      ))}
      </div>

      <div className="servicesContainer d-flex justify-content-center align-items-center gap-5 mt-5">
      {servicesTwo.map((service) => (
         <div>
         <FontAwesomeIcon icon={service.icon} color='#3fbbc0' className='shadow rounded-circle p-4' style={{width: '32px', height: '32px'}} />
         <p>{service.name}</p>
         <p>{service.desc}</p>
         </div>
      ))}
      </div>

    </div>
        </Container>
  )
}

export default Services