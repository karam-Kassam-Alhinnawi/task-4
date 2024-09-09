import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  const faqs = [
    {title: 'Accordion Item #1', eventKey: 0, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '},
    {title: 'Accordion Item #2', eventKey: 1, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '},
    {title: 'Accordion Item #3', eventKey: 2, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '},
    {title: 'Accordion Item #4', eventKey: 3, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '},
    {title: 'Accordion Item #5', eventKey: 4, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '}
  ]

  return (
    <div className="text-center py-5" style={{marginTop: '72px', background: '#e2ebee'}}>
    <h2>Frequently Asked Questions</h2>
    <hr className="mx-auto" style={{width: '6%', border: '3px solid #3fbbc0'}} />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, obcaecati!</p>


    <div className='mt-5'>
    <Accordion defaultActiveKey="0">
      

     {faqs.map((faq) => (
        <Accordion.Item eventKey={faq.eventKey} className='accordian m-auto' style={{width: '60%'}} >
        <Accordion.Header>{faq.title}</Accordion.Header>
        <Accordion.Body>
           {faq.body}
        </Accordion.Body>
      </Accordion.Item>
     ))}


    </Accordion>

    </div>

    </div>
  )
}

export default FAQ