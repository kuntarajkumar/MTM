import React, { useEffect, useState } from 'react'
import { getDataDetails, saveExcelFile } from '../api/api_call';

export default function DataTable() {
    const [excelFile, setExcelFile] = useState(null);
    const [data, setData] = useState(null);

    const handleSubmit = () => {
        const data = new FormData();
        data.append("excelFile", excelFile);
        saveExcelFile(data);
    }

    const getData = () => {
        getDataDetails().then((res) => {
            setData(res?.data);
        })
    }
    useEffect(() => {
        const init = async () => {
            getData();
        }
        init();
        return () => {
        }
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-6 offset-md-3 my-5">
                    <form onSubmit={() => { handleSubmit() }} className='d-flex'>
                        <input onChange={event => {
                            console.log(event.target.files)
                            setExcelFile(event.target.files[0])
                        }} type="file" className='form-control' />
                        <button type='submit' className='btn btn-md btn-primary mx-2'>Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Created Dt Time</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(data => {
                                return(
                                <tr key={data.id} >
                                    <th scope="row">{data.id}</th>
                                    <td>{data.userName}</td>
                                    <td>{data.userContact}</td>
                                    <td>{data.userEmail}</td>
                                    <td>{data.userAddress}</td>
                                    <td>{data.userAge}</td>
                                    <td>{data.userGender}</td>
                                    <td>{data.userSalary}</td>
                                    <td>{data.createdDtTime}</td>
                                    <td><button className='btn btn-sm btn-warning'>Update</button></td>
                                </tr>
                                )
                                
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
