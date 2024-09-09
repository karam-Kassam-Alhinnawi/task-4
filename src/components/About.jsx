import { Container } from "react-bootstrap";
import aboutImg from '../assets/img/about.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faPlay } from "@fortawesome/free-solid-svg-icons";

const aboutInfo =
    [
        {text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {text: 'Duis aute irure dolor in reprehenderit in voluptate velit.'},
        {text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'},
    ]

const About = () => {
  return (
    <Container>
        <div id="about" className="mt-5 mx-auto">
        <h2 className="text-center">About Us</h2>
        <hr className="mx-auto" style={{width: '6%', border: '3px solid #3fbbc0'}} />
        <p className="text-center">Lorem ipsum dolor, sit amet. Sint nulla earum ea aut nam itaque quia voluptatem error ducimus quae?</p>
        
        <div className="about d-flex align-items-center position-relative">

           <div className="about-img h-100 w-100">
           <img src={aboutImg} className="h-100 w-100" alt="" />
           <FontAwesomeIcon icon={faPlay} className='about-icon' />
           </div>

           <div style={{marginLeft: '32px'}}>
            <h2 className="mt-4">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, cupiditate itaque? Optio, quia excepturi fugiat modi, beatae suscipit autem consequuntur laborum sed ullam quae</p>
            {aboutInfo.map((info) => (
                <p ><FontAwesomeIcon icon={faCheckDouble} color="#3fbbc0" style={{marginRight: '12px'}}/>{info.text}</p>
            ))}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quaerat in corrupti possimus ipsam minima nisi? Fugit nam deleniti voluptas, suscipit rerum laudantium dicta maiores dolore vel, incidunt facere. Dolorem.</p>
           </div>
        </div>

    </div>
    </Container>
  )
}

export default About