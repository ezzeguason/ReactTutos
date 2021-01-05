import React from 'react'
import imageExcercise from '../images/exercise.png'
import imageCircle from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component{
    render(){
        const {description, img, leftColor, rightColor, title} = this.props
    return (
        <div className="card mx-auto Fitness-Card"
            style={{
                    backgroundImage : `url(${imageCircle}), linear-gradient(to right, ${leftColor}, ${rightColor}) `

                }}
                >
            <div className="card-body">
                <div className="row center">
                     <div className="col-6">
                        <img
                            className="float-right" 
                            src={img}/>
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
    }
}

export default Card