import "./App.jsx"
import Billing from "./pages/Billing.jsx";
import Payments from "./pages/Payments.jsx"

function App() {

  return (
    <div className="flex justify-evenly items-center  min-h-screen  bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Billing/>
     {/* <Payments/> */}
    </div>

  )
}

export default App
