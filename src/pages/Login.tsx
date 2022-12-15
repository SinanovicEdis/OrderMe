import React from 'react'
import { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage, IonInput, IonButton, IonText, useIonAlert, IonHeader, IonToolbar, isPlatform, IonRouterLink, IonNavLink, IonLabel, IonItem, IonImg, IonTitle } from '@ionic/react';
import { loginUser, loginWithFacebook, loginWithGoogle } from '../firebaseConfig';
import '../styles/Login.css'

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
                window.location.assign('/scan')
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
                        <IonCardSubtitle color={"medium"} >PRIJAVI SE ZA UPORABO APLIKACIJE</IonCardSubtitle>
                        <IonCardTitle color={"favorite-white"}>Prijava</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <div className='userText'>
                            <IonText color={"favorite-white"}>Email</IonText>
                        </div>
                        <IonInput className='userInput' color={"favorite-black"} placeholder='  Email' type='email' onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>

                        <p style={{ padding: "2px" }}></p>
                        <div className='userText'>
                            <IonText color={"favorite-white"}>Password</IonText>
                        </div>
                        <IonInput className='userInput' color={"favorite-black"} placeholder='  Password' type='password' onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                        <IonCardContent class='login-card-buttons'>
                            <IonButton onClick={() => loginUsr()}>Login</IonButton>
                            <IonText><a className='create-account-link' href='/registration' style={{ color: "white" }}>Nimaš računa? Ustvari ga!</a></IonText>
                        </IonCardContent>

                        <div className='providersLogin'>
                            <IonImg className='provider' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1280px-Google_%22G%22_Logo.svg.png' onClick={() => loginWithGoogle()}></IonImg>
                            <IonLabel className='provider'></IonLabel>
                            <IonImg className='provider' src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png?20210818083032' onClick={() => loginWithFacebook()}></IonImg>
                        </div>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage >
    );
}
export default Login;