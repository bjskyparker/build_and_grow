import { Provider } from 'react-redux'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <App/>
      </Provider>
    </div>
  );
}

export default App;
