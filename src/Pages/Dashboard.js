import React from 'react';
import { useContext} from 'react';
import DashboardProfile from "../Components/Dashboard/DashboardProfile"
import Navbar from "../Components/Navbar/Navbar"
import {UserContext} from '../Contexts/context';

function Dashboard() {
  const {user} = useContext(UserContext);
  return (
    <>
      <Navbar/>
      {JSON.stringify(user) !== '{}' && <DashboardProfile user={user}/>}
    </>
  )
}

export default Dashboard;



