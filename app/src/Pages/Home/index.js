import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../Actions'
import Item from './Item'
import './index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    let tab = 'latest'
    this.props.actions.fetchTopics({ node_name: tab })
  }
  render() {
    let listItems = [];
    if (this.props.topics && this.props.topics.length > 0) {
      listItems = this.props.topics.map(function (topic) {
        return (
          <Item key={topic.id} topic={topic}></Item>
        );
      });
    }
    return (
      <div className="co-topic-list">
        {listItems}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let topics = state.Topics.payload
  if (topics) {
    return {
      topics: topics
    }
  }
  return { topics: [] }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
