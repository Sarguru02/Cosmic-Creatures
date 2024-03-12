import { useState } from "react";
import "./Login.css"
import { login } from "../../utils/login";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password)
        navigate("/test")
    }

    return <div className="flex-container">
        <div className="content-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="heading">
                        Login
                    </h1>
                    <br />
                    <br />
                    <span className="subtitle">USERNAME:</span>
                    <br />
                    <input type="text" className="input-type" value={username} onChange={(e) => setUsername(() => e.target.value)} name="username" />
                    <br />
                    <span className="subtitle">PASSWORD:</span>
                    <br />
                    <input type="password" className="input-type" name="password" value={password} onChange={e => setPassword(() => e.target.value)} />
                    <br /><br />
                    <input readOnly={true} type="submit" value="SUBMIT" className="input-type submit-btn" />
                </form>
            </div>
        </div>
    </div>
}
