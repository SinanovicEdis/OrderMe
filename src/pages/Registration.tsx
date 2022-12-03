import React from 'react'
import { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage, IonInput, IonButton, IonText, useIonAlert, IonHeader, IonToolbar, isPlatform, IonRouterLink, IonNavLink, IonLabel, IonItem, IonImg, IonTitle } from '@ionic/react';
import BackButton from '../components/BackButton';
import { registerUser } from '../firebaseConfig'
import '../styles/Login.css'

const Registration: React.FC = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [presentAlert] = useIonAlert();



    const createAccount = () => {
        if (username === "" || password === "" || confirmPassword === "") {
            presentAlert({ header: "Empty fields!", message: 'Fields can not be empty!', buttons: ['OK'] })
        }
        else if (password === confirmPassword) {
            const res = registerUser(username, password)
            if (res != null) {
                presentAlert({
                    message: "Uspešno ustvarjen račun", buttons: [{
                        text: 'OK', handler: () => {
                            window.location.assign('/home')
                        },
                    }]
                })
            }
            else {
                presentAlert({ message: "Prevri pravilnen vnos podatkov!" })
            }
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <BackButton path={"login"}></BackButton>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle color={"medium"} >USTVARI SI RAČUN</IonCardSubtitle>
                        <IonCardTitle color={"favorite-white"}>Ustvari račun</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText className='userText' color={"favorite-white"}>Email</IonText>
                        <IonInput className='userInput' color={"favorite-black"} placeholder='  Username (email)' type='email' onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>

                        <p style={{ padding: "2px" }}></p>

                        <IonText className='userText' color={"favorite-white"}>Password</IonText>
                        <IonInput className='userInput' color={"favorite-black"} placeholder='  Password' type='password' onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>

                        <p style={{ padding: "2px" }}></p>

                        <IonText className='userText' color={"favorite-white"}>Password</IonText>
                        <IonInput className='userInput' color={"favorite-black"} placeholder='  Confrim Password' type='password' onIonChange={(e: any) => setConfirmPassword(e.target.value)}></IonInput>
                        <IonCardContent class='login-card-buttons'>
                            <IonButton onClick={() => createAccount()}>Ustvari račun</IonButton>
                        </IonCardContent>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage >
    );
}
export default Registration;