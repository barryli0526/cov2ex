import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TopicInfo } from '../../Components'
import './Item.css'

class Item extends Component {
    render() {        
        return (
            <div className="co-box co-topic">            
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.topic.member.avatar_normal} alt="user_avatar"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <Link to={`/t/${this.props.topic.id}`} className='title'>{this.props.topic.title}</Link>
                            <TopicInfo topic={this.props.topic}></TopicInfo>
                        </div>
                    </div>
                    <div className='media-right count'>
                        <span className='badge'>{this.props.topic.replies}</span>
                    </div>
                </article>
            </div>
        );
    }
}

export default Item
