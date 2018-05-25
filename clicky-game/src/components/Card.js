import React, { Component } from 'react';

class Card extends Component {
    constructor (props) {
        super(props);
    }

    state = {
        count: 1
    }

    checkGame = () => {

        if (this.props.score === 1) {
            this.setState({count: 1});
            this.handleClick()
        }
        else {
            this.handleClick();
        }
    }

    handleClick = () => {
        this.props.onClick();

        if (this.state.count > 1) {
            this.props.endGame();
            this.setState({score: 1});
            console.log("Ending game!")
        }
        else {
            this.setState({ count: this.state.count + 1 });
            console.log("Current clicks: " + this.state.count)
        }
    }

    render() {
        return(
            <div className="col-md-3">
                <div className="card mb-5">
                    <img className="card-img-top" src={this.props.src} alt={this.props.alt} onClick={this.checkGame} id={this.props.id}/>
                </div>
            </div>
        )
    }
}

export default Card;