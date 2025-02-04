import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const initialMenuItems=[
    'Albert Eggstein',
    'Attila the Hen',
    'Dixie Chick',
    'Gregory Peck',
    'Mary Poopins'
  ];

  const initialMenuItemsObjects = initialMenuItems.map(
      (item, i) => ({
        id: i,
        title: item
      })
    );
    
  return (
    <div className="App">
      <header className="App-header">
        <p>Sidebar 1</p>
        <Sidebar
        initialMenuItems={initialMenuItemsObjects}
        />
      </header>
    </div>
  );
}

export default App;
