import React, { useState } from 'react'
import '../css/Login.css'
import pic1 from '../img/Login.png'
import pic2 from '../img/connection.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");

 

  const Login = () => {
    
    // console.log(useremail,userpassword)
    axios.post("http://localhost:3307/login", {
      email: useremail,
      password: userpassword,
    })
      .then(function (response) {
        // console.log(response);
        if (response.data.length > 0) {
          localStorage.setItem('user',JSON.stringify(response.data[0]))
          // console.log(response.data)
          window.location.reload()
        }
      })
      .catch(function (error) {
        console.log(error);
      });

     // toast("Login Successful");
  }
  return (
    <div className="cardlogin shadow-lg " >
      <div className="card" style={{ maxWidth: 950, }}>
        <div className="row g-0">
          <div className="col-xl-7 col-lg-7 col-mb-7 col-sm-7  col-12">
            <img src={pic1} className="img-fluid" alt="pic1" />
          </div>
          <div className="col-xl-5 col-lg-5 col-mb-5 col-sm-5 col-12">
            <div className="card-body">
              <div className="headbiormutt" style={{ marginTop: 30 }}>
                <div className=" row">
                  <div className="col-2 col-xl-2 col-lg-2 col-mb-2 col-sm-2 ">
                    <img src={pic2} alt='pic' style={{ width: 35 }} />
                  </div>
            {/*       <div className="col-1 col-xl-1 col-lg-1 col-mb-1 col-sm-1">
                    <h4 className="beetwee mt-1">| </h4>
                  </div> */}
                  <div className="col-9 col-xl-9 col-lg-9 col-mb-9 col-sm-9">
                    <h3 className="welcome">| Welcome BioRMUTT</h3>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '3rem' }}>
                <div className="form-group " style={{ marginBottom: 34 }}>
                  <div className="inputWithIcon">
                    <i className="fas fa-user-circle " aria-hidden="true" />
                    <input className="form-control adminfont input-height" type="text" placeholder="ชื่อผู้ใช้งาน" name="adminUsername"
                      onChange={(event) => { setuseremail(event.target.value); }} style={{ borderRadius: 15 }} />
                  </div>
                </div>
                <div className="inputWithIcon">
                  <i className="fas fa-lock " />
                  <input className="form-control adminfont input-height" type="password" placeholder="รหัสผ่าน" name="adminPassword" onChange={(event) => {
                    setuserpassword(event.target.value);
                  }} style={{ borderRadius: 15 }} />
                </div>
              </div>
              <div className="form-group  " style={{ textAlign: 'center', marginTop: 35 }}>
                <button type="button" className="btn btn-outline-secondary shadow-sm adminfont" onClick={Login}>เข้าสู่ระบบ</button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
