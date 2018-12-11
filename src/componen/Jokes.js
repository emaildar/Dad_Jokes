import React, { Component } from 'react';

class Jokes extends Component {
    render() {
        return (
            <div className="card mx-auto w-50">
                <div className="card-body">
                    <h5 className="card-title">{this.props.setup}</h5>
                    <p className="card-text">{this.props.punchline}</p>
                    <p><span role='img' aria-label="cuaca">😂</span></p>
                    <a href="reload" class="btn btn-danger" onClick={() => { window.location.reload() }}>Reload <i><span role='img' aria-label="cuaca">🌀</span></i></a>
                </div>
            </div>
        )
    }
}

export default Jokes;