import React from 'react';
import { Link} from 'react-router-dom';

const EmployeeNavbar = () => {
  return (
    

   
    
       <div >
       <Link to="/employee/dashboard">Dashboard</Link>
       <Link to="/employee/requests">Requests</Link>
       <Link to="/employee/track-request">Track Request</Link>
       <Link to="/employee/program">Program</Link>
       </div>
       
        
  );
};

export default EmployeeNavbar;
