import React from 'react';
import Swal from 'sweetalert2'
import Pagination from '../../Components/Paginations/Pagination';
import Axios from 'axios'
import { useState, useEffect, useMemo } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { getCartItemTool, setCartItemTool } from '../../functions/cartItem';

const StToolsList = () => {

  useEffect(() => {
    getToolsList();
  }, []);

  const [toolsList, setToolsList] = useState([]);
  const getToolsList = () => {
    Axios.get('http://localhost:3307/toolsList').then((response) => {
      setToolsList(response.data);
    });
  }

  // ---------------- Modal Tools ----------------------------------------
  const [readTool, setreadTool] = useState([{}])
  const [showDeatailTools, setShowDeatailTools] = useState(false);
  const DtailToolsClose = () => setShowDeatailTools(false);
  const detailToolsShow = (id) => {
    Axios.get(`http://localhost:3307/readTool/` + id).then((Response) => {
      setreadTool(Response.data);
      console.log(Response.data)
      setShowDeatailTools(true)
    });
  }


  const itemInCartTool = getCartItemTool();

  const [cart, setCart] = useState([]);
  const addToCart = (val) => {
    setCart([...cart, val])
    let item = getCartItemTool();
    if (item) {
      setCartItemTool([...item, val])
    } else {
      setCartItemTool([val])
    }
  }
  useEffect(() => {
    console.log(cart);

  }, [cart])
  //------------------------------------search-------------------------------------
  const [searchMie, setSearchMie] = useState("");
  //-----------------------------------PageSize-----------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 8;

  const currentToolsListTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return toolsList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, toolsList]);


  return (
    <>
      <div className="container-fluid">
        <div className="card" style={{ marginTop: '5rem', borderRadius: 15, boxShadow: '0 30px 50px rgb(0 0 0 / 20%)' }}>
          <div className="card-body">
            <div className="row">
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-8'><h2>อุปกรณ์ <span className='itemCart'>อุปกรณ์ในตะกร้า {itemInCartTool.length}</span></h2></div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4'>
                <input type='text' className='form-control' placeholder='ค้นหาสารเคมี'
                  onChange={(event) => {
                    setSearchMie(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row ">

              {currentToolsListTableData.filter((val) => {
                if (searchMie == "") {
                  return val
                } else if (val.tool_name.toLowerCase().includes(searchMie.toLowerCase())) {
                  return val
                } 
              }).map((val, key) => {
                return (
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 p-3">
                    <div className="card cardChemical" style={{ width: '22rem', borderRadius: 15, boxShadow: '0 30px 50px rgb(0 0 0 / 20%)' }}>
                      <img src={"http://localhost:3307/imgTools/" + val.tool_img} className="card-img-top" alt="..." height={200} style={{ width: '10rem', margin: 'auto' }} />
                      <div className="card-body">
                        <h5 className="card-title">{val.tool_id}.  {val.tool_name}</h5>
                        <div className="row">
                          <div className="col-6 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <button type="button" className="btn btn-success" onClick={() => { addToCart(val) }}><i className="fas fa-plus p-1" /><span className="NameCrub">เพิ่มลงตะกร้า</span> </button>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <button type="button" className="btn btn-secondary" onClick={() => { detailToolsShow(val.tool_id) }}><i className="fas fa-search p-1" /><span className="NameCrub">ดูรายละเอียด</span></button>
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
              totalCount={toolsList.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>

      <Modal
        show={showDeatailTools}
        onHide={DtailToolsClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>รายละเอียดอุปกรณ์</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {readTool.map((val, key) => {
            return (
              <div className="row" key={key}>
                <div className="col-xl-4 col-lg-5 col-md-12 col-12 col-sm-12">
                  <div className="row mb-3">
                    <label htmlFor=""
                      className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name">ชื่ออุปกรณ์ :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.tool_name}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="" className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name text-end">ชนิด :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.tool_id}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor=""
                      className="col-xl-6 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4  col-4 col-form-label form-name">ยอดคงเหลือ :
                    </label>
                    <div className="col-xl-4 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.tool_amount}
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-12 col-sm-12">
                  <div className="row mb-3">
                    <label htmlFor=""
                      className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name">สถานที่เก็บ :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2" >
                      {val.tool_storage}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor=""
                      className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name">ขนาดบรรจุ :
                    </label>
                    <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                      {val.tool_size}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="form-group ">
                    <div className="image-upload">
                      <img src={"http://localhost:3307/imgTools/" + val.tool_img} alt style={{ width: '7rem', }} />
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

export default StToolsList;
