import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      
      <Weather city_name="Morioka"/>
      <Weather city_name="Tokyo"/>
      <Weather city_name="Delhi"/>

    </div>
  );
}

export default App;
