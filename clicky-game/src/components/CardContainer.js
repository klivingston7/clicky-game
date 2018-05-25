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
        pusheens: Pusheens,
        gameCount: 1
    };

    handleClick = () => {
        // SHUFFLE THE PUSHEENS
        this.setState({ pusheens: shuffle(this.state.pusheens)});
        console.log("Shuffling Pusheens");
        this.updateScore();
    }

    updateScore = () => {
        // UPDATE SCORE
        this.setState({score: this.state.score + 1});
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }

    endGame = () => {
        console.log("End!"); 
        this.setState({gameCount: this.state.gameCount + 1})
        this.props.updateTopScore(this.state.score); 
        this.setState({score: 1});
        this.props.updateCurrentScore(this.state.score - 1);
        this.forceUpdate();
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Pusheens.map(pusheen => <Card src={pusheen.image} key={pusheen.id} id={pusheen.id} alt={pusheen.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
            </div>
        );
    }
}

export default CardContainer;