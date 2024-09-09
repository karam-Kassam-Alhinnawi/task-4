import { faHospital } from "@fortawesome/free-regular-svg-icons"
import { faAward, faFlask, faUserDoctor } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"

const Stats = () => {
  const stats = [
    {icon: faUserDoctor, title: '25', desc: 'Doctors'},
    {icon: faHospital, title: '15', desc: 'Departments'},
    {icon: faFlask, title: '8', desc: 'Research Labs'},
    {icon: faAward, title: '150', desc: 'Awards'}
  ]
  return (
     <Container className="mt-5">
     <Row className="row-div">
     {stats.map((stat) => (
           <Col style={{height: '120px'}} className="col-div mx-4 shadow d-flex gap-4 align-items-center px-5">
           <FontAwesomeIcon icon={stat.icon} className="font-icon" color="#3fbbc0" size="3x"/>
           <div>
           <p className="fw-bolder h3 mt-3">{stat.title}</p>
           <p >{stat.desc}</p>
           </div>
           </Col>

))}
</Row>
</Container>
  )
}

export default Stats