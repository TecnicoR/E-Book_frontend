import React, { useEffect, useState } from 'react'
import './myprofile.css'
import MyProfileNav from './components/MyProfileNav'
import { Route } from 'react-router-dom'
import { getAllCountries } from '../../services/CountryService'


function MyProfile() {
  const tabs=["Settings","Change Password","My Orders","Logout"]
  const[selectedTab,setSelectedTab]=useState()
useEffect(()=>{
 async function init(){
    let countries= await getAllCountries();
    if(countries){
      console.log('c',countries)
    }
  }
  init()
},[])
  return (
    <div className='my-profile'>
    <div style={{display:'flex'}}>
{tabs?.map((eachTab)=><div onClick={()=>setSelectedTab(eachTab)} >{eachTab}</div>)}
    </div>

    <div>

    </div>
    </div>
  )
}

export default MyProfile