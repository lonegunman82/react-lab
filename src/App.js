import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');

    function handleChange(event) {

        setEmail(event.target.value);

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email.toUpperCase()}</h2>
            <input type="text" value={email} onChange={handleChange}/>

        </div>
    );
}

export default App;


