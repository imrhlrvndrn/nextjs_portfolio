import styled from 'styled-components';
import { extractFontSize } from '../../utils';

export const Text = styled.p`
    height: ${(props) => props.height || 'auto'};
    width: ${(props) => props.width || '100%'};
    margin: ${(props) => props.margin || '0'};
    opacity: ${(props) => props.opacity || '1'};
    text-align: ${(props) => props.align || 'left'};
    color: ${(props) => props.theme.colors.text[`${props.color || 'primary'}`]};
    font-size: ${(props) => (props.size ? extractFontSize(props.size, props.theme) : 'inherit')};
    font-weight: ${(props) => props.theme.fonts.weight[props.weight || 'medium']};

    @media screen and (max-width: 800px) {
        font-size: ${(props) =>
            props.size
                ? extractFontSize(props.size.replace('large', 'small'), props.theme)
                : 'inherit'};
        color: ${(props) =>
            props?.is_mobile
                ? props?.theme?.colors?.constants?.text?.light
                : props?.theme?.colors?.text?.primary};
        opacity: ${(props) => (props?.color === 'secondary' ? 0.6 : 1)};
    }
`;
