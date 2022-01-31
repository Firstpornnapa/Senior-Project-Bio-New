import React from 'react'
import './css/AddChe.css'

export default function AddChe() {
    return (


        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                เพิ่มข้อมูลอุปกรณ์
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">เพิ่มข้อมูลอุปกรณ์</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-5 col-12 col-sm-12">
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name">ชื่อสารเคมี :
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name">ชนิด :
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4  col-4 col-form-label form-name">สูตรโมเลกุล
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4  col-4 col-form-label form-name">CAS No :
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4  col-4 col-form-label form-name">รหัสสารเคมี :
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4  col-4 col-form-label form-name">จำนวน :
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5 col-12 col-sm-12">
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name">สถานที่เก็บ :
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name">ขนาดบรรจุ :
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name">สถาน :
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name">วันหมดอายุ :
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor className="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name">ผู้ผลิต :
                                        </label>
                                        <div className="col-xl-7 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                            <input type="text" className="input-text form-control " id formcontrolname />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="form-group mb-3">
                                        <div className="image-upload">
                                            {/*     <i class="far fa-image" style=" font-size: 30px;"></i> */}
                                            <input className="form-control" type="file" />
                                        </div>
                                    </div>
                                </div>
                                {/*   <div class="modal-footer"> */}
                                <div className="row mt-4">
                                    <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6" style={{ textAlign: '-webkit-right' }}>
                                        <button type="submit" className="btn " style={{ backgroundColor: '#1E6E66', color: '#fff', fontFamily: '"Prompt", sans-serif', textAlign: 'center' }}>
                                            <i aria-hidden="true" className="fas fa-check mx-2" style={{ fontSize: 16 }} />ยืนยัน
                                        </button>
                                    </div>
                                    <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6">
                                        <button type="button" className="btn " style={{ backgroundColor: '#D12E2E', color: '#fff', fontFamily: '"Prompt", sans-serif', textAlign: 'center' }}>
                                            <i aria-hidden="true" className="fas fa-times mx-2" style={{ fontSize: 16 }} />
                                            ยกเลิก
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div></div>

    )
}
