import { useState } from "react";
import "./Signup.css"
import { signup } from "../../utils/login";
export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            alert("Passwords do not match");
            return;
        }
        signup(email, password)
        navigate("/test")
    }

    return <div className="signup-flex-container">
        <div className="signup-content-container">
            <div className="signup-form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="signup-heading">
                        Signup
                    </h1>
                    <br />
                    <br />
                    <span className="signup-subtitle">EMAIL:</span>
                    <br />
                    <input type="email" className="signup-input-type" value={email} onChange={(e) => setEmail(() => e.target.value)} name="username" />
                    <br />
                    <span className="signup-subtitle">First Name:</span>
                    <br />
                    <input type="text" className="signup-input-type" value={firstname} onChange={(e) => setFirstname(() => e.target.value)} name="username" />
                    <br />
                    <span className="signup-subtitle">Last Name:</span>
                    <br />
                    <input type="text" className="signup-input-type" value={lastname} onChange={(e) => setLastname(() => e.target.value)} name="username" />
                    <br />
                    <span className="signup-subtitle">PASSWORD:</span>
                    <br />
                    <input type="password" className="signup-input-type" name="password" value={password} onChange={e => setPassword(() => e.target.value)} />
                    <br /><span className="signup-subtitle">Confirm Password:</span>
                    <br />
                    <input type="password" className="signup-input-type" name="password" value={confirmpassword} onChange={e => setConfirmPassword(() => e.target.value)} />
                    <br /><br />
                    <input readOnly={true} type="submit" value="SUBMIT" className="signup-input-type submit-btn" />
                </form>
            </div>
        </div>
    </div>
}
