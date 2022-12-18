import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authState, loginUser } = useContext(AuthContext);

    const submitForm = async(e) =>{
        e.preventDefault();
        try {
            let res = await fetch("https://reqres.in/api/login", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({email, password})
            })
            res = await res.json();
            loginUser(res.token);
        } catch (error) {
            console.log(error);
        }
    };

    if(authState.isAuth) {
        alert (`Successful : Welcome ${email}`);
        return <Navigate to="/" />
    }

    return <div id="access">
        <h1>LOGIN HERE</h1>
        <form id="login-form" onSubmit={submitForm}>
            <div>
                    <input type="text" 
                        placeholder="Email/Mobile" 
                        value={email} 
                        onChange={(e) => 
                        setEmail(e.target.value)} 
                    />
            </div>
            <div>
                    <input type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
            </div>
            <div>
                <input type="submit" value="SUBMIT" id="submit" />
            </div> 
        </form>
    </div>
}

export default SignIn;