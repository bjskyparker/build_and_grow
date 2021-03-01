import './App.css';
import BasicTable from './components';
import Forms from './components/Forms';
import { useSelector } from 'react-redux';
import { columns } from "./components/columns";


const App = () => {
  const userData = useSelector(state => state.users);

  return (
    <div className="App">
      <p>Hello there...</p>
      <BasicTable data={userData} columns={columns}/>
      <Forms />
    </div>
  );
}

export default App;
