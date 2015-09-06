import React from 'react';

export default class CommunityListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="topic-list__item">
        <h4>
          <a className="topic-list__linked" href={this.props.topic.slug}>
            {this.props.topic.title}
          </a>
        </h4>
        <img className="topic-list__avatar" src={this.props.user.avatar_template} />
        <span className="topic-list__author">{this.props.user.username}</span>
      </li>
    );
  }
}
