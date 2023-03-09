import Input from "./Day2/input";
import Button from "./Day2/Button";
import './App.css'
import Example from "./DAY2practise'/counter";
function App(){
  return (
    <div className="App">
      {/* <h1 className="header">STUDENT NAME</h1> */}
    {/* <Input/>
    <Button  label={"Submit"} disabled={true}/> */}
    <Example/>
    <Button  label={"Reset"} disabled={false}/>

    </div>
  )
}
export default App