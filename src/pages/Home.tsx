import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonImg, IonIcon, IonFabList, IonItem } from '@ionic/react';
import FloatingButton from '../components/FloatingButton';
import SearchBar from '../components/SearchBar';
import SegmentFilter from '../components/SegmentFilter';
import { getDatabase, ref, child, get } from "firebase/database";

import axios from 'axios'

import '../styles/Home.css'
import '../styles/Menu.css'
import { useEffect, useState } from 'react';

interface Artikel {
  title: string;
  description: string;
  ingredients: Array<string>;
  image: string;
  id: number
}

const Home: React.FC = () => {
  const [drinks, setDrinks] = useState<any>([])

  const sendGetRequest = () => {
    return axios({
      url: "https://api.sampleapis.com/coffee/hot",
      method: 'get'
    }).then(response => {
      console.log(response);
      return response.data;
    })
  };

  useEffect(() => {
    console.log("use effect se izvaja...")
    // sendGetRequest().then(data => setDrinks(data))

    const dbRef = ref(getDatabase());
    get(child(dbRef, '/')).then((snapshot) => {
      if (snapshot.exists()) {
        var arr = snapshot.val()
        setDrinks(arr)
      }
      else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.warn(error.message);
    });

    console.log("Items in cart: " + localStorage.getItem("cart"))
  }, [])

  function addArticleToCart(id: number) {
    const article = drinks.filter((e: any) => e.id === id)
    if (localStorage.getItem("cart")) {
      const articles = JSON.parse(localStorage.getItem("cart") || "")
      console.warn(articles)
      articles.push({ title: article[0].title, description: article[0].description, ingredients: article[0].ingredients, image: article[0].image, id: article[0].image })
      localStorage.setItem("cart", JSON.stringify(articles))
    }
    else {
      localStorage.setItem("cart", JSON.stringify(article))
    }
  }

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
          {drinks.map((drink: any) => (
            <div className='menu2'>
              <IonText color={"favorite-black"}>{drink.title}</IonText>
              <IonImg className='menu-item' src={drink.image} alt='' />
              <IonButton onClick={() => addArticleToCart(drink.id)} className='menu-btn' color={"favorite-button"}>Dodaj</IonButton>
            </div>
          ))}
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;

