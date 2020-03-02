import React, {useContext, useState} from 'react';
import './Activity.scss';
import ScheduleContext from '../../../ScheduleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen} from '@fortawesome/free-solid-svg-icons';
const Activity = ({activity, dayName}) => {
    const {useBool,handleActivities} = useContext(ScheduleContext);
    const [checkboxBool, toggleValue] = useBool(true);
    const [ableEdition, toggleEditor] = useBool(false);
    const [name, setName] = useState(activity.name);
    const [quant, setQuant] = useState(activity.quantity);
    
    const deleteActivity = ()=> {
        handleActivities(dayName, "delete",activity);
    }
  

    const handleEdition =()=>{
  
        const nActivity={
            id: activity.id,
            name: name,
            quantity: quant,
            done: checkboxBool
        }   
        handleActivities(dayName, "edit", nActivity);
        
    };

    return(
        <div>
            <div className="activity-container">
                <span className="edit-activity">
                    <FontAwesomeIcon icon={faPen} className="icon" onClick={toggleEditor}/>              
                    <FontAwesomeIcon icon={faTrashAlt} onClick={deleteActivity} className="icon" />
                </span>
            {ableEdition ?
                <div className="activity-content-editor">
                    <input type="text" className="name-input" value={name} 
                                                            onChange={e=>{setName(e.target.value)} }/> 
            
                    <input type="number" className="quantity-input" value={quant}
                                                                    onChange={e=>{setQuant(e.target.value)}}/> 
                </div>
                :
                <div className="activity-content">
                    <span  className={checkboxBool?  null : "done" }> 
                        {activity.name}
                    </span>
                    <span className={checkboxBool? null : "done" }> 
                        {activity.quantity}
                    </span>
                </div>
            }
                <input type="checkbox" onChange={e=>{
                                        toggleValue();
                                        handleEdition();}} />
            </div>
            {ableEdition ? 
                <button onClick={e=>{
                                handleEdition();
                                toggleEditor();
                                }}>
                    Ok
                </button> : null}
        </div>
    );
}


export default Activity;