import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import Footer from './components/Footer'
import HeaderComponent from './components/HeaderComponent'
import ListREmployee from './components/ListREmployee'
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
 

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
            {/* //http://localhost:3000 */}
            <Route path='/' element ={ <ListREmployee />} ></Route>
            {/* //http://localhost:3000/employees */}
            <Route path='/employees' element ={ <ListREmployee />}/>
             {/* //http://localhost:3000/add-employees */}
            <Route path='/add-employee' element = { <EmployeeComponent />}></Route>

            {/* //http://localhost:3000/edit-employees */}
            <Route path='/edit-employee/:id' element ={ <EmployeeComponent />}></Route>

        </Routes>
        
      <Footer />
      </BrowserRouter>
    
    </>
  )
}

export default App
