import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1360px;
    padding-right: 30px;
    padding-left: 30px;
    margin-right: 15px;
    margin-left: 15px;

    &:before,
    &:after {
        content: " ",
        display: table;
    }
    
    &:after {
        clear: both;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    
    &:before,
    &:after {
        content: " ",
        display: table;
    }
    
    &:after {
        clear: both;
    }
`;

function getWidthGrid(value) {
    if (!value) return;
    
    let width = value / 12 * 100;
    return `width: ${width}%;`;
}

export const Column = styled.div`
    width: 100%;
    float: left;
    padding: .25rem;
    min-height: 1px;
    
    ${props =>
    props.centered &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};
    
    ${props =>
    props.right &&
    css`
      display: flex;
      justify-content: flex-end;
    `};
    
    ${props =>
    props.left &&
    css`
      display: flex;
      justify-content: flex-start;
    `};
    
    @media only screen and (max-width: 768px) {
        ${({ mobile }) => mobile && getWidthGrid(mobile)}
    }
    
    @media only screen and (min-width: 768px) {
        ${({ tablet }) => tablet && getWidthGrid(tablet)}
    }
    
    @media only screen and (min-width: 1000px) {
        ${({ desktop }) => desktop && getWidthGrid(desktop)}
    }
`;