import './App.css';
import { List } from './components/list';
import {Company} from './components/com';

function App() {
  let os = [
    {name : "Android"},
    {name : "Blackberry"},
    {name : "Iphone"},
    {name : "Windows Phone"}
  ];
  let com = [
    {name : "Samsung"},
    {name : "Iphone"},
    {name : "Micromaxx"},
    {name : "Htc"}
  ];
  return (
    <div>
      <h1>Mobile Operating System</h1>
      {
      os.map((el) => (
        <List os = {el.name}/>
      ))
      }
      <h1>Mobile Manufacturers</h1>
      {
        com.map((el) => (
          <Company name = {el.name}/>
        ))
      }
    </div>
  );
}

export default App;
