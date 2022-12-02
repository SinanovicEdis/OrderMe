import React from 'react'
import { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage, IonInput, IonButton, IonText, useIonAlert, IonHeader, IonToolbar, isPlatform, IonRouterLink, IonNavLink, IonLabel, IonItem, IonImg, IonTitle } from '@ionic/react';
import { loginUser, loginWithGoogle, logOut } from '../firebaseConfig';
import '../styles/Login.css'
import BackButton from '../components/BackButton';

const Registration: React.FC = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
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
                        <IonInput className='userInput' color={"favorite-black"} placeholder='  Confrim Password' type='password' onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                        <IonCardContent class='login-card-buttons'>
                            <IonButton onClick={() => ({})}>Ustvari račun</IonButton>
                        </IonCardContent>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage >
    );
}
export default Registration;