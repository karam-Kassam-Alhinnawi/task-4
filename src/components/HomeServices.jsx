import { faCapsules, faDna, faHeartPulse, faSyringe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"

const HomeServices = () => {
  const services = [
    {icon: faHeartPulse , serviceName: 'Lorem Ipsum', serviceDesc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'},
    {icon: faCapsules, serviceName: 'Sed ut perspici', serviceDesc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'},
    {icon: faSyringe, serviceName: 'Magni Dolores', serviceDesc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'},
    {icon: faDna, serviceName: 'Nemo Enim', serviceDesc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'},
  ]
  return (
    <Container className="mt-5">
      <Row className="row-div">
      {services.map((service) => (
            <Col style={{height: '320px'}} className="col-div mx-4 shadow d-flex flex-column justify-content-center gap-2 align-items-start px-5">
            <FontAwesomeIcon icon={service.icon} className="font-icon" color="#3fbbc0" size="3x"/>
            <p className="fw-bold h5 mt-3">{service.serviceName}</p>
            <p >{service.serviceDesc}</p>
            </Col>

))}
</Row>
</Container>


  )
}

export default HomeServices