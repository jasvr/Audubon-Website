import React, {Component} from 'react';
import './Show.css';



class Show extends Component{
    componentDidMount(){
        console.log("This function runs after our Component gets rendered on the page")
        console.log(this.props.location.bird)
    }       

    render(){
        return(
            <div className='container'>
            <div>
            <img src={this.props.location.bird.image}></img>
            </div>
            <div className='birdInfo'>
            <h1>{this.props.location.bird.name}</h1>
            <p className='showGenus'>({this.props.location.bird.genus})</p>
            <h3>Conservation status</h3>
            <p className='showP'>{this.props.location.bird.conservationStatus}</p>
            <button>
                <a href={this.props.location.bird.homepage} target='_blank'>Read more</a>
            </button>
            </div>
            </div>
        )
    }
}

export default Show;