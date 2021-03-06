import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PostsState, PostType } from '../store/posts/types';
import 'flexboxgrid';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Home = () => {

    const postsState = useSelector<RootState, PostsState>(state => state.postsState)

    const [filteredPosts, setFilteredPosts] = useState<PostType[]>([])
    const [tagValue, setTagValue] = useState("")
    const [tag, setTag] = useState("")
    const [tag1, setTag1] = useState("")

    const { posts } = postsState

    useEffect(() => {
        const allPosts = [...posts]
        setFilteredPosts(allPosts.filter(item => (item.title).includes(tag)).map(item => item))
    }, [tag])

    useEffect(() => {
        const allPosts = [...posts]
        setFilteredPosts(allPosts.filter(item => parseInt(item.userId) === parseInt(tag1)).map(item => item))
    }, [tag1])

    useEffect(() => {
        filteredPosts.length < 1 && setFilteredPosts(posts)
    })

    return (
        <section>
            <div className="container">
                <div className="row center-xs">
                    <div className="col-xs-3 tags-wrapper">
                        <button className="tag-btn" onClick={() => setTag1("1")}>sport</button>
                        <button className="tag-btn" onClick={() => setTag1("2")}>music</button>
                        <button className="tag-btn" onClick={() => setTag1("3")}>design</button>
                        <button className="tag-btn" onClick={() => setTag1("4")}>books</button>
                        <button className="tag-btn" onClick={() => setTag1("5")}>culture</button>
                        <button className="tag-btn" onClick={() => setTag1("6")}>history</button>
                        <button className="tag-btn" onClick={() => setTag1("7")}>coding</button>
                        <button className="tag-btn" onClick={() => setTag1("8")}>auto</button>
                        <button className="tag-btn" onClick={() => setTag1("9")}>news</button>
                        <button className="tag-btn" onClick={() => setTag1("10")}>art</button>
                    </div>
                </div>
                <div className="row center-xs">
                    <div className="col-xs-4">
                        <div className="search-input">
                            <input
                                className="tag-input add-comment-btn"
                                type="text"
                                value={tagValue}
                                onChange={(e) => {
                                    setTagValue(e.target.value)
                                }}
                            />
                            <button className="add-comment-btn cursor-pointer" onClick={() => {
                                setTag(tagValue)
                                setTagValue("")
                            }}>
                                Search
                        </button>
                        </div>

                        {filteredPosts.map(post =>
                            <Link to={"./posts/" + post.id} className="post-href" key={post.id}>
                                <div key={post.id} className="post-card">
                                    <h3>{post.title}</h3>
                                    <div className="post-tag-wrapper">
                                        <div className="post-tag">
                                            {"Tag: "}
                                            {parseInt(post.userId) === 1 && "sport"}
                                            {parseInt(post.userId) === 2 && "music"}
                                            {parseInt(post.userId) === 3 && "design"}
                                            {parseInt(post.userId) === 4 && "books"}
                                            {parseInt(post.userId) === 5 && "culture"}
                                            {parseInt(post.userId) === 6 && "history"}
                                            {parseInt(post.userId) === 7 && "coding"}
                                            {parseInt(post.userId) === 8 && "auto"}
                                            {parseInt(post.userId) === 9 && "news"}
                                            {parseInt(post.userId) === 10 && "art"}
                                        </div>
                                    </div>
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