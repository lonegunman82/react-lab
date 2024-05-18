import logo from './logo.svg';
import "milligram";
import './App.css';
import {useState} from "react";

function App() {

    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [isAutenticated, setIsAutenticated] = useState(false)

    function handleChange(event) {
        setEmail(event.target.value);
    }


    function logout() {
        setIsAutenticated(false)
        setEmail("")
    }


    let content
    if (isAutenticated){
        content = <div>
        <h2>Witaj {email}</h2>
        <button onClick={logout}>Wyloguj</button>
        </div>


    } else {
        content = <div>
            <input value={email}
                   type="text"
                   onChange={handleChange}
                   className="dlugiepole"

            />


            <button onClick = {() => setIsAutenticated(true)}>Zaloguj się</button>

        </div>



    }



    return (

        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}

        </div>
    );

}


export default App;