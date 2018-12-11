import React, { Component } from 'react';
import axios from 'axios'
import Jokes from './componen/Jokes';

class App extends Component {
    state = { jokes: "" }
    componentDidMount() {
        axios.get("https://safe-falls-22549.herokuapp.com/random_joke").then(
            (z) => {
                this.setState({
                    jokes: z.data
                })
            }
        )
    }

    render() {
        return (
          <div className="container text-right mt-5">
              <Jokes setup={this.state.jokes.setup} punchline={this.state.jokes.punchline} />
          </div>
        )
    }
  }

export default App; 
