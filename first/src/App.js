//import logo from './logo.svg';
import './App.css';
import Counter from './component/counter';
import Button from './component/button';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <Counter/>
    <Button/>
    </Provider>
  );
}

export default App;

/*import{useState} from 'react'
function App() {
const[todo,settodo]=useState();
const[list,setlist]=useState([]);
function change(){
  setlist([...list,todo])
  console.log("inside")
  settodo('')
  <Input type= text ></Input>
  <button >Next</button
  <li></li>
</div>
);*/

