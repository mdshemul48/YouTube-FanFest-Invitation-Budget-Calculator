import "./App.css";
import Header from "./components/Header/Header";
import Guests from "./components/Guests/Guests";
import TotalCostCard from "./components/TotalCost/TotalCostCard";

import "./App.css";
function App() {
  return (
    <>
      <Header></Header>
      <main className='main-container'>
        <Guests></Guests>

        <TotalCostCard></TotalCostCard>
      </main>
    </>
  );
}

export default App;
