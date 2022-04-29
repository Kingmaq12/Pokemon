import styled from 'styled-components';
import { TYPE } from './constants';

export const ParagraphWrapper = styled.p<{
    type?: string;
}>`
    border: solid 1px rgba(0, 0, 0, 0.2);
    color: black;
    font-weight: bold;
    ${({ type }) => type && `background-color: ${TYPE[type]}`}
}
`;
