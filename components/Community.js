import React from 'react';
import CommunityNavigation from './CommunityNavigation';
import CommunityListItem from './CommunityListItem';

export default class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTopics: [],
      allUsers: [],
      currentSource: '',
      tabList: this.props.source.tabs,
      currentTab: 1
    };
    this.changeTab = this.changeTab.bind(this);
  }

  componentDidMount() {
    this.loadCommunityTopics();
  }

  loadCommunityTopics(feed = this.state.tabList[this.state.currentTab].url) {
    let entry = [];
    let users = [];

    $.get(feed, (response) => {
      for (var index = 0; index < this.props.source.displayCount; index++) {
        let thisTopic = response.topic_list.topics[index];

        thisTopic.slug = this.props.source.host + '/t/' + thisTopic.slug + '/' + thisTopic.id;
        entry.push(thisTopic);
      }

      for (var index = 0; index < response.users.length; index++) {
        let thisUser = response.users[index];
        thisUser.avatar_template = this.props.source.host + thisUser.avatar_template.replace('{size}', this.props.source.avatarSize);
        users.push(thisUser);
      }

      this.setState({
        allTopics: entry,
        allUsers: users
      });
    }.bind(this));
  }


  changeTab(tab) {
    // Prevent unnecessary JSON requests by clicking the already active tab.
    if(tab.id != this.state.currentTab) {
    this.setState({
      currentTab: tab.id,
      currentSource: tab.url
    });
    this.loadCommunityTopics(tab.url);
  }
  }


  render() {
    let topicComponents = [];
    for (var index = 0; index < this.state.allTopics.length; index++) {
      let thisTopic = this.state.allTopics[index];

      let thisUser = this.state.allUsers.filter((user) => {
        return user.id === thisTopic.posters[0].user_id;
      });

      topicComponents.push(<CommunityListItem key={index} topic={thisTopic} user={thisUser[0]}/>);
    }


    return (
      <div>
        <CommunityNavigation
          changeTab={this.changeTab}
          currentTab={this.state.currentTab}
          tabList={this.state.tabList}
          />
        <ul className='topic-list'>
          {topicComponents}
        </ul>
      </div>
    );
  }
  }
