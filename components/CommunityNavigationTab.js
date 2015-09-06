import React from 'react/addons';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class CommunityNavigationTab extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }

  render() {
    return (
      <li className={this.props.isCurrent ?
          'tab-list__item tab-list__item--active' :
          'tab-list__item'} onClick={this.handleClick.bind(this)}>
          {this.props.name}
          {this.props.isCurrent ?
            <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true}>
              <span className="tab-list__item-sub">Themen</span>
            </ReactCSSTransitionGroup> :
            false}
      </li>
    );
  }
}
