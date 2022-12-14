import React, { useEffect, useState } from 'react';
import { IonItem, IonList, IonSearchbar, IonContent } from '@ionic/react';

const SearchBar = () => {
    const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
    let [results, setResults] = useState<string[]>([]);

    const handleChange = (ev: Event) => {
        let query = "";
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();

        if (query !== "") {
            var res = data.filter(d => d.toLowerCase().indexOf(query) > -1)
            setResults(res)
        }
        else if (query === "") {
            setResults([])
        }

    }

    return (
        <>
            <IonSearchbar color={"medium"} placeholder="Poišči pijačo" debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
            {results.length > 0 ? <IonList>
                {results.map(result => (
                    <IonItem>{result}</IonItem>
                ))}
            </IonList> : <></>
            }

        </>
    );
}
export default SearchBar;