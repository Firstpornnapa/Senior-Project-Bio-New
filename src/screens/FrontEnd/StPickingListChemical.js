import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import moment from 'moment'
import { Modal, Button, ModalFooter } from 'react-bootstrap'

const PickingListChemical = () => {


  const [detailPL, setDetailPL] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const closeShowDetail = () => setShowDetail(false);
  const showDetailPLChemical = (id) => {
    axios.get(`http://localhost:3307/detailPLChemical/` + id).then((response) => {
      setDetailPL(response.data);
    }
    )
    setShowDetail(true)
  };

  const [pickingList, setPickingList] = useState([]);
  const getPickingListChemical = () => {
    axios.get("http://localhost:3307/pickingListChemical").then((response) => {
      setPickingList(response.data);
    })
  }
  useEffect(() => {
    getPickingListChemical();
  }, []);

  return (
    <div className="container">
      <div
        className="card"
        style={{
          marginTop: "5rem",
          borderRadius: 15,
          boxShadow: "0 30px 50px rgb(0 0 0 / 20%)",
        }}
      >
        <div className="card-body">
          <h3>รายการเบิกสารเคมี</h3>
          <div className="table-responsive">
            <table className="table bg-white  table-bordered ">
              <thead className="bg-dark text-light">
                <tr>
                  <th width="2%" style={{ minWidth: 100 }}>
                    ORDER ID
                  </th>
                  <th width="20%" style={{ minWidth: 170 }}>
                    เพื่อ
                  </th>
                  <th width="8%" style={{ minWidth: 100 }}>
                    จำนวน
                  </th>
                  <th width="10%" style={{ minWidth: 180 }} />
                  <th width="20%" style={{ minWidth: 250 }}>
                    รายชื่ออาจารย์ที่อนุมัติ
                  </th>
                  <th width="10%" style={{ minWidth: 180 }}>เวลาที่เบิก</th>
                  <th width="15%" style={{ minWidth: 180 }}>สถานะ</th>
                </tr>
              </thead>
              <tbody style={{ verticalAlign: "middle" }}>
                {pickingList.map((val, key) => {
                  return (<tr key={key}>
                    <td data-title="ID">{val.o_dis_id}</td>
                    <td data-title>{val.o_dis_descrip}</td>
                    <td data-title="Number">{val.o_dis_item_amount}</td>
                    <td data-title="button">
                      {" "}
                      <button type="button" className="btn btn-report" onClick={() => { showDetailPLChemical(val.o_dis_id) }} style={{ backgroundColor: "#63B0C0", color: "#fff" }}>
                        <i aria-hidden="true" className="fas fa-search-plus" style={{ fontSize: 15 }} />
                        <label className="mx-2" >ดูรายละเอียด</label>{" "}
                      </button>
                    </td>
                    <td data-title="Aj">{val.prof_name}</td>
                    <td>{moment(val.o_dis_date).format('L')}</td>
                    <td data-title="status">
                      <label className="iconcheck-name mx-2">{val.o_dis_status == 1 ? <><i className="fas fa-check iconcheck-name mx-2" />  รอการอนุมัติ</> : val.o_dis_status == 2 ? 'อนุมัติ' : 'ไม่อนุมัติ'}</label>

                    </td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <Modal
        show={showDetail}
        onHide={closeShowDetail}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>ดูรายละเอียด : {detailPL[0]?.o_dis_descrip}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table class="table table-bordered">
            <thead>
              <tr>

                <th scope="col">รายการ</th>
                <th scope="col">จำนวน</th>
                <th scope="col">หน่วย</th>
              </tr>
            </thead>
            <tbody>
              {detailPL.map((val, key) => {
                return (
                  <tr key={key} >
                    <th scope="row"> {val.ch_name}</th>
                    <td>{val.dis_quantity}</td>
                    <td>{val.dis_unit == 1 ? 'g' : 'mL'}</td>
                  </tr>
                )
              })}
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


    </div>


  );
};

export default PickingListChemical;
