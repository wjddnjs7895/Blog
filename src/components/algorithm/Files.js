import React from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

import logo_folder from '../../assets/algorithm/folder.png';
import logo_filewindow from '../../assets/algorithm/file_window.png';

const WindowStyle = styled(animated.div)`
    position : relative;
    top : 5vh;
    left : 5vw;
    padding-top : 20vh;
    padding-left : 2vw;
    height : 465px;
    width : 1126px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    -moz-box-shadow: 0 0 10px rgba(0,0,0,0.3);
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.3);
    -o-box-shadow: 0 0 10px rgba(0,0,0,0.3);
    background-image : url(${logo_filewindow});
    background-size : contain;
    background-repeat : no-repeat;
`;

const FileStyle = styled(animated.div)`
    img {
        width : 3rem;
        height : 3rem;
        padding : 0.5rem;   
    }
`;

const files = [
    {
        id : 0,
        title : 'name1'
    },
    {
        id : 1,
        title : 'name2'
    },
    {
        id : 2,
        title : 'name3'
    },
    {
        id : 3,
        title : 'name3' 
    },
];

const File = () => {
    const [{scale, opacity}] = useSpring(() => ({
        from : {scale : 0.6, opacity : 0.1},
        to : {scale : 1, opacity : 1},
        config : {duration : 300},
    }));

    const [{border, backgroundColor},set] = useSpring(() => ({
        backgroundColor : '#000',
    }))
    
    return (
        <WindowStyle
            style = {{ scale, opacity }}
        >
            {files.map((file) => (
                <FileStyle
                    onMouseEnter = {() => set({backgroundColor : '#fff'})}
                    onMouseLeave = {() => set({backgroundColor : '#000'})}
                >
                    <img src = {logo_folder} alt = 'logo_folder'/>
                    <br/>
                    {file.title}
                </FileStyle>)
            )}
        </WindowStyle>
    )
}

export default File;