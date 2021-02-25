import './App.css';
import BasicTable from './components';
import Forms from './components/Forms';
import { useSelector } from 'react-redux';


const App = () => {
  const userData = useSelector(state => state.users);

  return (
    <div className="App">
      <p>Hello there...</p>
      <BasicTable data={userData} />
      <Forms />
    </div>
  );
}


export default App;
