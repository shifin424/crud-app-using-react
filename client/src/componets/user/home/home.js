import React from 'react'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { removetoken } from '../../../Redux/token/token';
import { useNavigate } from "react-router-dom";
import './home.css'



function Home() {

const Isauth= useSelector((state)=>state.token.token)

let IsUser="Logout"

  const navigate = useNavigate();





const LogoutHandler= () => {
removetoken()
  navigate('/login');
}

useEffect(() => {
  if (Isauth==='') {
  navigate('/login')
  }
},[])

  return (
    <div>

      <header>
      <Navbar className="navbar navbar-inverse ">
  <div className="container-fluid">
    <div className="navbar-header">
      <Nav className="navbar-brand text-white" >CRUD APP</Nav>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <Button>
              <li><span onClick={LogoutHandler} className="glyphicon glyphicon-log-in text-white">{`${IsUser}`}</span></li>
          
        </Button>
    </ul>
  </div>
</Navbar>
      </header>


<section>

<div className="d-flex justify-content-center align-items-center" style={{height:500}}>
<h1 >Welcome to Home page</h1>

</div>

</section>

    </div>
  )
}

export default Home
