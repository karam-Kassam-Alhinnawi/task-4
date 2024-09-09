import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faMobile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TopSection = () => {
  return (
    <div className='d-flex align-items-center justify-content-between mainColor responsive-top-section' style={{paddingInline: '120px', paddingTop: '12px'}}>
        <p className="text-light"><FontAwesomeIcon color='white' style={{marginRight: '6px'}} icon={faClock} />Monday - Saturday, 8AM to 10PM</p>
        <p className="text-light"><FontAwesomeIcon style={{marginRight: '6px'}} icon={faMobile} />Call us now +1 5589 55488 55</p>
    </div>
  )
}

export default TopSection