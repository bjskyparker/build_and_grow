import './App.css';
import BasicTable from './components';
//import mock_data from '../components/mock_data.json';

function App() {
  return (
    <div className="App">
      <p>
        Hello there...
      </p>
      {/* {mock_data.map() => {
        return 
      }} */}
      <BasicTable />
    </div>
  );
}

export default App;
