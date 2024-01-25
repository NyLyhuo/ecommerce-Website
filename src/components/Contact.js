import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [user, setUser] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
    let Name, value
    const data = (e) =>
    {
        Name = e.target.name;
        value = e.target.value;
        setUser({...user, [Name]: value})
    }
  return (
    <>
        <div className='contact_container'>
            <div className='contact'>
                <h2>#contact us</h2>
                <div className='form'>
                    <form method='POSt'>
                        <input type="text" name='Name' value={user.Name} placeholder='Enter your full name' required autoComplete='off' onChange={data}></input>
                        <input type="email" name='Email' value={user.Email} placeholder='Enter your email' autoComplete='off' onChange={data}></input>
                        <input type="text" name='Subject' value={user.Subject} placeholder='Enter your subject' autoComplete='off' onChange={data}></input>
                        <textarea name="Message" value={user.Message} placeholder='Enter your message' autoComplete='off' onChange={data}></textarea>
                        <button type='submit'>Sent</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact