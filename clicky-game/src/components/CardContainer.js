import React, {Component} from 'react';
import Card from './Card';
// import PusheenBurger from "./../pusheen_burger.gif"
// import PusheenBread from "./../pusheen_bread.gif"
import Pusheens from "./../pusheens.json"

class CardContainer extends Component {

    state = {
        count: 0,
        pusheens: Pusheens
    };

    handleClick = () => {
        this.changeCount();
        this.shuffle();
    }

    changeCount = () => {
        console.log("clicked");
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count)
    }

    shuffle = () => {
        console.log("Shuffling...");
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const characters = this.state.characters;
        for (var i = 0; i < characters.length - 1; i++) {
          var j = i + Math.floor(Math.random() * (characters.length - i));
    
          var temp = characters[j];
          characters[j] = characters[i];
          characters[i] = temp;
        }
        // Set this.state.friends equal to the new friends array
    
        this.setState({ characters });
    };

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Pusheens.map(pusheen => <Card src={pusheen.image} key={pusheen.id} alt={pusheen.name} onClick={this.handleClick}/>)}
                </div>
            </div>
        );
    }
}

export default CardContainer;