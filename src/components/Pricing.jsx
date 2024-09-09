import { Button, Col, Container, Row } from 'react-bootstrap'

const Pricing = () => {

    const pricing = [
        {
            id: 1,
            title: 'Free',
            price: '$0',
            time: '/ month' ,
            descriptions : [
                {
                    title : 'Aida dere',                
                },
                {
                    title : 'Nec feugiat nisl',
                },
                {
                    title : 'Nulla at volutpat dola',
                },
                {
                    title : 'Pharetra massa',
                    lineThrough : true
                },
                {
                    title : 'Massa ultricies mi',
                    lineThrough : true
                },
            ],
        },
        {
            id: 2,
            title: 'Business',
            price: '$19',
            time: '/ month' ,
            descriptions : [
                {
                    title : 'Aida dere',
                },
                {
                    title : 'Nec feugiat nisl',
                },
                {
                    title : 'Nulla at volutpat dola',
                },
                {
                    title : 'Pharetra massa',
                    lineThrough : true
                },
                {
                    title : 'Massa ultricies mi',
                    lineThrough : true
                },
            ],
            Checked : true
        },
        {
            id: 3,
            title: 'Developer',
            price: '$29',
            time: '/ month' ,
            descriptions : [
                {
                    title : 'Aida dere',
                },
                {
                    title : 'Nec feugiat nisl',
                },
                {
                    title : 'Nulla at volutpat dola',
                },
                {
                    title : 'Pharetra massa',
                },
                {
                    title : 'Massa ultricies mi',
                },
            ],
        },
        {
            id: 4,
            title: 'Ultimate',
            price: '$49',
            time: '/ month' ,
            descriptions : [
                {
                    title : 'Aida dere',
                },
                {
                    title : 'Nec feugiat nisl',
                },
                {
                    title : 'Nulla at volutpat dola',
                },
                {
                    title : 'Pharetra massa',
                },
                {
                    title : 'Massa ultricies mi',
                },
            ],
        },
    ]
    
  return (
    <Container>
        <h2 className="text-center">Pricing</h2> 
       <hr className="mx-auto" style={{width: '6%', border: '3px solid #3fbbc0'}} />
       <p className="mb-5 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, consequuntur.</p>
       <Row>
       {pricing.map(({price, title, time, Checked, descriptions}) => (
           <Col>
           
            <div className='pricingCard text-center rounded-2 shadow mt-2' style={{width: '300px'}}>
            <div style={{background: Checked ? '#3fbbc0' : '#d9d9d9'}}>
                <p className={`${Checked ? 'text-light' : ''} rounded-1 py-3 fw-bold`} >{title}</p>
            </div>
            <div>
                <p className='mb-4'><strong className='fs-3'>{price} </strong> {time} </p>
            </div>
            <div className='mb-5'>
                <ul className='list-unstyled'>
                {descriptions.map(({lineThrough, title}) => (
                 <li style={{textDecoration: lineThrough ? 'line-through' : 'none'}}>
                    {title}
                 </li>
                ))}

                </ul>
            </div>
            <div className='p-2' style={{background: '#d9d9d9'}}>
                <Button className='px-4 py-2 border-0' style={{background: '#3fbbc0'}}>Buy Now</Button>
            </div>
        </div>
        </Col>

        ))}
       </Row>
    </Container>
  )
}

export default Pricing