import React, {useState, useEffect} from 'react'
import firebase from '../../config/firebase';

const Login = (title, angka) => {
    const [welcomeText, setwelcomeText] = useState("Selamat Datang");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitUsername = (e) =>{
        const data ={
            email: email,
            password: password,
        };
        console.log(data);
        setwelcomeText("Welcome");
    };

    useEffect(() =>{
        console.log("component did mount");
        setTimeout(()=>{
            setwelcomeText("Welcome");
        }, 300);
    }, []);

    useEffect(()=>{
        console.log("component di upadate");

    }, [welcomeText]);

    return (
        <div>
            <br></br>
            <h1>Welcome</h1>
            <br></br>
                <h4>Email</h4>
                <input className="form-control" placeholder="Masukan emali" value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
                <h4>Password</h4>
                <input className="form-control" placeholder="Masukan password" value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                 <button className="btn btn-primary">Login</button>
                </div>
    )
}

export default Login;