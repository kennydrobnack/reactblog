import React, { Component } from 'react'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import './Blog.css'
import { Route, NavLink, Switch } from 'react-router-dom'

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                </Switch>
            </div>
        )
    }
}

export default Blog