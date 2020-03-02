import React from 'react';
import './BrowserMenu.scss';
import {BrowserRouter,
    Switch,
    Route} from 'react-router-dom';
import Links from './Links';
import DayCard from '../DayCard/DayCard'; 

    const BrowserMenu = () => {
        const Days =[
            {   
                
                name: "Lunes",
                route: "/monday",
            },
            {   
                name: "Martes",
                route: "/tuesday",
            },
            {   
                name: "Miercoles",
                route: "/wednesday",
            },
            {   
                name: "Jueves",
                route: "/thursday",
            },
            {   
                name: "Viernes",
                route: "/friday",
            },
            {   
                name: "Sabado",
                route: "/saturday",
            },
            {   
                name: "Domingo",
                route: "/sunday",
            },
        ]
        return (
            <div className="browser-router">
                <BrowserRouter className="browser-router-content"> 
                    <Links days={Days}/>
                    <Switch>
                        {   
                            Days.map(day=>{
                             return(<Route path= {day.route} >
                                <DayCard dayName={day.name} ></DayCard>
                                </Route>)
                            })
                        }
                        
                    </Switch>       
                </BrowserRouter>
            </div>
        );
    }

    export default BrowserMenu