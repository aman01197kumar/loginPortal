import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const [email, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const navigate = useNavigate()

    const { customerDetails } = useSelector(state => state.customerData)
    console.log(customerDetails, 'custmer');

    const loginHandler = () => {
        let bool = false
        customerDetails?.map(item => {
            if (item.email === email && item.password === password)
                bool = true
            return
        })
        if(bool){
            alert('navigate to the next page')
        }
        else{
            alert('please sign up first to enjoy services')
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
                    <div onClick={() => checkbox ? setCheckbox(false) : setCheckbox(true)}>

                        <input type='checkbox' />Remember me
                    </div>
                    <button onClick={loginHandler} >Sign in</button>
                </div>
                <button style={{ marginTop: '1rem', width: '100%' }} onClick={() => navigate('sign_up')}>Sign Up</button>
            </div>
        </div>
    )
}

export default LoginPage