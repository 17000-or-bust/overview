import React from 'react';

class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex', paddingTop: '15px' }}>
        {this.props.doodles[this.props.index + 3]}
        <div style={this.props.boldText}>{this.props.title}</div>
      </div>
      <div style={this.props.subText}>{}</div>
    </div>
    );
  }
}

export default RestaurantInfo;
