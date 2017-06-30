import React, { Component } from 'react';
import {Common} from '../../Utils';
import './index.css'

export default class TopicInfo extends Component {

  render() {
    return(
      <div className='infos'>
        <a className='separator title' href={this.props.topic.node.url}>{this.props.topic.node.title}</a>
          •
        <strong><a href="/#" className='separator'>{this.props.topic.member.username}</a></strong>
          •
        <span className='separator'>{Common.formatDateTime(this.props.topic.created)}</span>
      </div>
    );
  }
}
