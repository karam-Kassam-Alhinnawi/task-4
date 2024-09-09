import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ScrollTop = () => {

  const handleScrollTop = () => {
     window.scrollTo({
        top: 0,
     })
  }

  return (
    <div style={{width: '40px', height: '40px', background: '#3fbbc0', right: '10px', bottom: '10px'}} 
    
    className={`text-center pt-2 position-fixed text-light rounded`} onClick={handleScrollTop}><FontAwesomeIcon icon={faArrowUp} /></div>
  )
}

export default ScrollTop