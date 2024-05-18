import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const h2:Element = <h2> Twój email to {email}</h2>

    const h3:Element = <h3> Twój email jest za krotki</h3>
    const h4:Element = <div> Twój email jest za dlugi</div>

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message:Element =<div>Ale masz krótki adres</div>
    if(email.length >15){
        message = <div> Twoj adres emailowy jest za dlugi</div>;
    }else if (email.length > 6){
        message = <div> Twoj adres emailowy jest w sam raz</div>;
    }


    return (

        <div>

            <h1>System do zapisów na zajęcia</h1>
            {h2}
            {message}
            <input value={email} type="text" onChange={handleChange}/>

        </div>
    );

}


export default App;