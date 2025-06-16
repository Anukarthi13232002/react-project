import About from "./component/About"
import Header from "./component/Header"
import Dummy from "./component/Dummy"
import List from "./component/List"
import Action from "./component/Action"
import Toggle from "./component/Toggle"
import Form from "./component/Form"

function App(){
  return(
  <div>
  <h1>Hello</h1>
  <p>Connect to App and Main</p>
  <About />
  <Header />
  <Dummy user />
  <List />
  <Action />
  <Toggle />
  <Form />
  </div>
  )
}
export default App