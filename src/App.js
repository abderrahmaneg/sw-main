import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import EmployeeDashboardPage from './pages/EmployeeDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import Forgotpassword from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import LastPage from './pages/LastPage';
import EmployeeDashboard from './components/employee/EmployeeDashboard';
import EmployeeRequests from './components/employee/EmployeeRequests';
import EmployeeProgram from './components/employee/EmployeeProgram';
import EmployeeTrackRequest from './components/employee/EmployeeTrackRequest';
import AdminRequests from './components/admin/AdminRequests';
import AdminProgram from './components/admin/AdminProgram';
import AdminTransaction from './components/admin/AdminTransaction';
import AdminFunds from './components/admin/AdminFunds';
import AdminAccountsManagement from './components/admin/AdminAccountsManagement';

function App() {
  
//  const [loggedIn,setLoggedIn]=useState(false);
 // const [role,setRole]=useState('');
  return (
    <div className='container' >
      <BrowserRouter>

        <Routes>
        {/*   <Route path='/login' exact element={<Login setLoggedIn={setLoggedIn} setRole={setRole} />}></Route>
            <Route path="/employee-dashboard"  exact element={<EmployeeDashboard loggedIn={loggedIn} role={role} />} ></Route>
            <Route path="/admin-dashboard"  exact element={<AdminDashboard loggedIn={loggedIn} role={role} />} ></Route>
        */}       
               <Route path='/' exact element={<Login/>}></Route>
                <Route path="/employee-dashboard"  exact element={<EmployeeDashboardPage />} ></Route>
                <Route path="/admin-dashboard"  exact element={<AdminDashboardPage  />} ></Route>
                <Route path='/forgotpassword' exact element={<Forgotpassword />} ></Route>
                <Route path="/send-link"  exact element={<SecondPage />} ></Route>
                <Route path="/reset-password"  exact element={<ThirdPage />} ></Route>
                <Route path="/success"  exact element={<LastPage />} ></Route>
                <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
                <Route path="/employee/requests" element={<EmployeeRequests />} />
                <Route path="/employee/track-request" element={<EmployeeTrackRequest />} />
               <Route path="/employee/program" element={<EmployeeProgram />} />
               <Route path="/admin/requests" element={<AdminRequests />} />
               <Route path="/admin/program" element={<AdminProgram />} />
               <Route path="/admin/transaction" element={<AdminTransaction />} />
                <Route path="/admin/funds" element={<AdminFunds />} />
               <Route path="/admin/accounts" element={<AdminAccountsManagement />} />
   
        </Routes>


      </BrowserRouter>
    </div>




  );
}


export default App;
