import React from 'react'
import pic1 from '../img/connection.png'
import pic2 from '../img/user2.png'
import '../css/Sidebar.css'
import { Link } from 'react-router-dom'

export default function SideBar() {

  function logout(){ 
    localStorage.removeItem('user')
    window.location.reload(); 
}
    return (
 /*  <div  className="container-fluid"> */
  <div className="col-12 col-xl-12 col-lg-12 col-mb-12 col-sm-12">
    <div className="row">
      <div className="col-2 col-xl-2 col-lg-2 col-mb-2 col-sm-2 bgback" >
        <div className="row  mt-3  ">
          <div className="col-2 col-xl-2 col-lg-2 col-mb-2 col-sm-2 ">
            <div className="logobio">
              <img className="logo-bioimg" src={pic1} alt='Pic1' />
            </div>
          </div>
          <div className="col-1 col-xl-1 col-lg-1 col-mb-1 col-sm-1">
            <h4 className="beetwee"> | </h4>
          </div>
          <div className="col-9 col-xl-9 col-lg-9 col-mb-9 col-sm-9 ">
            <h4 className="welcome mt-1"> BioRMUTT</h4>
          </div>
        </div>
        <div className="imguser">
          <img src={pic2} className="profile_img" alt='Pic2' />
        </div>
        <div className="admin">
          <h5 className="admin-user">เจ้าหน้าที่</h5>
        </div>
        <div className="row">
          <div className="card cardsidebar">
            <div className="card-body card-template">
              <div className="row">
                <a className="mt-2 mb-3"><Link to="/Dashboard" ><i className="fas fa-clipboard-list mx-1" /><span>
                    Dashboard</span></Link></a>
                <hr className="hrbee" />
              </div>
              <div className="row">
                <a className="mb-3"><Link to="/MIE" ><i className="fas fa-address-card mx-1" /><span>
                    จัดการคลังวัสดุและอุปกรณ์</span></Link></a>
                <hr className="hrbee" />
              </div>
              <div className="row">
                <a  className="mb-3"><Link to="/Bor" ><i className="fas fa-address-card mx-1" /><span>
                    รายการเบิกใช้วัสดุ</span></Link></a>
                <hr className="hrbee" />
              </div>
              <div className="row">
                <a  className="mb-3"><Link to="/DataST"><i className="far fa-address-book mx-1" /><span>
                    ค้นหาข้อมูลอาจารย์และนักศึกษา</span></Link></a>
                <hr className="hrbee" />
              </div>
              <div className="row">
                <a className="mb-3"><Link to="/Report" ><i className="fas fa-file-alt mx-1" /><span> ออกรายงาน</span></Link></a>
                <hr className="hrbee" />
              </div>
              <div className="row">
                <a className="mb-3"> <Link to="/Importfile" > <i className="fas fa-file-upload mx-1" /><span> เพิ่มข้อมูลไฟล์
                    csv
                    ลงฐานข้อมูล</span></Link></a>
                <hr className="hrbee" />
              </div>
              <div className="row">
                <a className="logout mt-4" onClick={logout}>  ออกจากระบบ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    )
    
}

