import './App.css';
import NameComponent from './components/nameComponent';
import AddressComponent from './components/addressComponent';
import TelephoneComponent from './components/telephoneComponent';

const App = () => {
  return (
    <div>
      <NameComponent />
      <br />
      <AddressComponent />
      <br />
      <TelephoneComponent />
    </div>
  );
}

export default App;