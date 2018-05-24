import React, {Component} from 'react';
import Card from './Card';
import Pusheens from "./../pusheens.json"
import shuffle from "shuffle-array";

class CardContainer extends Component {

    state = {
        count: 0,
        pusheens: Pusheens,
        selected: []
    };

    handleClick = (id) => {
        this.setState({ pusheens: shuffle(this.state.pusheens)});
        this.checkSelected(id);
        console.log("handling Click");
    }

    changeCount = () => {
        this.setState({ count: this.state.count + 1 });
        console.log("Current clicks: " + this.state.count)
    }

    checkSelected = (id) => {

        if (this.state.selected.length < 1) {
            this.addToSelected(id);
            this.changeCount();
            console.log("Adding " + id + " to selected array");
        }

        else {
            this.state.selected.map(pusheen => {
                if (pusheen.id === id) {
                    this.endGame();
                }

                else {
                    // this.addToSelected(id);
                    this.changeCount();
                    console.log("Adding " + id + " to selected array")
                    console.log(this.state.selected)
                }
            })
        }
    }

    addToSelected = (id) => {
        this.state.pusheens.map(pusheen => {
            if (pusheen.id === id) {
                this.state.selected.push(pusheen);
                console.log(this.state.selected);
            }
        })
    }

    endGame = () => {
        console.log("End!");  
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