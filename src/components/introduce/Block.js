/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import {animated, useSprings, interpolate} from 'react-spring';

import logo_github from '../../assets/introduce/logo_github.png';
import logo_boj from '../../assets/introduce/logo_boj.png';
import logo_mbti from '../../assets/introduce/logo_mbti.svg';
import logo_self from '../../assets/introduce/logo_self.png';

const BlockStyle = styled(animated.div)`
    position : absolute;
    width : 14rem;
    height : 16rem;    
    // top : ${props => props.top || '30vh'};
    // left :${props => props.left || '30vw'};
    padding-top : 1rem;
    padding-left : 1rem;
    padding-right : 1rem;
    padding-bottom : 5rem;
    background-color : white;
    border : 1px solid rgba(0, 0, 0, 0.3);
    box-shadow : 3px 6px 12px rgba(0, 0, 0, 0.3);
    
    transform : scale(1.0);
    transition-duration : 1s;
    transform : rotate(${props => props.degree || '45deg'});
    &:hover {
        z-index : 1;
        transform : scale(1.2);
        transition-duration : 1s;
    }

    .title {
        color : black;
    }
`;

const PictureStyle = styled.img`
    border : 1px solid rgba(0, 0, 0, 0.3);
    height : 100%;
    width : 100%;
    margin : auto 0;
`;

var pos_array = [];

const getRandomPos = (axis) => {
    let min = 10;
    let max = 1000;
    let temp = parseInt(Math.random() * (max-min) + min);
    if (axis === 0) 
        pos_array.push([0,0]);
    while (true) {
        let flag = 1;
        if (pos_array.length === 1)
            break;
        temp = parseInt(Math.random() * (max - min) + min);
        for (let i = 0; i < pos_array.length - 1; i++) {
            if (Math.abs(pos_array[i][axis] - temp) < 10) {
                flag = 0;
                break;
            }
        }
        if(flag) {
            pos_array[pos_array.length - 1][axis] = temp;
            console.log(temp);
            return temp;
        }
    }
    pos_array[pos_array.length - 1][axis] = temp;
    return temp;
}

const getRandomDeg = () => {
    let min = -70;
    let max = 70;
    return Math.random() * (max - min) + min;
}

const blocks = [
    {
        id : 1,
        title : '인적사항',
        content : '이름, 나이, 학교',
        top : getRandomPos(0),
        left : getRandomPos(1),
        degree : String(getRandomDeg())+'deg',
        src : logo_self,
     },
    {
        id : 2,
        title : '백준',
        content : '아이디, 티어',
        top : getRandomPos(0),
        left : getRandomPos(1),
        degree : String(getRandomDeg())+'deg',
        src : logo_boj,
    },
    {
        id : 3,
        title : '깃허브',
        content : '아이디',
        top : getRandomPos(0),
        left : getRandomPos(1),
        degree : String(getRandomDeg())+'deg',
        src : logo_github,
    },
    {
        id : 4,
        title : 'MBTI',
        content : 'ENFP',
        top : getRandomPos(0),
        left : getRandomPos(1),
        degree : String(getRandomDeg())+'deg',
        src : logo_mbti,
    },
];

const to = i => ({x : blocks[i].left, y : blocks[i].top, delay : 1000});
const from = i => ({x : 0, y : 0})

const Block = (title, content) => {
    const [props, set] = useSprings(4, i => ({...to(i), from : from(i)}))
    return (
        props.map(({x,y,},i) => (
            <BlockStyle
                style = {{ transform: interpolate([x, y],(x , y) => `translate3d(${x}px,${y}px,0)`) }}
                top = {blocks[i].top}
                left = {blocks[i].left}
                key = {blocks[i].id}
                degree = {blocks[i].degree}
            >
                <PictureStyle src = {blocks[i].src}/>
                    <div className = 'title'>
                        Title : {blocks[i].title}
                    </div>
            </BlockStyle>
        ))
    );
}

export default Block;