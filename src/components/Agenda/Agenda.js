import React, {useContext} from 'react';
import ScheduleContext from '../../ScheduleContext';

import './agenda.scss';

const Agenda = () => {
    const {days, daysKeys} = useContext(ScheduleContext);
    return(
        <section>{
            daysKeys.map(key=>{
                return <DayCard dayName={key}></DayCard>
            })
        }
        </section>
    );
}


export default Agenda