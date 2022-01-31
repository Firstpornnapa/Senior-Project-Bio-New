import React from 'react'
import '../css/dashboard.css'
import { useState, useEffect } from 'react'
import { Modal, Button, ModalFooter } from 'react-bootstrap'
export default function Dashboard() {

  const [showDetail, setshowDetail] = useState(false);
  const detailCloseStd = () => setshowDetail(false);
  const ShowdetailClose = () => setshowDetail(true);

  const [showDetaileMei, setshowDetaileMei] = useState(false);
  const detailCloseEmi = () => setshowDetaileMei(false);
  const detailEmi = () => setshowDetaileMei(true);

  return (
    <>
      <div>
        <div className="col-9 col-lg-9 col-xl-9 col-mb-9 col-xs-9" >
          <div className="row" style={{ marginTop: '3rem', width: '70rem', marginLeft: '-6rem' }}>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active report-name" aria-current="page" href="#">เบิกใช้</a>
              </li>
            </ul>
            <div className="row">
              <div className="card cardsidebar">
                <div className="card-body">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th className="headname-th" scope="col" width="3%" style={{ minWidth: 110 }}> <span>ORDER ID</span> </th>
                        <th className="headname-th" scope="col" width="5%" style={{ minWidth: 280 }}><span> ชื่อ-นามสกุล</span></th>
                        <th className="headname-th" scope="col" width="3%" style={{ minWidth: 100 }}><span>ชั้นปี</span> </th>
                        <th className="headname-th" scope="col" width="3%" style={{ minWidth: 150 }} />
                        <th className="headname-th" scope="col" width="5%" style={{ minWidth: 200 }} />
                        <th className="headname-th" scope="col" width="5%" style={{ minWidth: 200 }} />
                      </tr>
                    </thead>
                    <tbody style={{ height: '12rem', verticalAlign: 'middle' }}>
                      <tr className="table-name-report ">
                        <th scope="row">1</th>
                        <td>ภวิษย์พร ขันธพร</td>
                        <td><label className="class-room">4</label></td>
                        <td>5 รายการ</td>
                        <td><button type="button" className="btn btn-report " onClick={ShowdetailClose}><i aria-hidden="true" className="fas fa-search-plus btn-report" style={{ fontSize: 15 }} /><label className="mx-2 btn-report">ดูรายละเอียด</label> </button></td>
                        <td><i className="fas fa-check iconcheck-name" /><label className=" iconcheck-name mx-2">อนุมัติ</label> </td>
                      </tr>
                      <tr className="table-name-report ">
                        <th scope="row">2</th>
                        <td>พรนภา โกลากุล</td>
                        <td><label className="class-room">1</label> </td>
                        <td>6 รายการ</td>
                        <td><button type="button" className="btn btn-report "><i aria-hidden="true" className="fas fa-search-plus btn-report" style={{ fontSize: 15 }} /><label className="mx-2 btn-report">ดูรายละเอียด</label> </button></td>
                        <td><i className="fas fa-check iconcheck-name" /><label className=" iconcheck-name mx-2">อนุมัติ</label> </td>
                      </tr>
                      <tr className="table-name-report ">
                        <th scope="row">3</th>
                        <td>ปัญญา สุขเสมอ</td>
                        <td><label className="class-room">1</label> </td>
                        <td>2 รายการ</td>
                        <td><button type="button" className="btn btn-report "><i aria-hidden="true" className="fas fa-search-plus btn-report" style={{ fontSize: 15 }} /><label className="mx-2 btn-report">ดูรายละเอียด</label> </button></td>
                        <td><i className="fas fa-check iconcheck-name" /><label className=" iconcheck-name mx-2">อนุมัติ</label> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: '1rem', width: '70rem', marginLeft: '-6rem' }}>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active report-name" aria-current="page" href="#">ยืมอุปกรณ์</a>
              </li>
            </ul>
            <div className="row">
              <div className="card ">
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="headname-th" scope="col" /* width="3%"  */ style={{ minWidth: 110 }}> <span>ORDER ID</span> </th>
                        <th className="headname-th" scope="col" /* width="5%" */ style={{ minWidth: 280 }}><span> ชื่อ-นามสกุล</span></th>
                        <th className="headname-th" scope="col" /* width="3%" */ style={{ minWidth: 100 }}><span>ชั้นปี</span> </th>
                        <th className="headname-th" scope="col" /* width="3%" */ style={{ minWidth: 150 }} />
                        <th className="headname-th" scope="col" /* width="5%" */ style={{ minWidth: 200 }} />
                        <th className="headname-th" scope="col" /* width="5%" */ style={{ minWidth: 200 }} />
                      </tr>
                    </thead>
                    <tbody style={{ height: '12rem', verticalAlign: 'middle' }}>
                      <tr className="table-name-report ">
                        <th scope="row">1</th>
                        <td>ภวิษย์พร ขันธพร</td>
                        <td><label className="class-room">4</label></td>
                        <td>2 รายการ</td>
                        <td><button type="button" className="btn btn-report " onClick={detailEmi}><i aria-hidden="true" className="fas fa-search-plus btn-report" style={{ fontSize: 15 }} /><label className="mx-2 btn-report">ดูรายละเอียด</label> </button></td>
                        <td><i className="fas fa-check iconcheck-name" /><label className=" iconcheck-name mx-2">อนุมัติ</label> </td>
                      </tr>
                      <tr className="table-name-report ">
                        <th scope="row">2</th>
                        <td>พรนภา โกลากุล</td>
                        <td><label className="class-room">1</label> </td>
                        <td>8 รายการ</td>
                        <td><button type="button" className="btn btn-report " onClick={detailEmi}><i aria-hidden="true" className="fas fa-search-plus btn-report" style={{ fontSize: 15 }} /><label className="mx-2 btn-report">ดูรายละเอียด</label> </button></td>
                        <td><i className="fas fa-check iconcheck-name" /><label className=" iconcheck-name mx-2">อนุมัติ</label> </td>
                      </tr>
                      <tr className="table-name-report ">
                        <th scope="row">3</th>
                        <td>ปัญญา สุขเสมอ</td>
                        <td><label className="class-room">1</label> </td>
                        <td>10 รายการ</td>
                        <td><button type="button" className="btn btn-report " onClick={detailEmi}><i aria-hidden="true" className="fas fa-search-plus btn-report" style={{ fontSize: 15 }} /><label className="mx-2 btn-report">ดูรายละเอียด</label> </button></td>
                        <td><i className="fas fa-check iconcheck-name" /><label className=" iconcheck-name mx-2">อนุมัติ</label> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showDetail}
        onHide={detailCloseStd}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>ดูรายละเอียด : เบิกใช้สารเคมี
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">รายการ</th>
                <th scope="col">จำนวน</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"> Acarbose</th>
                <td>2 mL</td>

              </tr>
              <tr>
                <th scope="row"> Acetaminophe</th>
                <td>1 mL</td>

              </tr>
              <tr>
                <th scope="row"> Acetic</th>
                <td>2 g</td>

              </tr>
            </tbody>
          </table>
          <div className='row'>
            <div className='col-6' style={{ textAlign: 'center' }} >
              <i className="fas fa-check" style={{ color: '#41B949' }} />
              <label className="mx-2" style={{ color: '#41B949' }}>อนุมัติ : โดย ดร.วันรดาย์ แพงสุข </label>
            </div>
            <div className='col-6' style={{ textAlign: 'center' }}>
              <label>เวลาเบิก : 22/11/2021
                16.30 น.
              </label>
            </div>
          </div>
        </Modal.Body>

      </Modal>

      <Modal
        show={showDetaileMei}
        onHide={detailCloseEmi}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>ดูรายละเอียด : ยืมอุปกรณ์
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">รายการ</th>
                <th scope="col">ขนาด</th>
                <th scope="col">จำนวน</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"> Test Tube</th>
                <td>50 mL</td>
                <td>4 หลอด</td>

              </tr>
              <tr>
                <th scope="row">Glass Rod</th>
                <td>250 mL</td>
                <td>4 แท่ง</td>

              </tr>
              <tr>
                <th scope="row">Dropper</th>
                <td>20 mL</td>
                <td>2 หลอด</td>

              </tr>
            </tbody>
          </table>
          <div className='row'>
            <div className='col-4' style={{ textAlign: 'start' }} >
              {/* <i className="fas fa-check" style={{ color: '#41B949' }} /> */}
              <label className="mx-2" style={{ color: '#41B949' }}>อนุมัติ : โดย ดร.วันรดาย์ แพงสุข </label>
            </div>
            <div className='col-4'>
              <label>เวลาเบิก : 22/11/2021
                16.30 น.
              </label>
            </div>
            <div className='col-4' >
              <label>เวลาคืน : 29/11/2021
                16.30 น.
              </label>
            </div>
          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}
