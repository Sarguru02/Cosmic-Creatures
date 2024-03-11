import { useState } from "react";
import "./Signup.css"
export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, confirmpassword, firstname, lastname);
    }

    return <div className="flex-container">
        <div className="content-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="heading">
                        Signup
                    </h1>
                    <br />
                    <br />
                    <span className="subtitle">EMAIL:</span>
                    <br />
                    <input type="email" className="input-type" value={email} onChange={(e)=> setEmail(() => e.target.value)} name="username"/>
                    <br />
                    <span className="subtitle">First Name:</span>
                    <br />
                    <input type="text" className="input-type" value={firstname} onChange={(e)=> setFirstname(() => e.target.value)} name="username"/>
                    <br />
                    <span className="subtitle">Last Name:</span>
                    <br />
                    <input type="text" className="input-type" value={lastname} onChange={(e)=> setLastname(() => e.target.value)} name="username"/>
                    <br />
                    <span className="subtitle">PASSWORD:</span>
                    <br />
                    <input type="password" className="input-type" name="password" value={password} onChange={e => setPassword(()=>e.target.value)} />
                    <br /><span className="subtitle">Confirm Password:</span>
                    <br />
                    <input type="password" className="input-type" name="password" value={confirmpassword} onChange={e => setConfirmPassword(()=>e.target.value)} />
                    <br /><br />
                    <input readOnly={true} type="submit" value="SUBMIT" className="input-type submit-btn" />
                </form>
            </div>
        </div>
    </div>
}
