import React from 'react';
import '../components/styles/Dashboard.css'
import Marketing from '../components/martketing/Marketing';
import Counting from '../components/counting/Counting';
import Analize from '../components/analize/Analize';





function Dashboard(props) {

    return (
        <div className='dashboard' id="dashboard">
        <Marketing />
        <Counting/>
        <Analize/>
        </div>
    );
}

export default Dashboard;


