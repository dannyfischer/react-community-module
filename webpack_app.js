import React from 'react';
import Community from './components/Community';
import Typer from './components/Typer';

const config = {
  host: 'https://kreation.io',
  displayCount: 4,
  avatarSize: 50,
  tabs: [
    {
      id: 0,
      name: 'Neuste',
      url: 'https://kreation.io/latest.json'
    },
    {
      id: 1,
      name: 'Beliebte',
      url: 'https://kreation.io/top/all.json'
    },
    {
      id: 2,
      name: 'Development',
      url: 'https://kreation.io/c/development.json'
    },
    {
      id: 3,
      name: 'Design & UX',
      url: 'https://kreation.io/c/design-ux.json'
    }
  ]
};

React.render(<Community source={config}/>, document.getElementById('community'));
