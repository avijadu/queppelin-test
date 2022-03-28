import React, { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../style/Login.css'

const Name = createContext();

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [role, setRole] = useState('');

    const history = useNavigate();
    const handleLogin = async () => {
        let res = await axios.post("http://localhost:5000/login", {
            username: username,
            password: password
        })
        let role = res.data.role;
        setRole(role);
        props.parentCallBack(role);
        if (role) {
            history('/')
        } else {
            setError("please enter valid username or password")
        }
    }

    return (
        <div className='login'>
            <div className="login_container">
                Login <br /> <br />
                <div>
                    <input
                        type="text"
                        className='input'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className='input'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div><br />
                <p className="error">{error}</p>
                <input
                    type="button"
                    value="Login"
                    onClick={handleLogin}
                />
            </div>
        </div>
    )
}

export default Login;
