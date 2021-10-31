import './App.css';
import './index.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="https://planetafacil.plenainclusion.org/wp-content/uploads/2020/04/bell-1096280_1280.png" alt="ChitChat Logo"/>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
