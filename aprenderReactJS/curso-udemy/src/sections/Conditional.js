import React, { Component } from 'react'

class LoginButton extends Component{
    render() {
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component{
    render(){
        return(
        <div>
            <p>Bienvenido</p>
            <button>Cerrar Sesión</button>
        </div>
        )
    }
}

export default class ConditionalSection extends Component{
    constructor(){
        super()
        this.state = {isLogged:true }
    }
    render() {
        
        return (
            <div>
               <h4> Conditional Rendering </h4>
               {
                this.state.isLogged
                ?<LogoutButton/>
                :<LoginButton/>
                }
            </div>
        )
    }
}