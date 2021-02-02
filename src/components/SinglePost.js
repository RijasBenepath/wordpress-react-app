import axios from "axios";
import  React from "react";
class SinglePost extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        loading: false,
        post: {},
        error: '',
    }
}

    componentDidMount() {
        
        const wordPressSiteUrl = 'https://benepath.net';
        this.setState( { loading: true }, () => (
            axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts/${this.props.id}`)
            .then(res => {
                this.setState({
                        loading: false,
                        post: res.data
                    })
                })
                .catch( error => this.setState({
                    loading: false,
                    error: 'error'
                }))
        ))
    }
    


    render() {

        const { post} = this.state
        return (
            <div>
                {Object.keys(post).length ? (
                   <div>
                        {post.title.rendered}
                       </div>
                ) : ''}    
            </div>
        )
    }
}
export default SinglePost