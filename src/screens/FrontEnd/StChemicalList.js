import React from 'react';
import { useState, useEffect, useMemo } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { Modal, Button, Form, Card, CardImg } from 'react-bootstrap'
import Pagination from '../../Components/Paginations/Pagination';
import { getCartItem, setCartItem } from '../../functions/cartItem';
import moment from 'moment'

const StChemicalList = () => {

  useEffect(() => {
    getChemical();
  }, []);

  const [chemicalList, setChemicalList] = useState([]);
  const getChemical = () => {
    Axios.get('http://localhost:3307/chemicalList').then((response) => {
      setChemicalList(response.data);
    });
  }

  // --------- Modal Che ------------------------------------------------------------
  const [readChe, setreadChe] = useState([{}])
  const [showDetail, setShowDetail] = useState(false);
  const detailClose = () => setShowDetail(false);
  const detailShow = (id) => {
    Axios.get(`http://localhost:3307/readChe/` + id).then((Response) => {
      setreadChe(Response.data);
      console.log(Response.data)
      setShowDetail(true)
    }
    );
  }

  const itemInCart = getCartItem();

  const [cart, setCart] = useState([]);
  const addToCart = (val) => {
    val.unit = '1';
    setCart([...cart, val])
    let item = getCartItem();
    if (item) {
      setCartItem([...item, val])
    } else {
      setCartItem([val])
    }
    // localStorage.setItem('item', JSON.stringify())
  }
  useEffect(() => {
    console.log(cart);

  }, [cart])
  //------------------------------------search-------------------------------------
  const [searchMie, setSearchMie] = useState("");

  //-----------------------------------PageSize-----------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 8;

  const currentChemicalListTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return chemicalList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, chemicalList]);


  return (
    <>
      <div className="container-fluid">
        <div className="card" style={{ marginTop: '5rem', borderRadius: 15, boxShadow: '0 30px 50px rgb(0 0 0 / 20%)' }}>
          <div className="card-body">
            <div className="row">
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-8'><h2>สารเคมี <span className='itemCart'>สารเคมีในตะกร้า {itemInCart.length} </span></h2></div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4'>
                <input type='text' className='form-control' placeholder='ค้นหาสารเคมี'
                  onChange={(event) => {
                    setSearchMie(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row ">
              {currentChemicalListTableData.filter((val) => {
                if (searchMie == "") {
                  return val
                } else if (val.ch_name.toLowerCase().includes(searchMie.toLowerCase())) {
                  return val
                } else if (val.ch_code.toLowerCase().includes(searchMie.toLowerCase())) {
                  return val
                }
              }).map((val, key) => {
                return (
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 p-3">
                    <div className="card cardChemical " style={{ width: '22rem', borderRadius: 15, boxShadow: '0 30px 50px rgb(0 0 0 / 20%)' }}>
                      <img src={"http://localhost:3307/imgChemical/" + val.ch_img} className="card-img-top card-img-bottom" alt="..." height={200} style={{ width: '15rem', margin: 'auto' }} />
                      <div className="card-body">
                        <h5 className="card-title mb-2">{val.ch_id}. {val.ch_name}</h5>
                        <div className="row">
                          <div className="col-6 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <button type="button" className="btn btn-success" onClick={() => { addToCart(val) }} ><i className="fas fa-plus p-1" /><span className="NameCrub">เพิ่มลงตะกร้า</span> </button>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <button type="button" className="btn btn-secondary" onClick={() => { detailShow(val.ch_id) }}><i className="fas fa-search p-1" /><span className="NameCrub">ดูรายละเอียด</span></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                )
              })}
            </div>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={chemicalList.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>


      <Modal
        show={showDetail}
        onHide={detailClose}
        backdrop="static"
        keyboard={false}

        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>รายละเอียดสารเคมี</Modal.Title>

        </Modal.Header>
        <Modal.Body>
          {readChe.map((val, key) => {
            return (
              <div className="row" key={key}>
                <div className="col-xl-4 col-lg-5 col-md-12 col-12 col-sm-12">
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-3  col-3 col-form-label form-name labal-name-mie">ชื่อสารเคมี :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-9 col-9 mt-2">
                      {val.ch_name}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-3  col-3  col-4 col-form-label form-name labal-name-mie">ชนิด
                      :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.ch_id}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4  col-4 col-form-label form-name labal-name-mie">สูตรโมเลกุล
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.ch_formula}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4  col-4 col-form-label form-name labal-name-mie">CAS No :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.ch_cas_no}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4  col-4 col-form-label form-name labal-name-mie">รหัสสารเคมี
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.ch_code}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4  col-4 col-form-label form-name labal-name-mie">จำนวน :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.ch_amount}
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-12 col-sm-12">
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name labal-name-mie">สถานที่เก็บ :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.ch_storage}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name labal-name-mie">ขนาดบรรจุ :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.ch_quantity}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name labal-name-mie">สถาน
                      :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.ch_status == 1 ? 'Solids' : 'Liquids'}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name labal-name-mie">วันหมดอายุ :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {moment(val.ch_exp).format('L')}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name labal-name-mie">ผู้ผลิต :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.ch_manufacturer}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="form-group ">
                    <div className="image-upload">
                      <img src={"http://localhost:3307/imgChemical/" + val.ch_img} alt style={{ width: '7rem', marginTop: '5rem' }} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Modal.Body>
      </Modal>
    </>
  )
};

export default StChemicalList;
