
import React from 'react';
import '../styles/Analise.css'
import ChartComponent from './Chart';
import DataTable from './table';
const Analize = () => {
    return (
        <div className='containerAnalize' >
            <ChartComponent />
            <DataTable/>
        </div>
    );
};

export default Analize;