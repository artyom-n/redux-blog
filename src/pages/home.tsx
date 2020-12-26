import React from 'react';
import { Link } from 'react-router-dom';
import { PostType } from '../store/posts/types';
import 'flexboxgrid';

const Home = (props: { posts: PostType[] }) => { 
    return (
        <section>
            <div className="container">
                <div className="row center-xs">
                    <div className="col-xs-4">
                        {props.posts.map(post =>
                            <Link to={"./posts/" + post.id} className="post-href">
                                <div key={post.id} className="post-card">
                                    <h3>{post.title}</h3>                                                               
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;