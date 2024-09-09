import { useState } from 'react';
import { Col, Container, Row, ListGroup } from 'react-bootstrap';

import img1 from '../assets/img/departments-1.jpg';
import img2 from '../assets/img/departments-2.jpg';
import img3 from '../assets/img/departments-3.jpg';
import img4 from '../assets/img/departments-4.jpg';
import img5 from '../assets/img/departments-5.jpg';

const departments = [
    {
        name: 'Cardiology',
        text: 'error voluptatem libero optio mollitia quae, repellat nobis expedita amet di unde ex dolor accusantium  dolore sequi in neque eligenassumenda? Lorem ipsum dolor sit ame Cupiditate magni',
        image: img1,
        desc: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit',
      },
    {
        name: 'Neurology',
        text: 'adipisicing elitr sit amet, mollitia quae.',
        image: img2,
        desc: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit',
      },
    {
      name: 'Hepatology',
      text: 'sequi in neque eligendi unde ex dolor accusantium assumenda.',
      image: img3,
      desc: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit',
    },
    {
      name: 'Pediatrics',
      text: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit',
      image: img4,
      desc: 'nobis expedita amet dolore sequi in neque eligendi unde ex dolo',
    },
    {
      name: 'Ophthalmologists',
      text: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit',
      image: img5,
      desc: 'consectetur adipisicing elit. Cupiditate magni mollitia quae.',
    },
  ];
  

const Departments = () => { 
  const [activeDepartment, setactiveDepartment] = useState(departments[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectedDepartment = (department, Departmentindex) => {
    setactiveDepartment(department);
    setSelectedIndex(Departmentindex);
  };

  return (
    <Container className="my-5" id="departments">
      <h2 className="text-center">Departments</h2> 
       <hr className="mx-auto" style={{width: '6%', border: '3px solid #3fbbc0'}} />
       <p className="mb-5 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, consequuntur.</p>
      <Row className="my-5">
        <Col lg={3} className="mb-4 mb-lg-0">
          <ListGroup className=" bg-none position-relative w-100 border-0"style={{maxHeight: '200px',borderRight: '2px solid #eee'}}>

            {departments.map((department, index) => (
              <ListGroup.Item
              style={{cursor: 'pointer', border: 'none'}}
              className='h6 bg-transparent px-0 py-2'
              onClick={() => handleSelectedDepartment(department, index)}
              >
                {department.name}
              </ListGroup.Item>
            ))}

            <div className="position-absolute top-0 end-0 h-100" style={{width: '2px',background: '#ccc',}}></div>

          </ListGroup>

        </Col>


        <Col lg={9}>
          
          <Row className="d-flex">
            <Col lg={4} className="mx-auto text-center order-lg-1">
              <div className=" d-lg-none d-block"></div>
              <img src={activeDepartment.image} className="img-fluid"/>

            </Col>


            {/* The main images, title, desc */}
            <Col lg={7} className="order-lg-0 h-75">
              <h2>{activeDepartment.name}</h2>
              <p>{activeDepartment.desc}</p>
              <p>{activeDepartment.text}</p>
            </Col>

          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Departments;