// import { Button } from "antd";
// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import _ from 'lodash';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import styled from 'styled-components';
import TestImg from '../assets/images/bldg.jpg';
import { Button, Input, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SearchBar from './SearchBar';
import axios from 'axios';

const StyledMainContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    & :nth-of-type(even) {
        background-color: white;
    }
`;

const StyledContainer = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    margin-top: 2%;
    & :nth-of-type(even) {
        background-color: white;
    }
`;

const StyledInnerContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 10px;
`;

const StyledInnerColContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-top: 2%;
`;

const StyledMaskPhoto = styled.img`
    width: 270px;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin-left: 2%;
    margin-bottom: 2%;
    margin-top: 2%;
    background-color: green;
`;

const StyledSearchContainer = styled.div`
    display: flex;
    margin-top: 1%;
    justify-content: center;
`;

function ContentsHomePage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState();
    const [searchTitle, setSearchTitle] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    /** lifecycle */
    // useEffect(() => {
    //     db.on('value', function (snapshot) {
    //         setPosts(snapshot.val());
    //         console.log('yoo', snapshot.val());
    //     });
    // }, []);

    useEffect(() => {
        db.on('value', function (snapshot) {
            setData(snapshot.val());
            console.log('yoo', snapshot.val());
        });
    }, []);

    // const searchBlog = (e) => {
    //     e.preventDefault();
    //    setBlogs(
    //         blogs.filter((blog) => {
    //             blog.title.toLowerCase().includes(search.toLowerCase());
    //         })
    //     );
       
    // };

    useEffect(() => {
        setOutput([])
        data.filter(val=>{
            if(val.title.toLowerCase().includes(input.toLowerCase())) {
                setOutput(output=>[...output,val])
            }
        })

    }, [input])


    /** Render posts from firebase */
    function renderPosts() {
        return _.map(posts, (post, key) => {
            return (
                <>
                    {/* <h2>{post.title}</h2>
        <p>{renderHTML(post.body)}</p> */}
                    {/* <StyledOuterLayer> */}

                    <StyledMainContainer>
                        <StyledContainer>
                            <StyledInnerContainer>
                                <StyledMaskPhoto className="mask-photo" src={TestImg}></StyledMaskPhoto>
                                <StyledInnerColContainer>
                                    <div
                                        className="content-title"
                                        style={{
                                            marginLeft: '30px',
                                            fontSize: '20px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {/* <Link to={`/blogs/${_id}`} style={{ textDecoration: 'none' }}> */}
                                        {/* useEffect in React JS */}
                                        {/* {title} */}
                                        {/* </Link> */}
                                        {post.title}
                                    </div>
                                    <div
                                        className="content-snippet"
                                        style={{
                                            marginLeft: '30px',
                                            fontSize: '16px',
                                            width: '90%',
                                            marginTop: '2%',
                                            marginBottom: '2%',
                                            overflow: 'hidden',
                                            backgroundColor: '#f4f4f4',
                                            textOverflow: 'ellipsis',
                                            maxHeight: '100px',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '4',
                                            WebkitBoxOrient: 'vertical'
                                        }}
                                    >
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam */}
                                        {/* {headline} */}
                                        {renderHTML(post.body)}
                                        <div style={{ marginLeft: '30px' }}>
                                            {/* {createdAt !== updatedAt ? (
                                        <p>
                                            Updated by {author} at {new Date(updatedAt).toLocaleString()}
                                        </p>
                                    ) : (
                                        <p>
                                            Posted by {author} at {new Date(createdAt).toLocaleString()}
                                        </p>
                                    )} */}
                                        </div>
                                        {/* {children} */}
                                    </div>
                                    <div
                                        className="category"
                                        style={{
                                            backgroundColor: '#4EEAFF',
                                            borderRadius: '10px',
                                            color: 'black',
                                            border: 'none',
                                            fontWeight: 'bold',
                                            marginLeft: '30px',
                                            marginTop: '2%',
                                            width: '15%',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {/* React */}
                                    </div>
                                </StyledInnerColContainer>
                            </StyledInnerContainer>
                        </StyledContainer>
                    </StyledMainContainer>
                    {/* </StyledOuterLayer> */}
                </>
            );
        });
    }

    return (
        <>
            <StyledSearchContainer>
                <div>
                    <Form>
                        <Input
                            placeholder="Search. . ."
                            style={{
                                borderRadius: '50px',
                                width: '300px',
                                cursor: 'pointer'
                                // backgroundColor: '#F5F5F5'
                            }}
                            size="middle"
                            suffix={<SearchOutlined />}
                            onChange={(e) => setInput(e.target.value)}
                            
                        />
                    </Form>
                </div>
            </StyledSearchContainer>
            {/* <SearchBar posts={posts} setSearchResults={setSearchResults}/> */}
            {/* <StyledMainContainer>
                <StyledContainer>
                    <StyledInnerContainer>
                        <StyledMaskPhoto className="mask-photo" src={TestImg}></StyledMaskPhoto>
                        <StyledInnerColContainer>
                            <div
                                className="content-title"
                                style={{
                                    marginLeft: '30px',
                                    fontSize: '20px',
                                    fontWeight: 'bold'
                                }}
                            > */}
            {/* <Link to={`/blogs/${_id}`} style={{ textDecoration: 'none' }}> */}
            {/* useEffect in React JS */}
            {/* {title} */}
            {/* </Link> */}

            {/* { _.map(posts, (post, key) => {return ( <div key={key}> </div> ) }) }
                            </div>
                            <div
                                className="content-snippet"
                                style={{
                                    marginLeft: '30px',
                                    fontSize: '16px',
                                    width: '90%',
                                    marginTop: '2%',
                                    marginBottom: '2%',
                                    overflow: 'overflow',
                                    backgroundColor: '#f4f4f4',
                                    textOverflow: 'ellipsis'
                                }}
                            > */}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam */}
            {/* {headline} */}
            {/* <div style={{ marginLeft: '30px' }}> */}
            {/* {createdAt !== updatedAt ? (
                                        <p>
                                            Updated by {author} at {new Date(updatedAt).toLocaleString()}
                                        </p>
                                    ) : (
                                        <p>
                                            Posted by {author} at {new Date(createdAt).toLocaleString()}
                                        </p>
                                    )} */}
            {/* </div> */}
            {/* {children} */}
            {/* </div>
                            <div className='category'
                                style={{
                                    backgroundColor: '#4EEAFF',
                                    borderRadius: '10px',
                                    color: 'black',
                                    border: 'none',
                                    fontWeight: 'bold',
                                    marginLeft: '30px',
                                    marginTop: '2%',
                                    width: '15%',
                                    textAlign: 'center'
                                }}
                            > */}
            {/* React */}
            {/* </div>
                        </StyledInnerColContainer>
                    </StyledInnerContainer>
                </StyledContainer> */}
            {/* <StyledContainer>
          <StyledInnerContainer>
            <StyledMaskPhoto
              className="mask-photo"
              src={TestImg}
            ></StyledMaskPhoto>
            <StyledInnerColContainer>
              <div
                className="content-title"
                style={{
                  marginLeft: "30px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                useEffect in React JS
              </div>
              <div
                className="content-snippet"
                style={{
                  marginLeft: "30px",
                  fontSize: "16px",
                  width: "90%",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
              <div
                style={{
                  backgroundColor: "#4EEAFF",
                  borderRadius: "10px",
                  color: "black",
                  border: "none",
                  fontWeight: "bold",
                  marginLeft: "30px",
                  marginTop: "2%",
                  width: "15%",
                  textAlign: "center",
                }}
              >
                React
              </div>
            </StyledInnerColContainer>
          </StyledInnerContainer>
        </StyledContainer> */}
            {/* </StyledMainContainer> */}
            {/* {renderPosts()} */}
            <div>
            {output.map(item => (
                <p>{item.title}</p>
            ))}
            </div>
        </>
    );
}

export default ContentsHomePage;
