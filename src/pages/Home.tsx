import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonImg, IonIcon, IonFabList, IonItem } from '@ionic/react';
import FloatingButton from '../components/FloatingButton';
import SearchBar from '../components/SearchBar';
import SegmentFilter from '../components/SegmentFilter';
import cappuccino from '../assets/img/cappuccino.jpg'
import espresso from '../assets/img/espresso.jpg'
import mocha from '../assets/img/mocha.jpg'
import icedcoffee from '../assets/img/icedcoffee.jpg'
import '../styles/Home.css'
import '../styles/Menu.css'

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
            <SegmentFilter />
          </div>
        </div>
        <div className='menu'>
          <div className='menu2'>
            <IonText>Espresso</IonText>
            <IonImg className='menu-item' src={espresso} alt='espresso img' />
            <IonButton className='menu-btn' color={"favorite-button"}>Dodaj</IonButton>
          </div>
          <div className='menu2'>
            <IonText>Mocha</IonText>
            <IonImg className='menu-item' src={mocha} alt='espresso img' />
            <IonButton className='menu-btn' color={"favorite-button"}>Dodaj</IonButton>
          </div>
          <div className='menu2'>
            <IonText>Ice coffee</IonText>
            <IonImg className='menu-item' src={icedcoffee} alt='iced img' />
            <IonButton className='menu-btn' color={"favorite-button"}>Dodaj</IonButton>
          </div>
          <div className='menu2'>
            <IonText>Cappuccino</IonText>
            <IonImg className='menu-item' src={cappuccino} alt='cappuccino img' />
            <IonButton className='menu-btn' color={"favorite-button"}>Dodaj</IonButton>
          </div>
        </div>



      </IonContent>
    </IonPage>
  );
};

export default Home;
