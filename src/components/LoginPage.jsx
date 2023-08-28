import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const [email, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const navigate = useNavigate()
    const value = localStorage.getItem('customerId');


    const { customerDetails } = useSelector(state => state.customerData)
    console.log(customerDetails, 'custmer');

    var id;
    const loginHandler = () => {
        let bool = false
        let myName;
        customerDetails?.map(item => {
            if (item.email === email && item.password === password)
                bool = true
            id = item.contactNumber
            myName = item.userName
            return
        })
        if(bool){
            console.log(myName,'name');
            navigate('/'+id,{state:myName})
        }
        else{
            alert('please sign up first to enjoy services')
        }
        if(checkbox){
            // console.log(id);
            localStorage.setItem('customerId',id)
        }
        else{
            if(value)
            localStorage.removeItem('customerId')
        }
    }
   
    
    return (
        <div className='login_wrapper'>

            <div className='login_container'>
                <div className='email_container'>
                    <input type='email' style={{ width: '100%' }} value={email} placeholder='Email id' onChange={(e) => setEmailId(e.target.value)} />
                </div>
                <br />
                <div className='password_container'>
                    <input type='password' style={{ width: '100%' }} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='login_validator' style={{ paddingBottom: '1rem', borderBottom: '1px solid' }}>
                    <div >

                    <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />Remember me
                    </div>
                    <button onClick={loginHandler} >Sign in</button>
                </div>
                <button style={{ marginTop: '1rem', width: '100%' }} onClick={() => navigate('sign_up')}>Sign Up</button>
            </div>
        </div>
    )
}

export default LoginPage