import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import GuardedRoute from './utils/GuardedRoute';
import { getAuthState } from './firebaseConfig';
import Registration from './pages/Registration';

setupIonicReact();


function App() {
  const [isAutheticated, setisAutheticated] = useState<Boolean>(false)

  // useEffect(() => {

  //   const getUserAuth = async () => {
  //     getAuth().onAuthStateChanged(async function (user) {
  //       if (user) {
  //         console.warn("user prijavljen");
  //         localStorage.setItem("prijavljen", "true")
  //         setisAutheticated(true)
  //       } else {
  //         console.warn("User ni prijavljen")
  //         localStorage.removeItem("prijavljen")
  //         setisAutheticated(false)
  //       }
  //     });
  //   }

  //   getUserAuth()

  //   console.warn("To je isAuthenticated: " + isAutheticated)

  // }, [isAutheticated]);

  useEffect(() => {

    const res = getAuthState()

    console.warn(localStorage.getItem("prijavljen"))

  }, []);

  return (
    < IonApp >
      <IonReactRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          <GuardedRoute path='/home' component={Home} auth={localStorage.getItem("prijavljen")} />
        </Switch>
      </IonReactRouter>
    </IonApp >

  )
};

export default App;


