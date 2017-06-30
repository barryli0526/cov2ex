import React, { Component } from 'react'
import TopicInfo from '../TopicInfo'
import { Link } from 'react-router-dom'
import '../../Stylesheets/Markdown.css'
import './index.css'

class Content extends Component {
  render() {
    const isEmpty = !(this.props.topic)
    
    return (
      <div className="co-topic-detail">
        {!isEmpty &&
          <div className="co-topic-detail-wrap">
            <div className="co-topic-header">
                <div className="co-left">
                    <Link to="/">V2EX</Link>
                    <span className="chevron">&nbsp;&nbsp;›&nbsp;&nbsp;</span>
                    <a href="/#">{this.props.topic.node.title}</a>
                    <h1 className="topic-title">{this.props.topic.title}</h1>
                    <div className="small-gray"><TopicInfo topic={this.props.topic} /></div>
                </div>
                <div className="co-right">
                    <img src={this.props.topic.member.avatar_large} alt=""/>
                </div>
            </div>
             <div className="co-topic-content markdown">
              <span dangerouslySetInnerHTML={{ __html: this.props.topic.content_rendered}} />
            </div>
            <div className="co-topic-footer">
              <a href="/#" className="co-topic-btn">加入收藏</a>
              <a href="/#" className="co-topic-btn">Tweet</a>
              <a href="/#" className="co-topic-btn">Weibo</a>
              <a href="/#" className="co-topic-btn">忽略主题</a>
              <a href="/#" className="co-topic-btn">感谢</a>
            </div>
          </div>
         
        }
        {isEmpty && <h1>Loading....</h1>}
      </div>
    );
  }
}

export default Content
