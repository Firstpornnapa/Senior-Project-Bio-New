import React from 'react'
import '../css/report.css'

export default function Report() {
    return (
        <div className="col-9 col-lg-9 col-xl-9 col-mb-9 col-xs-9" style={{ width: '79.5%' }}>
            <div className="row" style={{ marginTop: '3rem', width: '70rem', marginLeft:'-6rem'}}>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active report-name" aria-current="page" href="#">รายงานเบิกใช้</a>
                    </li>
                </ul>
                <div className="row">
                    <div className="card cardsidebar">
                        <div className="card-body">
                            <table className="table " style={{ marginTop: 10 }}>
                                <tbody style={{ height: '14rem', verticalAlign: 'middle' }}>
                                    <tr className="table-name-report ">
                                        <th scope="row">1</th>
                                        <td>รายงานการเบิกใช้สารเคมี</td>
                                        <td><button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-print" style={{ fontSize: 15 }} /> ดาวน์โหลด</button></td>
                                    </tr>
                                    <tr className="table-name-report">
                                        <th scope="row">2</th>
                                        <td>รายงานยอดคงเหลือสารเคมี</td>
                                       < td><button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-print" style={{ fontSize: 15 }} /> ดาวน์โหลด</button></td>
                                    </tr>
                                    <tr className="table-name-report">
                                        <th scope="row">3</th>
                                        <td>รายงาน</td>
                                        <td><button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-print" style={{ fontSize: 15 }} /> ดาวน์โหลด</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: '1rem', width: '70rem' ,  marginLeft:'-6rem'}}>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active report-name" aria-current="page" href="#">รายงานยืมอุปกรณ์</a>
                    </li>
                </ul>
                <div className="row">
                    <div className="card cardsidebar">
                        <div className="card-body">
                            <table className="table" style={{ marginTop: 10 }}>
                                <tbody style={{ height: '14rem', verticalAlign: 'middle' }}>
                                    <tr className="table-name-report ">
                                        <th scope="row">1</th>
                                        <td>รายงานการเบิกใช้สารเคมี</td>
                                        {/* <td></td> */}
                                        <td><button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-print " style={{ fontSize: 15 }} />  ดาวน์โหลด</button></td>
                                    </tr>
                                    <tr className="table-name-report">
                                        <th scope="row">2</th>
                                        <td>รายงานยอดคงเหลือสารเคมี</td>
                                        {/* <td></td> */}
                                        <td><button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-print" style={{ fontSize: 15 }} />  ดาวน์โหลด</button></td>
                                    </tr>
                                    <tr className="table-name-report">
                                        <th scope="row">3</th>
                                        <td>รายงาน</td>
                                        {/* <td></td> */}
                                        <td><button type="button" className="btn btn-report " style={{ backgroundColor: '#63B0C0', color: '#fff' }}><i aria-hidden="true" className="fas fa-print" style={{ fontSize: 15 }} /> ดาวน์โหลด</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
