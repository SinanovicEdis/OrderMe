import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonFabButton, IonIcon, IonFabList, IonItem } from '@ionic/react';
import FloatingButton from '../components/FloatingButton';
import SearchBar from '../components/SearchBar';
import { logOut } from '../firebaseConfig';
import '../styles/Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='upper'>
          <div className='upper-item-fabBtn'>
            <FloatingButton slot='fixed' vertical='top' horizontal='start' edge={true} />
          </div>
          <div className='upper-item-text'>
            <IonText color={"favorite-black"}><IonText color={"favorite-name"}><b>Edis</b></IonText>, <b>dobrodošel!</b></IonText>
          </div>
        </div>
        <div className='middle'>
          <div className='grid-item'>
            <SearchBar />
          </div>
        </div>
        <div className='menu'>
          <IonButton onClick={() => logOut()}>Sign out</IonButton>
        </div>
        <div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
