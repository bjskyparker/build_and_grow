import './App.css';
import BasicTable from './components';
import Forms from './components/Forms';
import { useSelector } from 'react-redux';
import rootReducer from './reducers/rootReducer';


function App() {
  const rootReducer = useSelector(state => state.rootReducer)


  return (
    <div className="App">
      <p>
        Hello there...
      </p>
      <BasicTable />
      <Forms />
    </div>
  );
}

export default App;
