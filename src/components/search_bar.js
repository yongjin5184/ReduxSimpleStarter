import React, { Component } from 'react';
//const Component = React.Component;

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term : '' };
    }

    render (){
        return (
            <div>
              <input
                  value={this.state.term}
                  onChange={event => this.setState({ term : event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;