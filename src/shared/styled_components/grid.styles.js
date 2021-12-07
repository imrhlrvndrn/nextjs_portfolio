import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    grid-template-columns: ${(props) => props.columns || 'auto'};
    grid-template-rows: ${(props) => props.rows || 'auto'};
    grid-auto-rows: ${(props) => props.auto_rows || 'auto'};
    grid-auto-columns: ${(props) => props.auto_columns || 'auto'};
    gap: ${(props) => props.gutter || '1rem'};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '0'};
    grid-template-areas: ${(props) => props.area || ''};
`;

export const GridChild = styled.div`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'max-content'};
    margin: ${(props) => props.margin || '0 auto'};
    padding: ${(props) => props.padding || '0'};
    border-radius: ${(props) => props.borderRadius || '0'};
    grid-area: ${(props) => props.gridArea || ''};
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    grid-column-start: ${(props) => props.columnStart};
    grid-column-end: ${(props) => props.columnEnd};
    grid-row-start: ${(props) => props.rowStart};
    grid-row-end: ${(props) => props.rowEnd};
`;
