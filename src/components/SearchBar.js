import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import _ from 'lodash';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import styled from 'styled-components';
import TestImg from '../assets/images/bldg.jpg';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const StyledSearchContainer = styled.div`
    display: flex;
    margin-top: 1%;
    justify-content: center;
`;


const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <>
        <StyledSearchContainer>
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
                onChange={handleSearchChange}
            />
        </div>
    </StyledSearchContainer>
    </>
    )
}
export default SearchBar;