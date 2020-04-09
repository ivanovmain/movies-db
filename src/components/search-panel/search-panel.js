import React, { Component } from 'react';
import './search-panel.scss';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: ''
    };
    this.onChange = (e) => {
      this.setState({
        label: e.target.value
      });

    }
  }

  render() {
    return (
      <div className="SearchPanel">
        {this.state.label}
        <input
          type="text"
          placeholder="Movie search"
          onChange={this.onChange}
          value={this.state.label}
        />
      </div>
    )
  }
}