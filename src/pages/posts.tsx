import React, { useState } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import { PostType } from '../store/posts/types';
import { CommentType } from '../store/comments/types';
import '../App.css';

interface PostState {
    post?: PostType;
    loaded: boolean;
    preComment: string;
}

const Posts = (props: {
    posts: PostType[],
    comments: CommentType[],
    onAddComment: (postId: number, comment: string) => void,
}) => {
    const history = useHistory();
    const id = parseInt(useParams<{ id: string }>().id);


    const [state, setState] = useState<PostState>({
        loaded: props.posts.length > 0,
        post: props.posts.length > 0 ? props.posts.find(x => x.id === id) : undefined,
        preComment: ''
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setState({
        ...state,
        preComment: e.target.value
    });

    const onCommentSubmit = () => {
        props.onAddComment(id, state.preComment);

        setState({
            ...state,
            preComment: ''
        });
    }

    state.loaded && !state.post && history.push('/404')

    let comments = ['Nice post!'];

    const commentsFromParent = props.comments.find(x => x.postId === id)

    commentsFromParent && (comments = [...commentsFromParent.comments, ...comments])

    return (
        <section>
            <div className="container">
                <div className="row center-xs">
                    {state.loaded
                        ?
                        <div className="col-xs-3">
                            <Link to="/">Back</Link>
                            <div className="post-card">
                                <h3>
                                    {state.post!.title}
                                </h3>
                                <p className="post-card__content">
                                    {state.post!.body}
                                </p>
                            </div>
                            <div className="add-comment-wrapper">
                                <input className="add-comment-btn"
                                    type="text"
                                    value={state.preComment}
                                    onChange={onInputChange}
                                />
                                <button className="add-comment-btn cursor-pointer" onClick={onCommentSubmit}>
                                    Add comment
                                </button>
                                {comments.map(comment =>
                                    <p
                                        key={comment}
                                        className="post-comment"
                                    >{"Anonymous: " + comment}</p>
                                )}
                            </div>
                        </div>
                        : <h2>Loading..</h2>
                    }
                </div>
            </div>
        </section>
    )
}
export default Posts