import { Container } from 'react-bootstrap'
import featuresImg from '../assets/img/features.jpg'
import { faHandHoldingMedical, faLungs, faMedkit, faRodSnake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Features = () => {
  const features = [
    {featureIcon: faHandHoldingMedical, featureName: 'Lorem Ipsum', featureDesc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'},
    {featureIcon: faMedkit, featureName: 'Lorem Ipsum', featureDesc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'},
    {featureIcon: faRodSnake, featureName: 'Lorem Ipsum', featureDesc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'},
    {featureIcon: faLungs, featureName: 'Lorem Ipsum', featureDesc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'},
  ]
  return (
    <Container>
      <div className="features d-flex justify-content-center align-items-center gap-5 mx-2" style={{marginTop: '64px'}}>
      <img src={featuresImg} style={{width: '50%', height: '700px'}} alt="" />

      <div>
         <h2 className='h1'>Enim quis est voluptatibus aliquid consequatur fugiat</h2>
         <hr style={{width: '10%', border: '3px solid #3fbbc0'}} />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate quidem ipsum totam amet rem error. Perferendis deleniti harum nobis. Ab voluptatibus optio, ducimus nemo necessitatibus eaque amet aut possimus!</p>        

      <div className='d-flex flex-column gap-4 mt-5'>
         {features.map((feature) => (

        <div className='d-flex align-items-top '>
          <FontAwesomeIcon icon={feature.featureIcon} color='#3fbbc0' className='shadow' style={{width: '32px', height: '32px', padding: '12px'}} />
          <div style={{marginLeft: '32px'}}>
          <p className='h6 text-dark'>{feature.featureName}</p>
          <p>{feature.featureDesc}</p>
          </div>
          </div>

        ))}
      </div>

      </div>


    </div>
    </Container>
  )
}

export default Features