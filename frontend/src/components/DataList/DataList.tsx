import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../../state/actions/dataActions";
import Loader from "../Loader/Loader";

const DataList: React.FC = () => {
    const allData = useSelector((state: any) => state?.data?.allData);
    const dispatch = useDispatch();
    const router = useRouter();

    const redirectToUpdatePage = (params: number) => {
        console.log(params);
        router.push({
            pathname: "/updatedata",
            query: { id: params }
        });
    };

    const deleteData = (params: any) => {
        console.log(params);
        axios.delete(`http://3.108.52.70:8080/data/${params}`);
        console.log("Values deleted successfully");
        router.reload();
    };

    const fetchAllData = async () => {
        await axios.get("http://3.108.52.70:8080/data/").then((res) => {
            dispatch(getAllData(res.data));
            console.log(res.data);
        });
    };

    useEffect(() => {
        fetchAllData();
    }, [fetchAllData]); // Include fetchAllData in the dependency array

    return (
        <>
            <h1>All Data:</h1>
            {!allData && allData == undefined ? (
                <>
                    <Loader />
                </>
            ) : (
                allData.map((individualData: any) => {
                    return (
                        <>
                            <h3>ID: {individualData._id}</h3>
                            <h4>Title: {individualData.title}</h4>
                            <h4>Assigned: {individualData.assigned}</h4>
                            <button onClick={() => redirectToUpdatePage(individualData._id)}>Update</button>
                            <button onClick={() => deleteData(individualData._id)}>Delete</button>
                        </>
                    );
                })
            )}
        </>
    );
};

export default DataList;
