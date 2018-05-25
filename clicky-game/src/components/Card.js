import React, { Component } from 'react';

class Card extends Component {
    constructor (props) {
        super(props);
    }

    state = {
        count: 1,
        gameCount: 1
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.gameCount !== this.state.gameCount) {
            this.setState({count: 1, gameCount: nextProps.gameCount});
            console.log("Resetting Pusheens")
        }
    }

    checkGame = () => {
        if (this.state.count === 1) {
            this.setState({ count: this.state.count + 1 });
            this.props.handleClick()
        }
        else {
            this.props.endGame();
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