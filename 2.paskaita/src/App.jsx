
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div>
 
      Hello world
      <div className="cards">
        <Card
          title="About"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi qui adipisci neque ab, ad iusto a deserunt earum eveniet iste quis fugiat ducimus voluptates magnam magni quia veniam quae delectus.
"
        />
        <Card
          title="Contacts"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi qui adipisci neque ab, ad iusto a deserunt earum eveniet iste quis fugiat ducimus voluptates magnam magni quia veniam quae delectus.
"
        />
        <Card
          title="Sales"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi qui adipisci neque ab, ad iusto a deserunt earum eveniet iste quis fugiat ducimus voluptates magnam magni quia veniam quae delectus.
"
        />
      </div>
    </div>
  );
}

export default App;