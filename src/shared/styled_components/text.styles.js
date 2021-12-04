import styled from 'styled-components';
import { extractFontSize } from '../../utils';

export const Text = styled.p`
    width: ${(props) => props.width || '100%'};
    margin: ${(props) => props.margin || '0'};
    opacity: ${(props) => props.opacity || '1'};
    text-align: ${(props) => props.align || 'left'};
    color: ${(props) => props.theme.colors.text[`${props.color}`]};
    font-size: ${(props) =>
        props.size ? extractFontSize(props.size, props.theme) : 'inherit'};
    font-weight: ${(props) =>
        props.theme.fonts.weight[props.weight || 'medium']};
`;
