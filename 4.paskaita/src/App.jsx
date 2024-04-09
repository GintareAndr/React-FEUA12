import { useState } from "react";
import {Button} from "./Button.css"
import style from "./app.2.css"

const App = () => 
const take = useState (10, 20, 50, 100);
const add  = useState (10, 20, 50, 100);

const [balace, setBalance] = useState(500);
const [error, setErorr] = useState(0);

const EnoughBalance = (value = balance) => {
  if (balance>- value && balance !== 0) {
    return true;
  }

setErorr("Nepakanka lėšų");

return false;
};

const handleTakeOut = (value) => {
  setErorr(0);

  return isEnoughBalance(value) && setBalance(balance - value);

  const handleTakeIn = (take) => {
    setError(0);

    
    setBalance(balance + take);
};

const handleTakeOutAll = () => {
  setError(0);

  return isEnoughBalance() && setBalance(0);

};

export default App;