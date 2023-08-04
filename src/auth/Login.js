import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const auth = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email, 
                password: password
            });
            navigate('/dashboard')
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
            
        }
    }


    return (
        <section>
            <section className="hero has-background-info is-fullheight is-fullwidth">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-4-desktop">
                                <form onSubmit={auth} className='box'>
                                    <p className='has-text-centered has-background-danger has-text-black mb-2'>{msg}</p>
                                    <div className="field">
                                        <label className='label'>Email</label>
                                        <div className="controls">
                                            <input type="text" className="input" placeholder='Username' value={(email)} onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className='label'>Password</label>
                                        <div className="controls">
                                            <input type="password" className="input" placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <button className='button is-success is-fullwidth'>Login</button>
                                        <br />
                                        <div className='has-text-centered sm-2'>
                                            <p>Don't have any account ? <a href="/register">Register</a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        
    )
}

export default Login