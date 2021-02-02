import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

class Home extends React.Component {

constructor( props ) {
    super ( props );
    
    this.state = {
        loading: false,
        posts: [],
        error: '',
    }
}

componentDidMount() {
    const wordPressSiteUrl = 'https://benepath.net';
    this.setState( { loading: true }, () => {
        axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/posts`)
        .then( res => {
           //console.warn(res.data);
            this.setState( { 
                loading: false, 
                posts: res.data })
        })
        .catch( error => this.setState({ 
            loading: false, 
            error: 'error.response.data'
        }))
    } )
}

    render() {

       // console.warn( 'state', this.state );
       const { posts, loading } = this.state
       
        return (
            <div>
            
              {posts.length ? (
                  <div>
                      {posts.map( post => (
                          <div key={post.id}>
                              {post.title.rendered}
                              {post.content.rendered}
                              <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
                          </div>
                      ))}
                      </div>
              ) : 'No Data'}
              { loading &&  <div id="preloader"><div class="status">&nbsp;</div></div>}
            </div>
        )
    }
}
export default Home