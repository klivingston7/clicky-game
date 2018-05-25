import React, {Component} from 'react';
import Card from './Card';
import Pusheens from "./../pusheens.json"
import shuffle from "shuffle-array";

class CardContainer extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        count: 1,
        pusheens: Pusheens,
        selected: []
    };

    handleClick = (id) => {
        this.setState({ pusheens: shuffle(this.state.pusheens)});
        if (this.state.selected.length < 1) {
            this.addToSelected(id);
            console.log("Adding " + id + " to selected array");
        }
        else {
            this.checkSelected(id);
        }
    }

    changeCount = () => {
        this.setState({ count: this.state.count + 1 });
        console.log("Current clicks: " + this.state.count)
        this.props.updateCurrentScore(this.state.count);
    }

    checkSelected = (id) => {
        this.state.selected.map(pusheen => {
            if (pusheen.id === id) {
                this.endGame();
            }

            else {
                this.addToSelected(id);
                console.log("Adding " + id + " to selected array")
            }
        })
    }
    
    addToSelected = (id) => {
        this.state.pusheens.map(pusheen => {
            if (pusheen.id === id) {
                this.changeCount();
                this.state.selected.push(pusheen);
                this.setState({selected: this.state.selected});
                console.log(this.state.selected);
            }
        })
    }

    endGame = () => {
        console.log("End!"); 
        this.props.updateTopScore(this.state.count); 
        this.setState({count: 1, selected: []});
        this.props.updateCurrentScore(this.state.count);
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Pusheens.map(pusheen => <Card src={pusheen.image} key={pusheen.id} id={pusheen.id} alt={pusheen.name} onClick={this.handleClick}/>)}
                </div>
            </div>
        );
    }
}

export default CardContainer;