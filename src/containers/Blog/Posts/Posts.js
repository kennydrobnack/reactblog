import React, { Component } from 'react'
import './Posts.css'
import Post from '../../../components/Post/Post'
import axios from '../../../axios'

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id })
    }

    componentDidMount() {
        axios.get('/posts').then(
            response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts })
            })
            .catch(error => {
                this.setState({ error: true })
            })
    }


    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post title={post.title} key={post.id} author={post.author} clicked={() => this.postSelectedHandler(post.id)} />
            })
        }

        return (
            <section className="Posts">
            {posts}
        </section>
        )
    }
}
export default Posts