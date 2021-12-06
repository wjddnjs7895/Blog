/** @jsxImportSource @emotion/react */
import React, {useState, useCallback, useEffect} from 'react';
import styled from '@emotion/styled';
import {animated, useSprings, interpolate} from 'react-spring';
import produce from 'immer';

import logo_github from '../../assets/introduce/logo_github.png';
import logo_boj from '../../assets/introduce/logo_boj.png';
import logo_mbti from '../../assets/introduce/logo_mbti.svg';
import logo_self from '../../assets/introduce/logo_self.png';

var size = [
    window.innerHeight - 500,
    window.innerWidth - 500, 
]

const BlockStyle = styled(animated.div)`
    position : absolute;
    width : 14rem;
    height : 16rem;    
    padding-top : 1rem;
    padding-left : 1rem;
    padding-right : 1rem;
    padding-bottom : 5rem;
    background-color : white;
    border : 1px solid rgba(0, 0, 0, 0.1);
    box-shadow : 3px 6px 12px rgba(0, 0, 0, 0.3);
    transform : scale(1.0);
    transition-duration : 1s;
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

let pos_array = [];

const getpos = () => {
    for (let i = 0; i < 4; i++) {
        pos_array.push({x : getRandomPos(0), y : getRandomPos(1), deg : getRandomDeg()});
    }
}

const getRandomPos = (axis) => {
    let min = 0;
    let max = size[axis];
    let temp = parseInt(Math.random() * (max-min) + min);
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
            return temp;
        }
    }
    return temp;
}

const getRandomDeg = () => {
    let min = -70;
    let max = 70;
    return Math.random() * (max - min) + min;
}

getpos();
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

    const onClick = 
        (i) => {
            setBlocks(
                produce(blocks,draft => {
                    const block = draft.find(block => block.id === i);
                    block.mouse = !block.mouse;
                })
            );
        };
    
    return (
        props.map(({x,y,degree,},i) => ( 
            <BlockStyle
                onClick = {() => onClick(i)}
                style = {{ 
                    transform : interpolate([x, y, degree],(x , y, degree) => `
                        translate3d(${x}px,${y}px,0) 
                        rotate(${blocks[i].mouse ? 0 : degree}deg) 
                        scale(${blocks[i].mouse ? 1.1 : 1}
                    `),
                }}
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