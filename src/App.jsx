import "./App.jsx"
import Billing from "./pages/Billing.jsx";
import Catering from "./pages/Catering.jsx";

function App() {

  return (
    <div className="flex justify-evenly items-center  min-h-screen  bg-gradient-to-r from-violet-500 to-fuchsia-500">
      
     {/* <Payments/> */}
     <Catering/>
    </div>

  )
}

export default App
