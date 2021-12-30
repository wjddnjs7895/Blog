/** @jsxImportSource @emotion/react */
import React, {useState, useCallback, useEffect} from 'react';
import styled from '@emotion/styled';
import {animated, useSprings, interpolate} from 'react-spring';
import produce from 'immer';

import logo_github from '../../assets/introduce/logo_github.png';
import logo_boj from '../../assets/introduce/logo_boj.png';
import logo_mbti from '../../assets/introduce/logo_mbti.png';
import logo_self from '../../assets/introduce/logo_self.png';

var size = [
    window.innerHeight - 500,
    window.innerWidth - 500, 
]

const urls = [logo_self, logo_boj, logo_github, logo_mbti];

const BlockStyle = styled(animated.div)`
    position : absolute;
    width : 12rem;
    height : 19.5rem;    
    padding-top : 1rem;
    padding-left : 1rem;
    padding-right : 1rem;
    padding-bottom : 5rem;
    background-image : url(${(props) => props.url});
    background-size : cover;
    border : solid 1px;
    border-color : rgba(50,50,50,0.8);
    transform : scale(1.0);
    transition-duration : 1s;
    cursor : pointer;
    z-index : ${(props) => props.mouse ? 5 : props.id}
`;

let pos_array = [];

const getpos = () => {
    for (let i = 0; i < 4; i++) {
        pos_array.push({x : getRandomPos(0, i), y : getRandomPos(1, i), deg : getRandomDeg()});
    }
}

const getRandomPos = (axis, idx) => {
    let min = 0;
    let max = size[axis];
    let temp = parseInt(Math.random() * (max-min) + min);
    if (axis === 1) {
        min = (size[axis] / urls.length) * idx;
        max = (size[axis] / urls.length) * (idx + 0.5);
        console.log(idx)
        console.log(min)
        console.log(max)
    }

    temp = parseInt(Math.random() * (size[axis] / urls.length) + min);
    return temp;
}

const getRandomDeg = () => {
    let min = -70;
    let max = 70;
    return Math.random() * (max - min) + min;
}

getpos();
console.log(pos_array)
const Block = () => {
    const [blocks,setBlocks] = useState([
        {
            id : 0,
            title : '인적사항',
            content : '이름, 나이, 학교',
            top : pos_array[0].x,
            left : pos_array[0].y,
            degree : pos_array[0].deg,
            src : logo_self,
            mouse : false,
         },
        {
            id : 1,
            title : '백준',
            content : '아이디, 티어',
            top : pos_array[1].x,
            left : pos_array[1].y,
            degree : pos_array[1].deg,
            src : logo_boj,
            mouse : false,
        },
        {
            id : 2,
            title : '깃허브',
            content : '아이디',
            top : pos_array[2].x,
            left : pos_array[2].y,
            degree : pos_array[2].deg,
            src : logo_github,
            mouse : false,
        },
        {
            id : 3,
            title : 'MBTI',
            content : 'ENFP',
            top : pos_array[3].x,
            left : pos_array[3].y,
            degree : pos_array[3].deg,
            src : logo_mbti,
            mouse : false,
        },
    ]);
    
    const to = i => ({x : blocks[i].left, y : blocks[i].top, degree : blocks[i].mouse ? 0 : blocks[i].degree, delay : i*1000, friction : 0, tension : 10, velocity : 5000});
    const from = i => ({x : size[1]/2, y : size[0]/2, degree : 0})
    const [props, set] = useSprings(blocks.length, i => ({
        ...to(i), 
        from : from(i)
    }));

    const onMouse = 
        (i, temp) => {
            setBlocks(
                produce(blocks,draft => {
                    const block = draft.find(block => block.id === i);
                    block.mouse = temp;
                })
            );
        };
    
    return (
        props.map(({x,y,degree,},i) => ( 
            <BlockStyle
                onMouseEnter = {() => onMouse(i, true)}
                onMouseLeave = {() => onMouse(i, false)}
                style = {{ 
                    transform : interpolate([x, y, degree],(x , y, degree) => `
                        translate3d(${x}px,${y}px,0) 
                        rotate(${blocks[i].mouse ? 0 : degree}deg) 
                        scale(${blocks[i].mouse ? 1.1 : 1}
                    `),
                }}
                id = {blocks[i].id}
                top = {blocks[i].top}
                left = {blocks[i].left}
                key = {blocks[i].id}
                degree = {blocks[i].degree}
                url = {urls[blocks[i].id]}
                mouse = {blocks[i].mouse}
            />
        ))
    );
}

export default Block;