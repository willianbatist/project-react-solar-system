import React, { Component } from 'react';
import Title from './Title';
import Planetcard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const listPlanet = planets.map(({ name, image }) => (
      <Planetcard
        key={ name }
        planetName={ name }
        planetImage={ image }
      />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { listPlanet }
      </div>
    );
  }
}

export default SolarSystem;
