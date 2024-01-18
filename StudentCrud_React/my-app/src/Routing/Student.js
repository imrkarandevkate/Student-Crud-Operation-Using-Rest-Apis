import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export const Student = () => {
    const [getStudentData, setStudentData] = useState([]);
    const [showUpdateButton, setShowUpdateButton] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true);

    const student_id = useRef();
    const student_email = useRef();
    const student_name = useRef();
    const student_gender = useRef();
    const student_address = useRef();
    const student_mobile = useRef();
    const student_code = useRef();


    useEffect(function () {
        GetStudents();
    }, [])

    const GetStudents = () => {
        axios({
            url: 'http://localhost:9092/api/student',
            method: 'get',
            contentType: 'application/json'

        }).then(e => {
            setStudentData(e.data);
        })
    }
    const AddStudent = () => {
        const sname = student_name.current.value;
        const semail = student_email.current.value;
        const sgender = student_gender.current.value;
        const saddress = student_address.current.value;
        const smobile = student_mobile.current.value;
        const scode = student_code.current.value;
        var studentdata = { "student_name": sname, "student_code": scode, "email_address": semail, "mobile_number": smobile, "gender": sgender, "local_address": saddress }
        axios({
            url: 'http://localhost:9092/api/student',
            method: 'post',
            data: studentdata,
            contentType: 'application/json'
        }).then(e => {
            alert(e.data)
            GetStudents();
            ClearData();
        })
    }
    const UpdateStudent = () => {
        const sid = student_id.current.value;
        const sname = student_name.current.value;
        const semail = student_email.current.value;
        const sgender = student_gender.current.value;
        const saddress = student_address.current.value;
        const smobile = student_mobile.current.value;
        const scode = student_code.current.value;
        var studentdata = { "student_id": sid, "student_name": sname, "student_code": scode, "email_address": semail, "mobile_number": smobile, "gender": sgender, "local_address": saddress }
        axios({
            url: 'http://localhost:9092/api/student',
            method: 'put',
            data: studentdata,
            contentType: 'application/json'
        }).then(e => {
            alert(e.data)
            GetStudents();
            ClearData();
        })
    }

    const DeleteStudent = (s) => {
        axios({
            url: 'http://localhost:9092/api/student/' + s,
            method: 'delete',
            contentType: 'application/json'
        }).then(e => {
            alert(e.data)
            GetStudents();
        })
    }

    const ViewStudent = (s) => {
        student_id.current.value = s.student_id;
        student_name.current.value = s.student_name;
        student_email.current.value = s.email_address;
        student_gender.current.value = s.gender;
        student_address.current.value = s.local_address;
        student_mobile.current.value = s.mobile_number;
        student_code.current.value = s.student_code;

        setShowAddButton(false);
        setShowUpdateButton(true);
    }
    const ClearData = () => {
        student_id.current.value = "";
        student_name.current.value = "";
        student_email.current.value = "";
        student_gender.current.value = "";
        student_address.current.value = "";
        student_mobile.current.value = "";
        student_code.current.value = "";
    }
    return (
        <div>
            <div className="container-fluid" >
                <div className="row mt-1 d-flex">
                    <div className="text-center pt-2 bg-light text-dark " style={{ boxShadow: "3px 3px 3px #888888" }}>
                        <h4 className="bg-light text-dark p-2">Employee Management System</h4>
                    </div>
                    <hr />
                    <div className="text-end">
                        <button className="btn btn-primary" data-bs-toggle="modal" href="#myModal" >Add Employee</button>
                    </div>
                </div>
                <div className="row">
                    <div id="myModal" class="modal fade" role="dialog">
                        <div class="modal-dialog modal-xl ">
                            {/* <!-- Modal content--> */}
                            <div class="modal-content ">
                                <div class="modal-header bg-primary">
                                    <h4 class="modal-title mr-auto text-white">Add Employee</h4>
                                    <button type="button" class="close btn btn-danger" data-bs-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body ">
                                    <div className="row ">
                                        <div class="col-md-4 " disabled hidden >
                                            <div class="form-group" >
                                                <input class="form-control" ref={student_id}
                                                    type="number" />
                                            </div>
                                        </div>
                                        <div class="col-md-4 ">
                                            <div class="form-group">
                                                <label>Student Name</label>
                                                <input class="form-control" ref={student_name}
                                                    type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input type="text" ref={student_email}
                                                    class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-md-4 ">
                                            <div class="form-group">
                                                <label>Gender</label> &nbsp;<br />
                                                <select ref={student_gender} className="mt-2 p-1" >
                                                    <option selected disabled>Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row ">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Student Code</label>
                                                <input class="form-control" ref={student_code}
                                                    type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div class="form-group">
                                                <label>Address</label>
                                                <textarea ref={student_address}
                                                    class="form-control" style={{ resize: "none" }} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div class="form-group">
                                                <label>Mobile Number</label>
                                                <input type="text" ref={student_mobile}
                                                    class="form-control" />
                                            </div>
                                        </div>

                                    </div>
                                    <br />
                                    <div className="row">

                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger close"
                                        onClick={() => ClearData()}>Clear</button>
                                    {showAddButton && (<button type="button" data-bs-dismiss="modal" class="btn btn-default btn-primary" id="btnadd"
                                        onClick={() => AddStudent()}>Add
                                    </button>)}

                                    {showUpdateButton && (<button type="button" data-bs-dismiss="modal" class="btn btn-default btn-primary" id="btnupdate"
                                        onClick={() => UpdateStudent()}>Update
                                    </button>)}
                                </div>

                            </div>

                        </div>

                    </div>
                </div >
                <div className="col-md-12 mt-3">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student_id</th>
                                <th>Student_name</th>
                                <th>Student_code</th>
                                <th>Student_email</th>
                                <th>Student_mobile</th>
                                <th>Student_gender</th>
                                <th>Student_address</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                getStudentData.map((d, k) => (
                                    <tr key={k}>
                                        <td>{d.student_id}</td>
                                        <td>{d.student_name}</td>
                                        <td>{d.student_code}</td>
                                        <td>{d.email_address}</td>
                                        <td>{d.mobile_number}</td>
                                        <td>{d.gender}</td>
                                        <td>{d.local_address}</td>

                                        <td>
                                            <input type="button" className="btn btn-info" value="View" href="#myModal" data-bs-toggle="modal" onClick={() => ViewStudent(d)} /> &nbsp;
                                            <input type="button" className="btn btn-danger" value="Delete" onClick={() => DeleteStudent(d.student_id)} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    )
}
