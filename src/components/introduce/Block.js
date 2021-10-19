/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';
import styled from '@emotion/styled';

const BlockStyle = styled.div`
    position : absolute;
    top : ${props => props.top || '30rem'};
    left : ${props => props.left || '30rem'};
    width : 10rem;
    height : 10rem;
    background-color : gray;
    border : 3px solid black;
    &:hover {
        transform : scale(1.2);
        transition-duration : 1s;
    }
    transform : scale(1.0);
    transition-duration : 1s;
    transform : rotate(${props => props.degree || '45deg'});
`;

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}


const Block = (title, content) => {
    const [blocks, setBlocks] = useState([
        {
            id : 1,
            title : '인적사항',
            content : '이름, 나이, 학교',
            top : String(getRandom(10,80))+'vh',
            left : String(getRandom(10,80))+'vw',
            degree : String(getRandom(-90,90))+'deg',
        },
        {
            id : 2,
            title : '백준',
            content : '아이디, 티어',
            top : String(getRandom(10,80))+'vh',
            left : String(getRandom(10,80))+'vw',
            degree : String(getRandom(-90,90))+'deg',
        },
        {
            id : 3,
            title : '깃허브',
            content : '아이디',
            top : String(getRandom(10,80))+'vh',
            left : String(getRandom(10,80))+'vw',
            degree : String(getRandom(-90,90))+'deg',
        },
        {
            id : 4,
            title : 'MBTI',
            content : 'ENFP',
            top : String(getRandom(10,80))+'vh',
            left : String(getRandom(10,80))+'vw',
            degree : String(getRandom(-90,90))+'deg',
        },
    ]);
    return (
        <div>
            {blocks.map(block => (
                <BlockStyle 
                    top = {block.top}
                    left = {block.left}
                    degree = {block.degree}
                >
                    TITLE : {block.title}
                    <br/>
                    CONTENT : {block.content}
                </BlockStyle>
            ))}
        </div>
    );
}

export default Block;