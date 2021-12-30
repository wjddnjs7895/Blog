import {React, useState} from 'react';
import {animated, useSpring, a} from 'react-spring';
import styled from '@emotion/styled';

import back_card from '../../assets/algorithm/back_card.svg';
import front_card_1 from '../../assets/algorithm/front_card_1.png';
import front_card_2 from '../../assets/algorithm/front_card_2.png';
import front_card_3 from '../../assets/algorithm/front_card_3.png';

const cards = [front_card_1, front_card_2, front_card_3];

const CardStyle = styled(animated.div)`
    width : 16.5vw;
    height: 30vw;
    .frontcard,
    .backcard {
        border : solid 1px;
        border-color : rgba(50,50,50,0.8);
        width : 16.5vw;
        height : 30vw;  
        position : absolute;
        cursor : pointer;
        will-change : transform, opacity;
        background-repeat : no-repeat;
        background-size : cover;
    }

    .frontcard {
        background-image : url(${(props)=>cards[props.i]});
    }
    .backcard {
        background-image : url(${back_card});
    }
`;

const Card = ({i}) => {
    const [flipped, setflip] = useState(false);
    const [hovered, sethover] = useState(false);
    const {transform, opacity, scale} = useSpring({
        scale : hovered ? 1.1 : 1,
        opacity : flipped ? 1 : 0,
        transform : `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config : {mass : 5, tension : 500, friction : 80},
    })
    return(
        <div  
            onClick = {() => setflip(flipped => !flipped)}
            onMouseEnter = {() => sethover(hovered => true)}
            onMouseLeave = {() => sethover(hovered => false)}
        >
            <CardStyle i = {i}>
                <a.div 
                    className = "frontcard"
                    style = {{opacity : opacity.to(o => 1 - o), transform, scale}}
                />
                <a.div 
                    className = "backcard"
                    style = {{
                        opacity,
                        transform, 
                        rotateY : '180deg',
                        scale
                    }}
                />
            </CardStyle>
        </div>
    )
}

export default Card;