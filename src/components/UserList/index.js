import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./userlist.css"
import { getgetUserListData } from "../../redux/apis/getUserListReducer";
import Loader from "../Loader";

const UserList = () => {
    const dispatch = useDispatch();
    const [requestParams, setRequestParams] = useState({ page: 1 });

    const { data, loading, error } = useSelector(
        (state) => state?.getgetUserListDataSlice
    );

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }, [error])

    useEffect(() => {
        dispatch(getgetUserListData(requestParams));
    }, [requestParams, dispatch]);

    const pageChange = (action) => {
        setRequestParams((prevData) => {
            return { ...prevData, page: prevData.page + action }
        })
    }

    return (
        <div className="card custom-margin shadow-lg bg-white rounded">
            <ToastContainer />
            <div className="card-header">
                User List
            </div>
            <div className="card-body table-responsive card-padding">
                {loading ? (
                    <Loader />
                ) : (
                    <table className="table table-bordered table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Users</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data?.map((items, index) => (
                                <tr key={items.id}>
                                    <th className="text-center" scope="row">
                                        {items.id}
                                    </th>
                                    <td className="table-name-txt">
                                        <div className="table-pic">
                                            <img src={items.avatar} width="100%" alt="profile pic" />
                                        </div>
                                        <h1>{items.first_name} {items.last_name}
                                        </h1>
                                    </td>
                                    <td>{items.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="col-md-12 text-end">
                    <button type="button" className={`btn btn-primary btn-sm ${data?.page <= 1 && "disabled"}`} onClick={() => {
                        pageChange(-1)
                    }}>Previous</button>
                    <button type="button" className="btn btn-outline-success btn-sm disabled custom-pagination-btn">Page {data?.page}/{data?.total_pages}</button>
                    <button type="button" className={`btn btn-primary btn-sm ${data?.page === data?.total_pages && "disabled"}`} onClick={() => {
                        pageChange(+1)
                    }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default UserList;