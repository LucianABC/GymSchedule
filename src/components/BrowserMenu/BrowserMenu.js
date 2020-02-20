import React from 'react';
import {BrowserRouter,
    Link,
    Switch,
    Route} from 'react-router-dom';


    const BrowserMenu = () => {
        const Days =[
            {   
                name: "Lunes",
                route: "",
            },
            {   
                name: "Martes",
                route: "",
            },
            {   
                name: "Miercoles",
                route: "",
            },
            {   
                name: "Jueves",
                route: "",
            },
            {   
                name: "Viernes",
                route: "",
            },
            {   
                name: "Sabado",
                route: "",
            },
            {   
                name: "Domingo",
                route: "",
            },
        ]
        return (
            <div>
                <BrowserRouter>
                </BrowserRouter>
            </div>
        );
    }

    export default BrowserMenu