import React from 'react'
import '../css/Bor.css'
/* import '../css/MIE.css' */


import Swal from 'sweetalert2'
import Axios from 'axios'
import { useState, useEffect, useMemo } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Pagination from '../Components/Paginations/Pagination';

let PageSize = 6;

export default function DataST() {
    const [currentPage, setCurrentPage] = useState(1);


    // --------- Modal Std ----------
    const [showAddStd, setshowAddStd] = useState(false);
    const addCloseStd = () => setshowAddStd(false);
    const addShowStd = () => setshowAddStd(true);

    //--------- Modal editStd ----------

    const [showEditDataStd, setshowEditDataStd] = useState(false);
    const [readuser, setreaduser] = useState([{}])
    const editCloseDataStd = () => setshowEditDataStd(false);
    const editShowDataStd = (id) => {
        setshowEditDataStd(true);
        //console.log(id)
        Axios.get(`http://localhost:3307/readStudent/` + id).then((Response) => {
            setreaduser(Response.data);
        });
    }

    const updateEditstd = (id) => {
        console.log(readuser);
        Axios.put("http://localhost:3307/updateEditStudent/", {
            std_id: readuser[0].std_id,
            std_name: readuser[0].std_name,
            std_level: readuser[0].std_level,
            std_password: readuser[0].std_password,
            std_tel: readuser[0].std_tel
        })
            .then(function (response) {
                console.log(response);

                //searchuser(Search, type , typeuser)

                //handleClose();
                Swal.fire("แก้ไขข้อมูลสำเร็จ", "ข้อมูลของคุณถูกแก้ไขแล้ว", "success")
                editCloseDataStd();
                getStudent();

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //--------- Modal ลบStd ----------

    const deleteStudent = (id) => {
        Swal.fire({
            title: 'คุณต้องการลบข้อมูลใช่หรือไม่ ?',
            text: "คุณต้องการลบข้อมูลของ " + id,
            icon: 'warning',
            timer: 10000,
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`http://localhost:3307/deleteDataStudent/` + id)
                    .then(function (response) {
                        console.log(response);
                        Swal.fire(
                            'ลบข้อมูลสำเร็จ !',
                            'ข้อมูลของคุณถูกลบออกแล้ว',
                            'success'
                        )
                        getStudent()

                    })
                    .catch(function (error) {
                        console.log(error);
                        Swal.fire(
                            'ไม่สามารถลบข้อมมูลได้!',
                            'ไม่สามารถลบข้อมมูลได้เนืองจาก :' + error,
                            'error'
                        )
                    })
            }
        })
    }

    // --------- Modal Aj ----------
    const [showAddDataAj, setshowAddDataAj] = useState(false);
    const AddCloseDataAj = () => setshowAddDataAj(false);
    const addShowAj = () => setshowAddDataAj(true);

    const [showEditDataAj, setshowEditDataAj] = useState(false);
    const editClosePassAj = () => setshowEditDataAj(false);
    const EditShowAj = () => setshowEditDataAj(true);

    const [showEditAj, setshowEditAj] = useState(false);
    const [readprof, setreadprof] = useState([{}])
    const editCloseDataAj = () => setshowEditAj(false);
    const EditDataShowAj = (id) => {
        setshowEditAj(true);
        console.log(id)
        Axios.get(`http://localhost:3307/readProfesser/` + id).then((Response) => {
            setreadprof(Response.data);
            console.log(readprof)

        });
    }


    const updateEditdataProfesser = (id) => {
        console.log(readprof);
        Axios.put("http://localhost:3307/updateEditProfesser/", {
            prof_id: readprof[0].prof_id,
            prof_name: readprof[0].prof_name,
            prof_password: readprof[0].prof_password,
            prof_tel: readprof[0].prof_tel,
            prof_username: readprof[0].prof_username
        })
            .then(function (response) {
                console.log(response);

                //searchuser(Search, type , typeuser)

                //handleClose();
                Swal.fire("แก้ไขข้อมูลสำเร็จ", "ข้อมูลของคุณถูกแก้ไขแล้ว", "success")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const deleteProfesser = (id) => {
        Swal.fire({
            title: 'คุณต้องการลบข้อมูลใช่หรือไม่ ?',
            text: "คุณต้องการลบข้อมูลของ " + id,
            icon: 'warning',
            timer: 10000,
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`http://localhost:3307/deleteDataProfesser/` + id)
                    .then(function (response) {
                        console.log(response);
                        Swal.fire(
                            'ลบข้อมูลสำเร็จ !',
                            'ข้อมูลของคุณถูกลบออกแล้ว',
                            'success'
                        )
                        getProfesser()
                    })
                    .catch(function (error) {
                        console.log(error);
                        Swal.fire(
                            'ไม่สามารถลบข้อมมูลได้!',
                            'ไม่สามารถลบข้อมมูลได้เนืองจาก :' + error,
                            'error'
                        )
                    })
            }
        })
    }

    // --------- Modal Addstd ----------

    const [std_id, setstd_id] = useState("");
    const [std_name, setstd_name] = useState("");
    const [std_password, setstd_password] = useState("");
    const [std_level, setstd_level] = useState("");
    const [std_tel, setstd_tel] = useState("");
    const [newstd_password, setnewstd_password] = useState("");

    const addStudent = () => {
        Axios.post('http://localhost:3307/dataStudentcreate', {
            std_id: std_id,
            std_name: std_name,
            std_level: std_level,
            std_password: std_password,
            std_tel: std_tel
        }).then(res => {
            if (res.status === 200) {
                Swal.fire("เพิ่มข้อมูลสำเร็จ", "เพิ่มข้อมูลแล้ว", "success")
                addCloseStd()
                getStudent()
            }
        }).catch(e => {
            console.log(e);
        })

    }

    // --------- Modal AdddataAj ----------
    const [prof_id, setprof_id] = useState("");
    const [prof_name, setprof_name] = useState("");
    const [prof_password, setprof_password] = useState("");
    const [prof_username, setprof_username] = useState("");
    const [prof_tel, setprof_tel] = useState("");

    const addProfesser = () => {
        Axios.post('http://localhost:3307/dataProfessercreate', {
            prof_id: prof_id,
            prof_name: prof_name,
            prof_password: prof_password,
            prof_username: prof_username,
            prof_tel: prof_tel
        }).then(res => {
            if (res.status === 200) {
                Swal.fire("เพิ่มข้อมูลสำเร็จ", "เพิ่มข้อมูลแล้ว", "success")
                AddCloseDataAj()
                getProfesser()
            }
        }).catch(e => {
            console.log(e);
        })
    }


    // --------- Modal  ----------

    const [studentList, setStudentList] = useState([]);
    const getStudent = () => {
        Axios.get('http://localhost:3307/dataStudent').then((Response) => {
            setStudentList(Response.data);
        });
    }

    const [professerList, setProfesserList] = useState([]);

    const getProfesser = () => {
        Axios.get('http://localhost:3307/dataProfesser').then((Response) => {
            setProfesserList(Response.data);
        });
    }

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getStudent()
        getProfesser()
    }, []);

    const currentProfesserListTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return professerList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, professerList]);

    const currentStudentListTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return studentList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, studentList]);

    return (
        <>
            <div className="col-9 " style={{ marginRight: '5rem', marginTop: '5rem' }}>
                <div className="warpper">
                    <input className="radio" id="one" name="group" type="radio" defaultChecked />
                    <input className="radio" id="two" name="group" type="radio" />
                    <div className="tabs row">
                        <div className="col-6" style={{ justifyContent: 'flex-start' }}>
                            <label className="tab" id="one-tab" htmlFor="one">นักศึกษา</label>
                            <label className="tab" id="two-tab" htmlFor="two">อาจารย์</label>
                        </div>
                        <div className='col-6' style={{ alignContent: 'flex-end' }}  >
                            <input type='text' className='form-control' placeholder='ค้นหาข้อมูลอาจารย์ นักศึกษา' style={{ marginLeft: '6.8rem' }}
                                onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="panels">
                        <div className="panel" id="one-panel">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th className="headname-th" scope="col" width="3%" style={{ minWidth: 200 }}> <span>รหัสนักศึกษา</span> </th>
                                        <th className="headname-th" scope="col" width="5%" style={{ minWidth: 250 }}><span>ชื่อ-นามสกุล</span></th>
                                        <th className="headname-th" scope="col" width="3%" style={{ minWidth: 100 }}><span>ชั้นปี</span> </th>
                                        <th className="headname-th" scope="col" width="3%" style={{ minWidth: 200 }}><span>เบอร์โทร</span> </th>
                                        <th className="headname-th" scope="col" width="5%" style={{ minWidth: 150 }} />
                                        {/*       <th ></th> */}
                                        <th className="headname-th" scope="col" width="5%">
                                            <button type="button" className="btn btn-report " onClick={addShowStd} style={{ backgroundColor: '#5DD480', borderRadius: 4, width: 95, color: '#fff' }}>
                                                <i aria-hidden="true" className="fas fa-plus" style={{ fontSize: 15 }} /><label className="mx-2">เพิ่ม</label> </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody style={{ height: '12rem', verticalAlign: 'middle' }}>

                                    {currentStudentListTableData
                                    .filter((val) => {
                                        if (searchTerm == "") {
                                            return val
                                        } else if (val.std_id.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val
                                        } else if (val.std_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val
                                        }
                                    }).map((val, key) => {
                                        return (<tr className="table-name-report " key={key}>
                                            <th scope="row">{val.std_id}</th>
                                            <td>{val.std_name}</td>
                                            <td><label className="class-room">{val.std_level}</label></td>
                                            <td>{val.std_tel}</td>
                                            <td>
                                                <button type="button" className="btn btn-report " onClick={() => editShowDataStd(val.std_id)}
                                                    style={{ backgroundColor: '#958F8F', color: '#fff' }}><i aria-hidden="true" className="far fa-edit"
                                                        style={{ fontSize: 15 }} /><label className="mx-2">แก้ไข</label> </button>

                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-report " onClick={() => {
                                                    deleteStudent(val.std_id);
                                                }}
                                                    style={{ backgroundColor: '#D12E2E', color: '#fff', width: '90px' }}>
                                                    <i aria-hidden="true" className="fas fa-trash" style={{ fontSize: 15 }} /><label className="mx-2">ลบ</label> </button>
                                            </td>
                                        </tr>)
                                    })}
                                </tbody>
                            </table>
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={studentList.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className="panel" id="two-panel">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th className="headname-th" scope="col" width="3%" style={{ minWidth: 150 }}> <span>รหัสอาจารย์</span> </th>
                                        <th className="headname-th" scope="col" width="5%" style={{ minWidth: 350 }}><span>ชื่อ-นามสกุล </span></th>
                                        <th className="headname-th" scope="col" width="3%" style={{ minWidth: 200 }}><span>เบอร์โทร</span> </th>
                                        <th className="headname-th" scope="col" width="3%" style={{ minWidth: 200 }} />
                                        <th style={{ minWidth: 100 }}>
                                            <button type="button" className="btn btn-report " onClick={addShowAj} style={{ backgroundColor: '#5DD480', borderRadius: 4, width: 95, color: '#fff' }}><i aria-hidden="true" className="fas fa-plus" style={{ fontSize: 15 }} /><label className="mx-2">เพิ่ม</label> </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody style={{ height: '12rem', verticalAlign: 'middle' }}>

                                    {currentProfesserListTableData
                                        .filter((val) => {
                                            if (searchTerm == "") {
                                                return val
                                            } else if (val.prof_id.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val
                                            } else if (val.prof_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val
                                            }
                                        })
                                        .map((val, key) => {
                                            return (
                                                <tr className="table-name-report " key={key}>
                                                    <th scope="row">{val.prof_id}</th>
                                                    <td>{val.prof_name}</td>
                                                    <td>{val.prof_tel}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-report "
                                                            onClick={() => EditDataShowAj(val.prof_id)}
                                                            style={{ backgroundColor: '#958F8F', width: '93px', color: '#fff' }}>
                                                            <i aria-hidden="true" className="far fa-edit" style={{ fontSize: 15 }} /><label className="mx-2">แก้ไข</label>
                                                        </button>
                                                    </td>

                                                    <td>
                                                        <button type="button" className="btn btn-report "
                                                            onClick={() => { deleteProfesser(val.prof_id); }}
                                                            style={{ backgroundColor: '#D12E2E', width: '93px', color: '#fff' }}>
                                                            <i aria-hidden="true" className="fas fa-trash" style={{ fontSize: 15 }} /><label className="mx-2">ลบ</label> </button></td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </table>
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={professerList.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------- AddStd ------------ */}
            <Modal
                show={showAddStd}
                onHide={addCloseStd}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มข้อมูลนักศึกษา</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">ชื่อ :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname
                                    onChange={(event) => {
                                        setstd_name(event.target.value)
                                    }}
                                />
                            </div>
                        </div>.
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">เบอร์โทรศัพท์ฺ :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname
                                    onChange={(event) => {
                                        setstd_tel(event.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสนักศึกษา :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname
                                    onChange={(event) => {
                                        setstd_id(event.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">ชั้นปี :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname
                                    onChange={(event) => {
                                        setstd_level(event.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสผ่าน :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname
                                    onChange={(event) => {
                                        setstd_password(event.target.value)
                                    }} />
                            </div>
                        </div>
                        <div className="row mt-3 ">
                            <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6 " style={{ textAlign: '-webkit-right', textAlign: "end" }}>
                                <button type="submit" className="btn btn-add-modal " onClick={addStudent} style={{ color: '#fff' }}>
                                    <i aria-hidden="true" className="fas fa-check mx-3" style={{ fontSize: 20 }} />ยืนยัน
                                </button>
                            </div>
                            <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6">
                                <button type="button" className="btn  btn-add-cancal" onClick={addCloseStd} style={{ color: '#fff' }}>
                                    <i aria-hidden="true" className="fas fa-times mx-3" style={{ fontSize: 20 }} />
                                    ยกเลิก
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* ---------- editStd ------------ */}
            <Modal
                show={showEditDataStd}
                onHide={editCloseDataStd}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>แก้ไขข้อมูลส่วนตัว : นักศึกษา</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {readuser.map((val, key) => {
                        return (
                            <div className="row" key={val.std_id}>
                                <div className="form-group row mb-3">
                                    <label htmlFor=""
                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">ชื่อ : </label>
                                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                        <input type="text" className="input-text form-control " defaultValue={val.std_name}
                                            onChange={(event) => {
                                                setreaduser([{
                                                    ...readuser[0], std_name: event.target.value
                                                }])
                                            }} />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label htmlFor=""
                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">เบอร์โทรศัพท์ฺ :</label>
                                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                        <input type="text" className="input-text form-control " defaultValue={val.std_tel}
                                            onChange={(event) => {
                                                setreaduser([{
                                                    ...readuser[0], std_tel: event.target.value
                                                }])
                                            }} />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label htmlFor=""
                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสนักศึกษา :</label>
                                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                        <input type="text" className="input-text form-control " defaultValue={val.std_id}
                                            onChange={(event) => {
                                                setreaduser([{
                                                    ...readuser[0], std_id: event.target.value
                                                }])
                                            }} />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label htmlFor=""
                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">ชั้นปี :</label>
                                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                        <input type="text" className="input-text form-control " defaultValue={val.std_level}
                                            onChange={(event) => {
                                                setreaduser([{
                                                    ...readuser[0], std_level: event.target.value
                                                }])
                                            }} />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label htmlFor=""
                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสผ่าน :</label>
                                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                        <input type="text" className="input-text form-control " defaultValue={val.std_password} onChange={(event) => {
                                            setreaduser([{
                                                ...readuser[0], std_password: event.target.value
                                            }])
                                        }} />
                                    </div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6 " style={{ textAlign: "end" }}>
                                        <button type="submit" className="btn btn-add-modal " onClick={() => updateEditstd(val.std_id)} style={{ color: '#fff' }}>
                                            <i aria-hidden="true" className="fas fa-check mx-3" style={{ fontSize: 20 }} />ยืนยัน
                                        </button>
                                    </div>
                                    <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6" style={{ textAlign: "start" }}>
                                        <button type="button" className="btn  btn-add-cancal" style={{ color: '#fff' }} onClick={editCloseDataStd} >
                                            <i aria-hidden="true" className="fas fa-times mx-3" style={{ fontSize: 20 }} />
                                            ยกเลิก
                                        </button>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

                </Modal.Body>
            </Modal>

            {/* ---------- AddAj------------ */}
            <Modal
                show={showAddDataAj}
                onHide={AddCloseDataAj}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มข้อมูลอาจารย์</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">ชื่อ :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname
                                    onChange={(event) => {
                                        setprof_name(event.target.value)
                                    }}
                                />
                            </div>
                        </div>.
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">เบอร์โทรศัพท์ฺ :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname
                                    onChange={(event) => {
                                        setprof_tel(event.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสอาจารย์ :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname
                                    onChange={(event) => {
                                        setprof_id(event.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">Username :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname
                                    onChange={(event) => {
                                        setprof_username(event.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสผ่าน :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname
                                    onChange={(event) => {
                                        setprof_password(event.target.value)
                                    }}
                                />

                            </div>
                        </div>
                        <div className="row mt-3 ">
                            <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6 " style={{ textAlign: "end" }}>
                                <button type="submit" onClick={addProfesser} className="btn btn-add-modal " style={{ color: '#fff' }}>
                                    <i aria-hidden="true" className="fas fa-check mx-3" style={{ fontSize: 20 }} />ยืนยัน
                                </button>
                            </div>
                            <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6">
                                <button type="button" className="btn  btn-add-cancal" style={{ color: '#fff' }} onClick={AddCloseDataAj}>
                                    <i aria-hidden="true" className="fas fa-times mx-3" style={{ fontSize: 20 }} />
                                    ยกเลิก
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* ---------- editpasswordAj------------ */}
            <Modal
                show={showEditDataAj}
                onHide={editClosePassAj}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>เปลี่ยนรหัสผ่าน : อาจารย์</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">ชื่อ :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                                ดร.ประเจต อำนาจนาน
                            </div>
                        </div>.
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">เบอร์โทรศัพท์ฺ :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                                0809383891
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสอาจารย์ :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                                1
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">Username :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                                Narath
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสผ่าน :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                                1234
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label htmlFor=""
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสผ่านใหม่ :</label>
                            <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                <input type="text" className="input-text form-control " id formcontrolname />
                            </div>
                        </div>
                        <div className="row mt-3 ">
                            <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6 " style={{ textAlign: '-webkit-right', textAlign: "end" }}>
                                <button type="submit" className="btn btn-add-modal " style={{ color: '#fff' }}>
                                    <i aria-hidden="true" className="fas fa-check mx-3" style={{ fontSize: 20 }} />ยืนยัน
                                </button>
                            </div>
                            <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6">
                                <button type="button" className="btn  btn-add-cancal" style={{ color: '#fff' }} onclick={editClosePassAj}>
                                    <i aria-hidden="true" className="fas fa-times mx-3" style={{ fontSize: 20 }} />
                                    ยกเลิก
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* ---------- editAj------------ */}
            <Modal
                show={showEditAj}
                onHide={editCloseDataAj}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>แก้ไขข้อมูลส่วนตัว : อาจารย์</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {readprof.map((val, key) => {
                        return (
                            <div className="row" key={val.prof_id}>
                                <div className="form-group row mb-3">
                                    <label htmlFor=""
                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">ชื่อ :</label>
                                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                        <input type="text" className="input-text form-control " defaultValue={val.prof_name} onChange={(event) => {
                                            setreadprof([{
                                                ...readprof[0], prof_name: event.target.value
                                            }])
                                        }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label htmlFor=""
                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">เบอร์โทรศัพท์ฺ : </label>
                                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                        <input type="text" className="input-text form-control " defaultValue={val.prof_tel} onChange={(event) => {
                                            setreadprof([{
                                                ...readprof[0], prof_tel: event.target.value
                                            }])
                                        }} />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label htmlFor=""
                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสอาจารย์ :</label>
                                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8">
                                        <input type="text" className="input-text form-control " id formcontrolname
                                            defaultValue={val.prof_id} onChange={(event) => {
                                                setreadprof([{
                                                    ...readprof[0], prof_id: event.target.value
                                                }])
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label htmlFor=""
                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">Username :</label>
                                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                                        <input type="text" className="input-text form-control " id formcontrolname
                                            defaultValue={val.prof_username} onChange={(event) => {
                                                setreadprof([{
                                                    ...readprof[0], prof_username: event.target.value
                                                }])
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label htmlFor=""
                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4  col-4 col-form-label form-name name-Aj-std">รหัสผ่าน :</label>
                                    <div className="col-xl-8 col-lg-9 col-md-9 col-sm-9 col-xs-8 col-8 mt-2">
                                        <input type="text" className="input-text form-control " id formcontrolname
                                            defaultValue={val.prof_password} onChange={(event) => {
                                                setreadprof([{
                                                    ...readprof[0], prof_password: event.target.value
                                                }])
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6 " style={{ textAlign: "end" }}>
                                        <button type="submit" className="btn btn-add-modal " onClick={() => updateEditdataProfesser(val.prof_id)} style={{ color: '#fff' }}>
                                            <i aria-hidden="true" className="fas fa-check mx-3" style={{ fontSize: 20 }} />ยืนยัน
                                        </button>
                                    </div>
                                    <div className="col-6 col-lg-6 col-xl-6 col-mb-6 col-xs-6">
                                        <button type="button" className="btn  btn-add-cancal" style={{ color: '#fff' }} onClick={editCloseDataAj}>
                                            <i aria-hidden="true" className="fas fa-times mx-3" style={{ fontSize: 20 }} />
                                            ยกเลิก
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </Modal.Body>
            </Modal>
        </>

    )

}
