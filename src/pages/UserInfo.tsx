import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonLabel, IonIcon, IonFabList, IonItem } from '@ionic/react';
import BackButton from '../components/BackButton';
import { personCircleOutline, arrowForwardOutline, logOutOutline } from 'ionicons/icons';
import { logOut } from '../firebaseConfig';

import '../styles/UserInfo.css'

const UserInfo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <BackButton path={"home"}></BackButton>
          <IonTitle>Uporabnik</IonTitle>
          <IonIcon icon={logOutOutline} size="large" style={{ paddingRight: "10px" }} slot="end" onClick={() => { logOut() }}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='user-container'>
          <div className='user-item'>
            <IonIcon icon={personCircleOutline}></IonIcon>
            <div>
              <IonText><b>Edis Sinanovic</b></IonText>
            </div>
          </div>
          <div className='user-item'>
            <div className='info-container'>
              <IonLabel className='info-container-item' color={"favorite-black"}>Naročilo št. #1234</IonLabel>
              <div className='icon-arrow'>
                <IonLabel className='info-container-arrow' color={"favorite-black"}><IonIcon icon={arrowForwardOutline}></IonIcon></IonLabel>
              </div>
            </div>
          </div>
          <div className='user-item'>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserInfo;
