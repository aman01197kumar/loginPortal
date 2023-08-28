import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { removeCustomerDetails } from '../store/loginStore';

function NavPage() {
    const {contactNumber} = useParams()
    console.log(contactNumber,'id');
    const location = useLocation()
    const name = location.state
    const navigate = useNavigate()
    const value = localStorage.getItem('customerId');
    const dispatch = useDispatch();
    const signOutHandler=()=>{
      localStorage.clear()
      navigate('/')
    }
    const {customerDetails} = useSelector(state=>state.customerData)
    console.log(customerDetails,'cs');
    const deleteAccountHandler=()=>{
      dispatch(removeCustomerDetails(contactNumber))
      navigate('/')
    }
  return (
    <div>
      <div className="Navpage-flex-container">
        <button onClick={signOutHandler}>Sign out</button>
        <button onClick={deleteAccountHandler}>Delete Account</button>
      </div>
      <div className='Navpage-desc'>Welcome &nbsp;<span style={{fontWeight:'600'}}>{name}</span> </div>
    </div>
  )
}

export default NavPage