import React, { useState } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import { PostsState, PostType } from '../store/posts/types';
import { CommentsState } from '../store/comments/types';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setComment } from '../store/comments/actions';
import { useEffect } from 'react';

type State = {
    loaded: boolean,
    post: PostType | undefined,
    preComment: string
}

const Posts = () => {

    const postsState = useSelector<RootState, PostsState>(state => state.postsState)
    const commentsState = useSelector<RootState, CommentsState>(state => state.commentsState)
    const dispatch = useDispatch()
    const history = useHistory();

    let id = parseInt(useParams<{ id: string }>().id);

    const { posts } = postsState

    let initialState = {
        loaded: posts.length > 0,
        post: posts.length > 0 ? posts.find(x => x.id === id) : undefined,
        preComment: ""
    }
   
    const [state, setState] = useState<State>(initialState)

    useEffect(() => {
        setState(initialState)
    },[])

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setState({
        ...state,
        preComment: e.target.value
    });

    const onAddComment = (postId: number, comment: string) => {
        const post = commentsState.comments.find(x => x.postId === postId)

        post
            ?
            (post.comments = [comment, ...post.comments])
            :
            (dispatch(setComment([...commentsState.comments, { postId: postId, comments: [comment] }])))
    };

    const onCommentSubmit = () => {
        onAddComment(id, state.preComment);

        setState({
            ...state,
            preComment: ''
        });
    }

    state.loaded && !state.post && history.push('/404')

    const currentPostComments = [...commentsState.comments.filter(item => item.postId === id).map(item => item.comments)]

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
                                {currentPostComments.length === 1 && currentPostComments[0].map((item, i) =>
                                    <p key={i}
                                        className="post-comment"
                                    >
                                        Anonymous:{item}
                                    </p>
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