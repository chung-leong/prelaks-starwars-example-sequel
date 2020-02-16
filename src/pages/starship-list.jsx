import React from 'react';
import Relaks, { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

async function StarshipList(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const starships = await swapi.fetchList('/starships/');
  render();

  starships.more();

  function render() {
    if (!starships) {
      show(<Loading />);
    } else {
      show(
        <div>
          <h1>Starships</h1>
          <List items={starships} pageName="starship-summary" route={route} />
        </div>
      );
    }
  }
}

const component = Relaks.memo(StarshipList);

export {
  component as default,
};
