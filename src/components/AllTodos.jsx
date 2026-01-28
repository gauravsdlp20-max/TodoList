import React, { useEffect, useState } from "react";
import "./AllTodos.css";
import { deleteApi, getApi } from "../APIs/Api";
import { FaSearch } from "react-icons/fa";

function Drivers() {
    const [ todos, setTodos ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const fetchTodos = async () => {
        try {
            const response = await getApi();
            setTodos(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await deleteApi(id);
            setTodos(data => data.filter(item => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <div className="drivers-page">
            <div className="drivers-header">
                <h2>Drivers</h2>
                <div className="drivers-actions">
                    <input
                        type="text"
                        placeholder="Search driver name or email"
                    />
                    <button><FaSearch /></button>
                </div>
            </div>
            <div className="drivers-tabs">
                <button>Active</button>
                <button>Inactive</button>
                <button>New</button>
            </div>
            <div className="drivers-grid">
                {todos.map((todo) => {
                    const { id, name, emailId, phoneNumber, vehicleNumber, licenseNumber } = todo;
                    return (
                        < div className="driver-card" key={id} >
                            <div className="driver-info">
                                <h4>{name}</h4>
                                <p>{emailId}</p>
                                <p>📞 {phoneNumber}</p>
                                <span className="license">
                                    <p>Vehicle No:{vehicleNumber}</p>
                                    <p>License No: {licenseNumber}</p>
                                </span>
                                <div className="action-buttons">
                                    <button className="btn delete-btn" onClick={() => handleDelete(id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default Drivers;
