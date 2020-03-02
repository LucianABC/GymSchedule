import React, {useState,useContext} from 'react';
import ScheduleContext from '../../ScheduleContext';
import './DayCard.scss';
import Activity from './Activity/Activity';

const DayCard = ({dayName}) => {
    const {days, handleActivities, useBool} = useContext(ScheduleContext);
    const [activityName, setActivityName] = useState("");
    const [quantity, setQuantity]= useState(0);
    const [bool, toggleValue] = useBool(false);
    
    const handleClick =() =>{
        const activity={
            id: days[dayName].length,
            name: activityName,
            quantity: quantity,
            done: false
        }
        handleActivities(dayName, "add", activity);
    }
    return(
        <div className="day-card">
            <div className="activities-container">
            {
            days[dayName].map(activity =>{
                return (<Activity dayName={dayName} 
                                    activity={activity}></Activity>)
                })
            }
            </div>
          
            <button className="new-bttn" onClick={toggleValue}>New activity</button>
            {bool?
            <div className="add-activity">
                <input type="number" className="new-quant" onChange={e=> setQuantity(e.target.value)}/>
                <input type="text" className="new-act" onChange={e=> setActivityName(e.target.value)}/>
                <button onClick={handleClick}> OK!</button> 
            </div> : null}
        </div>
    );
}


export default DayCard