import { useState } from 'react';
import {auth, googleProvider} from '../config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
export const Auth = () =>{
    const [email, setEmail] =useState("")
    const [password, setPassword] = useState("")
    console.log(auth?.currentUser?.email)
    const login = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch(err){
            console.log(err);
        }
     
    };
    const loginWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
        } catch(err){
            console.log(err);
        }
     
    };
    const logout = async () => {
        try{
            await signOut(auth);
        } catch(err){
            console.log(err);
        }
     
    }
    return (
        <>
             <div>
            <input type="email" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
            <button onClick={loginWithGoogle}>Sign In with Google</button>
        </div>
        </>
       
    )
}