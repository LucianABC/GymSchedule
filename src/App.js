import React, {useReducer} from 'react';
import './App.css';
import ScheduleContext from './ScheduleContext';
import BrowserMenu from './components/BrowserMenu/BrowserMenu';

import useBool from './components/useBoolean';

const reducer =(state, action) =>{
  switch(action.type){
    case "Lunes":
      return {...state, Lunes: action.payload};
    case "Martes":
      return {...state, Martes: action.payload};
    case "Miercoles":
      return {...state, Miercoles: action.payload};
    case "Jueves":
      return {...state, Jueves: action.payload};
    case "Viernes":
      return {...state, Viernes: action.payload};
    case "Sabado":
      return {...state, Sabado: action.payload};
    case "Domingo":
      return {...state, Domingo: action.payload};
    default:
      return state;
  }
}; 

function App() {
  const [days, dispatch] = useReducer(reducer, {
    Lunes:[{id:0,name:"abdominales",quantity:0,done:false}],
    Martes:[],
    Miercoles:[],
    Jueves:[],
    Viernes:[],
    Sabado:[],
    Domingo:[]
  });
  
  const refreshActivities =(dayName, nActivity)=> dispatch({type: dayName, payload:nActivity});
    
  const handleActivities = (dayName, action, nActivity) => {    
    let activitiesClone = [...(days[dayName])];      
    let index = activitiesClone.findIndex(item=> item.id ==nActivity.id);
    switch(action){
        case "edit": 
            activitiesClone[index]=nActivity;
          break;
        case "delete":
            activitiesClone.splice(index,1);
          break;
        case "add":
          activitiesClone.push(nActivity);
        break;
    }
    refreshActivities(dayName, activitiesClone);
  }
    
  const dayKeys = Object.keys(days);

  return (
    <ScheduleContext.Provider value={{
      days,
      handleActivities,
      dayKeys,
      useBool
    }}>

      <div className="App">
          <div className="container">
            <div>
              <h1 className="title">Gym schedule</h1>
            </div>
            <BrowserMenu></BrowserMenu>
          </div>
      </div>
    </ScheduleContext.Provider>
  );
}

export default App;
