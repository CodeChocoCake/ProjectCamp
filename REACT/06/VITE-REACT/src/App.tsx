// import { createElement } from "react";
import React from 'react';
import Sub from './Sub';
import styles from './App.module.css';
import styled from 'styled-components';
import { css } from '@emotion/css';
import { h1Style } from './assets/styles.css.ts';

const App = () => {
    const number = 100;
    const MainTitle = styled.h1`
        color: red;
    `;
    // return createElement(
    //     'div',
    //     null,
    //     createElement('header', null, createElement('h1', null, '내 웹사이트')),
    //     createElement(
    //         'nav',
    //         null,
    //         createElement(
    //             'ul',
    //             null,
    //             createElement(
    //                 'li',
    //                 null,
    //                 createElement('a', { href: '#section1' }, '소개')
    //             ),
    //             createElement(
    //                 'li',
    //                 null,
    //                 createElement('a', { href: '#section2' }, '서비스')
    //             ),
    //             createElement(
    //                 'li',
    //                 null,
    //                 createElement('a', { href: '#section3' }, '연락처')
    //             )
    //         )
    //     ),
    //     createElement(
    //         'main',
    //         null,
    //         createElement(
    //             'section',
    //             { id: 'section1' },
    //             createElement('h2', null, '소개'),
    //             createElement('p', null, '여기에 소개 내용을 작성하세요.')
    //         ),
    //         createElement(
    //             'section',
    //             { id: 'section2' },
    //             createElement('h2', null, '서비스'),
    //             createElement(
    //                 'p',
    //                 null,
    //                 '여기에 제공하는 서비스 내용을 작성하세요.'
    //             )
    //         ),
    //         createElement(
    //             'section',
    //             { id: 'section3' },
    //             createElement('h2', null, '연락처'),
    //             createElement('p', null, '여기에 연락처 정보를 작성하세요.')
    //         )
    //     ),
    //     createElement(
    //         'footer',
    //         null,
    //         createElement('p', null, '&copy; 2024 내 웹사이트. 모든 권리 보유.')
    //     )
    // );
    return (
        <>
            <MainTitle>styled-component</MainTitle>
            <h1
                className={css`
                    font-size: 50px;
                    color: magenta;
                `}
            >
                emotion
            </h1>
            <h1 className={h1Style}>vanilla extract</h1>
            <h1 className="text-3xl font-bold underline mb-8">tailwind CSS</h1>
            <h1
                className={styles.title}

                // style={{ fontSize: '50px', color: 'red' }}
            >
                Count : {number}
            </h1>
            <Sub />
        </>
    );
};

export default App;
