import 'bootstrap/dist/css/bootstrap.min.css';
import{Routes ,Route} from "react-router-dom"
import Users from "./Users"
import CreateUser from "./CreateUser"
import UpdateUser from "./UpdateUser"
function App() {
  return (
    <div className="App">
       <Routes >
        <Route path="/" element={<Users />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/getUser/:id" element={<UpdateUser />} />
       </Routes>
    </div>
  );
}

export default App;
