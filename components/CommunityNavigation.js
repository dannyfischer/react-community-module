import React from 'react';
import CommunityNavigationTab from './CommunityNavigationTab';

export default class CommunityNavigation extends React.Component {

  handleClick(tab) {
    this.props.changeTab(tab);
  }

  render() {
    return (
      <nav className='tab-navigation'>
        <ul className='tab-list'>
          {this.props.tabList.map((tab) => {
            return (
              <CommunityNavigationTab
                handleClick={this.handleClick.bind(this, tab)} isCurrent={(this.props.currentTab === tab.id)}
                key={tab.id}
                name={tab.name}
                url={tab.url}
                />
            );
          }.bind(this))}
        </ul>
      </nav>
    );
  }
}
