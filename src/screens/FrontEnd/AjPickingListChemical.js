import React from 'react';
import { useState, useEffect } from 'react';

//------------------------------------search-------------------------------------
//const [searchMie, setSearchMie] = useState("");

const StPickingListTool = () => {
    return (
        <div className="container">
            <div className="card" style={{ marginTop: '5rem', borderRadius: 15, boxShadow: '0 30px 50px rgb(0 0 0 / 20%)' }}>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-6 col-xl-8 col-md-6 col-lg-6 '>
                            <h3>รายการนักศึกษาเบิกสารเคมี</h3>
                        </div>
                        <div className='col-6 col-xl-4 col-md-6 col-lg-6 ' >
                            <input type='text' className='form-control' placeholder='ค้นหารายชื่อนักศึกษาเบิกสารเคมี'
                               /*  onChange={(event) => {
                                    setSearchMie(event.target.value);
                                }} */
                            />
                        </div>
                    </div>

                    <div className='table-responsive mt-3'>
                        <table className="table table-bordered">
                            <thead className="">
                                <tr>
                                    <th width="2%" className=''>ORDER ID</th>
                                    <th width="15%" style={{ minWidth: 170 }}>รายชื่อผู้เบิกอุปกรณ์</th>
                                    <th width="15%" style={{ minWidth: 170 }}>เพื่อ</th>
                                    <th width="5%" style={{ minWidth: 100 }}>จำนวน</th>
                                    <th width="5%" style={{ minWidth: 100 }} />
                                </tr>
                            </thead>
                            <tbody style={{ verticalAlign: 'middle' }}>
                                <tr>
                                    <td data-title="ID">001</td>
                                    <td data-title="ID">พัดสม เย็นมาก</td>
                                    <td data-title>แลปจุลลินทรีย์ </td>
                                    <td data-title="Number">20 รายการ</td>
                                    <td data-title="button"> <button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-search-plus" style={{ fontSize: 15 }} /><label className="mx-2">ดูรายละเอียด</label> </button></td>

                                </tr>
                                <tr>
                                    <td data-title="ID">001</td>
                                    <td data-title="ID">พัดสม เย็นมาก</td>
                                    <td data-title>แลปจุลลินทรีย์ </td>
                                    <td data-title="Number">20 รายการ</td>
                                    <td data-title="button"> <button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-search-plus" style={{ fontSize: 15 }} /><label className="mx-2">ดูรายละเอียด</label> </button></td>

                                </tr>
                                <tr>
                                    <td data-title="ID">001</td>
                                    <td data-title="ID">พัดสม เย็นมาก</td>
                                    <td data-title>แลปจุลลินทรีย์ </td>
                                    <td data-title="Number">20 รายการ</td>
                                    <td data-title="button"> <button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-search-plus" style={{ fontSize: 15 }} /><label className="mx-2">ดูรายละเอียด</label> </button></td>
                                </tr>
                                <tr>
                                    <td data-title="ID">001</td>
                                    <td data-title="ID">พัดสม เย็นมาก</td>
                                    <td data-title>แลปจุลลินทรีย์ </td>
                                    <td data-title="Number">20 รายการ</td>
                                    <td data-title="button"> <button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-search-plus" style={{ fontSize: 15 }} /><label className="mx-2">ดูรายละเอียด</label> </button></td>

                                </tr>
                                <tr>
                                    <td data-title="ID">001</td>
                                    <td data-title="ID">พัดสม เย็นมาก</td>
                                    <td data-title>แลปจุลลินทรีย์ </td>
                                    <td data-title="Number">20 รายการ</td>
                                    <td data-title="button"> <button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-search-plus" style={{ fontSize: 15 }} /><label className="mx-2">ดูรายละเอียด</label> </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StPickingListTool;
