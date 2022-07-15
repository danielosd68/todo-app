import React from 'react';
import Timer from '../components/timer/timer';
import AddingForm from './form';


const View = (props) => {
    return (
        <div className='main'>
            <div className='timer'>
                <Timer />
            </div>
            <div className='content'>
                <AddingForm />
                <div className='items'>
                   
                </div>
                
            </div>
        </div>
    )
}

export default View;