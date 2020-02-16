import React from 'react';
import Relaks, { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

async function PlanetList(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const planets = await swapi.fetchList('/planets/');
  render();

  planets.more();

  function render() {
    if (!planets) {
      show(<Loading />);
    } else {
      show(
        <div>
          <h1>Planets</h1>
          <List items={planets} pageName="planet-summary" route={route} />
        </div>
      );
    }
  }
}

const component = Relaks.memo(PlanetList);

export {
  component as default,
};
