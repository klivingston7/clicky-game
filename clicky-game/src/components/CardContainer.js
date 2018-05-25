import React, {Component} from 'react';
import Card from './Card';
import Pusheens from "./../pusheens.json"
import shuffle from "shuffle-array";

class CardContainer extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        score: 1,
        count: 1,
        pusheens: Pusheens,
    };

    handleClick = () => {
        this.setState({ pusheens: shuffle(this.state.pusheens)});
        this.setState({score: this.state.score + 1});
        console.log("Shuffling Pusheens");
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }


    endGame = () => {
        console.log("End!"); 
        this.props.updateTopScore(this.state.score); 
        this.setState({score: 1});
        this.props.updateCurrentScore(this.state.score - 1);
        this.render();
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Pusheens.map(pusheen => <Card src={pusheen.image} key={pusheen.id} id={pusheen.id} alt={pusheen.name} endGame={this.endGame} onClick={this.handleClick} score={this.state.score} count="this.state.count"/>)}
                </div>
            </div>
        );
    }
}

export default CardContainer;