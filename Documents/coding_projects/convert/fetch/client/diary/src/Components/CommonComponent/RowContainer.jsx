import styled from 'styled-components';

export default styled.div`
    display : flex;
    flex-direction : row;
    gap : 10px;
    justify-content: ${props => props.$justify_content || null};
`