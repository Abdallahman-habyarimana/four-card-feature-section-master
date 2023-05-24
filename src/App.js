import Card from "./components/Card";
import Info from "./components/Info";
import data from "./utils/data";

function App() {
  return (
    <div className="container">
      <Info />
      <div className="cards">
        {
          data.map((card) => <Card card={card} key={card.id} />)
        }
        
      </div>
    </div>
  );
}

export default App;
