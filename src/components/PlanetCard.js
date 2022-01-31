import { React, Component } from 'react';
import { PropTypes } from 'prop-types';

class Planetcard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="Planetcard" data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img className="square" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>

    );
  }
}

Planetcard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default Planetcard;
