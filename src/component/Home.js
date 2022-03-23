import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/Home.css'

function Home() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [role, setRole] = useState('');
    const [form, setForm] = useState(
        JSON.parse(localStorage.getItem("user_history")) || [{ name: '', number: '', role: '' }]
    );

    let len = form.length;
    const formSubmit = async () => {
        let res = await axios.post("http://localhost:5000/homepage", {
            name: name,
            role: role,
            number: number
        })
        // console.log(res);
        let temp = [...form];
        temp.push({ name: name, number: number, role: role });
        setForm(temp);
    }


    useEffect(() => {
        localStorage.setItem("user_history", JSON.stringify(form));
    }, [form]);

    return (
        <div>
            <div className="form_header">
                <div className="title">Form Submission</div>
                <div className="form_count">
                    Total Form Submitted
                    <span>{form.length}</span>
                </div>
            </div>
            <div className="form_content">
                <form>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" placeholder={form.name} value={name} onChange={e => setName(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Mobile number</td>
                            <td><input type="number" placeholder={form.number} value={number} onChange={e => setNumber(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>
                                <select onChange={e => setRole(e.target.value)}>
                                    <option value="default">select</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Managers">Managers</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="V.P">V.P</option>
                                    <option value="users">Users</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <input type="button" onClick={formSubmit} className='submit' value="Submit" />
                </form>
                {/* <div>{form[len - 1].role}</div> */}
            </div>
        </div>
    )
}

export default Home
