
import React from 'react';
import {useState} from 'react';
import { Button } from 'react-bootstrap';

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebaseConfig";

import { useNavigate } from "react-router-dom";

export const Login = () => {
    const auth = getAuth(app)   
    const provider = new GoogleAuthProvider()
    const user = auth.currentUser

    let navigate = useNavigate()
    
    // set login popup
    const [open, setOpen] = useState(false);

    // set user 
    const [value, setValue] = useState<any | null>(null);
    

    const handleSnackOpen = () => {
        setOpen(true)
    }

    const handleSnackClose = (event?: React.SyntheticEvent, reason?:string) => {
        if(reason === 'clickaway'){
            return;
        }
        setOpen(false)
    }
    const sign_in = async () => {
        await signInWithPopup(auth, provider).then((result) => {
            if(result.user){
                let name = result.user.displayName || ''
    
                setValue(name);
                localStorage.setItem("name", name);
                
                handleSnackOpen()
                navigate(`/account`)
            }
        })
        .catch((error) => {
            handleSnackClose()
        });
        
     };
 
    const sign_out = async () => {
        await signOut(auth).then(() => {
            navigate(`/account`)
          }).catch((error) => {
            console.log("Error signing out.")
          });
    }
    return (
        <div>
        {(user==null) ? 
            <div>
                <h1>Sign In With Google</h1>
                <Button onClick={sign_in}>Sign In With Google</Button>
            </div>
            :
            <div>
                <h2>Welcome {localStorage.getItem("name")}!</h2>
                <Button onClick={sign_out}>Sign Out</Button>
            </div>
        }     
        </div>
    )
}