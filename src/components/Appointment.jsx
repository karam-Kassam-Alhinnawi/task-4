import Button from "./Button"

const Appointment = () => {
  const appointmentInputs = [
    {placeholder: 'Your Name'},
    {placeholder: 'Your Email'},
    {placeholder: 'Your Phone'},
  ];


  return (
        <div className="text-center py-5" style={{marginTop: '72px', background: '#e2ebee'}}>
       <h2>MAKE AN APPOINTMENT</h2>
       <hr className="mx-auto" style={{width: '6%', border: '3px solid #3fbbc0'}} />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, obcaecati!</p>

       <div style={{width: '80%', margin: 'auto'}}>
       <div className="appointment d-flex align-items-center justify-content-evenly mt-4 gap-2">
         {appointmentInputs.map((input) => (
            <input type="text" placeholder={input.placeholder} style={{width: '300px', height: '32px'}} />
         ))}
       </div>

       <div className="appointment d-flex align-items-center justify-content-evenly mt-5 gap-2">
            <input type='date' style={{width: '300px', height: '32px'}} />

            <select name="" id="" style={{width: '300px'}}>
                <option value="option">Option</option>
            </select>

            <select name="" id="" style={{width: '300px'}}>
                <option value="option">Option</option>
            </select>
       </div>

         <div>
         <textarea style={{width: '87%', }} rows={5} className="my-5" placeholder="Message (Optional)"></textarea>
         </div>

       <Button/>
       </div>

       </div>
  )
}

export default Appointment