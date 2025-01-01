import { useState } from "react";
import axios from "axios";

function Signup() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    async function handleSignup() {
        try {
            await axios.post("http://127.0.0.1:3000/signup", {
                username: username,
                email: email,
                password: password
            }).then((res) => {
                console.log(res);
                alert("Signup successful");
            });
        } catch (error) {
            console.log(error);
            alert("Signup failed");
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-4 rounded w-25">
                <h2 className="text-center mb-4">Signup</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username">
                            <strong>Name</strong>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="username"
                            className="form-control rounded-0"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="pass"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary w-100 rounded-0" onClick={(e) => { e.preventDefault(); handleSignup();}}>
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
