

import React, { useState } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import ContentsHomePage from './ContentsHomePage';

const StyledContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    margin-top: 5%;
    justify-content: center;
`;

const StyledContentsHomepage = styled.div`
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    display: flex;
    margin-top: 3%;
    justify-content: center;
    align-items: center;
    
`;
const StyledSearchContainer = styled.div`
    display: flex;
    margin-top: 1%;
    justify-content: center;
`;
const StyledButtonsHero = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2%;
    margin-bottom: 3%;
`;


function HomePage() {

    const [searchTitle, setSearchTitle] = useState("");
    

    return (
        <>
            <StyledContainer>
                <div
                    style={{
                        fontSize: '25px',
                        fontWeight: '200px'
                    }}
                >
                    Arrianne Blog
                </div>
            </StyledContainer>
            {/* <StyledSearchContainer>
                <div>
                    <Input
                        placeholder="Search. . ."
                        style={{
                            borderRadius: '50px',
                            width: '300px',
                            cursor: 'pointer',
                            // backgroundColor: '#F5F5F5'
                        }}
                        size="middle"
                        suffix={<SearchOutlined />}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                </div>
            </StyledSearchContainer> */}
            <StyledButtonsHero>
                <Button
                    shape="round"
                    style={{
                        backgroundColor: '#FFED4E',
                        borderRadius: '10px',
                        color: 'black',
                        border: 'none',
                        fontWeight: 'bold',
                        marginRight: '1%'
                    }}
                    size="small"
                >
                    Agriculture
                </Button>
                <Button
                    shape="round"
                    style={{
                        backgroundColor: '#4EEAFF',
                        borderRadius: '10px',
                        color: 'black',
                        border: 'none',
                        fontWeight: 'bold',
                        marginRight: '1%'
                    }}
                    size="small"
                >
                    React
                </Button>

                <Button
                    shape="round"
                    style={{
                        backgroundColor: '#9BFFAB',
                        borderRadius: '10px',
                        color: 'black',
                        border: 'none',
                        fontWeight: 'bold',
                        marginRight: '1%'
                    }}
                    size="small"
                >
                    JavaScript
                </Button>

                <Button
                    shape="round"
                    style={{
                        backgroundColor: '#FB4EFF',
                        borderRadius: '10px',
                        color: 'black',
                        border: 'none',
                        fontWeight: 'bold',
                        marginRight: '1%'
                    }}
                    size="small"
                >
                    AWS
                </Button>

                <Button
                    shape="round"
                    style={{
                        backgroundColor: '#3FBC96',
                        borderRadius: '10px',
                        color: 'black',
                        border: 'none',
                        fontWeight: 'bold',
                        marginRight: '1%'
                    }}
                    size="small"
                >
                    Math
                </Button>
            </StyledButtonsHero>
            <StyledContentsHomepage>
                {/* {blogs.length === 0 && (
                    <p>
                        There are no blogs yet, you should <Link to="/edit">post</Link> one.
                    </p>
                )}

                {blogs.map((blog, index) => {
                    return (
                        <div key={index}>
                            <BlogPreview _id={blog._id} title={blog.title} headline={blog.headline} author={(blog.author as IUser).name} createdAt={blog.createdAt} updatedAt={blog.updatedAt} />
                        </div>
                    );
                })} */}

                <ContentsHomePage/>
            </StyledContentsHomepage>

        </>
    );
};

export default HomePage;
