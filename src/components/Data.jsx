import React, { useEffect, useState } from 'react'
import "./Data.css"
import { getApi, postApi } from "../APIs/Api";

const initialFormState = {
     name: "",
        emailId: "",
        passward: "",
        phoneNumber: "",
        licenseNumber: "",
        vehicleNumber: "",
        note: ""
}

function Data() {
    const [ data, setData ] = useState([]);
    const [ addData, setAddData ] = useState(initialFormState)

    const fetchData = async () => {
        try {
            const res = await getApi()
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleinput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setAddData((pre) => {
            return {
                ...pre, [ name ]: value
            }
        })
    }

    const handleAddData = async () => {
        const res = await postApi(addData);
        console.log(res.data)
        setData([ ...data, res.data ])
        cleanForm()
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        handleAddData();
    }

    const cleanForm = () => {
        setAddData(initialFormState);
    };


    return (
        <div>
            <form className='form' onSubmit={handlesubmit}>
                <h1>Add Driver</h1>
                <div className='upper-form'>
                    <p>Driver Name</p>
                    <input type='text' placeholder='Enter Name' name='name' value={addData.name} onChange={handleinput} />
                    <p>Email Id</p>
                    <input type='text' placeholder='Enter Email Id' name='emailId' value={addData.emailId} onChange={handleinput} />
                    <p>Passward</p>
                    <input type='text' placeholder='Enter Passward' name='passward' value={addData.passward} onChange={handleinput} />
                    <p>Phone Number</p>
                    <input type='text' placeholder='Enter Phone Number' name='phoneNumber' value={addData.phoneNumber} onChange={handleinput} />
                    <p>License Number</p>
                    <input type='text' placeholder='Enter License Number' name='licenseNumber' value={addData.licenseNumber} onChange={handleinput} />
                    <p>vehicle Number</p>
                    <input type='text' placeholder='Enter vehicle Number' name='vehicleNumber' value={addData.vehicleNumber} onChange={handleinput} />
                </div>
                <div className='Lower-form'>
                    <p>Notes(Optional)</p>
                    <input type='text' name='note' value={addData.note} onChange={handleinput} />
                </div>
                <div>
                    <button type="button" onClick={cleanForm}>Cancel</button>
                    <button type='submit'>Add Driver</button>
                </div>
            </form>
        </div>
    )
}

export default Data
