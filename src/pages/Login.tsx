import React from 'react'
import { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage, IonInput, IonButton, IonText, useIonAlert, IonHeader, IonToolbar, isPlatform } from '@ionic/react';
import { loginUser, loginWithGoogle, logOut } from '../firebaseConfig';
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'
import './Login.css'
import { getAuth } from 'firebase/auth';


const Login: React.FC = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [presentAlert] = useIonAlert();
    const [user, setUser] = useState<any>()

    async function loginUsr() {
        if (username === "" || password === "") {
            presentAlert({ header: "Empty fields!", message: 'Fields can not be empty!', buttons: ['OK'] })
        }
        else {
            const res = await loginUser(username, password)
            if (await res === true) {
                window.location.assign('/home')
            }
            if (await res === false) {
                // alert("Nepravilni podatki")
            }
        }
    }


    async function loginUsrWithGoogle() {
        const res = await loginWithGoogle()
        if (await res === true) {
            window.location.assign('/home')
        }
        if (await res === false) {
            alert("Nepravilni podatki")
        }
    }


    // async function loginGoogleNative() {
    //     try {
    //         let googleUser = await GoogleAuth.signIn()
    //         setUser(googleUser)
    //         localStorage.setItem("googleUser", JSON.stringify(googleUser))
    //         window.location.assign('/home')
    //         // var auth = GoogleAuth.initialize()
    //         // const credential = auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
    //         // return this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
    //     }
    //     catch (error) {
    //         console.warn(error)
    //     }

    //     // const credential = auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
    //     // return this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
    // }

    // async function logOutNative() {
    //     await GoogleAuth.signOut()
    // }



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Login</IonCardTitle>
                        <IonCardSubtitle>Please login to use App</IonCardSubtitle>
                    </IonCardHeader>
                    <div id='card-contenting'>
                        <IonCard>
                            <div id='card-input'>
                                <div id='email-input'>
                                    <IonInput placeholder='Username (email)' type='email' onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
                                </div>
                                <div style={{ padding: "1px" }}></div>
                                <div id='password-input'>
                                    <IonInput placeholder='Password' type='password' onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                                </div>
                            </div>
                        </IonCard>
                    </div>
                    <div id='card-buttons'>
                        <IonButton onClick={() => loginUsr()}>Login</IonButton>
                        <IonButton onClick={() => loginUsrWithGoogle()}>Login with google</IonButton>
                        <IonButton onClick={() => logOut()}>Sign out</IonButton>
                        <IonButton routerLink='/register'>Create account</IonButton>
                    </div>
                    <IonCardContent>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage >
    );
}
export default Login;