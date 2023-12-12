import styled from 'styled-components';

export default styled.img`
    width : ${props => props.width ? props.width : "130px"};
    height : ${props => props.height ? props.height : "130px"};
    src : ${props => props.src ? props.src : "/logo_slogan.png"};
    borderRadius: ${props => props.borderRadius ? props.borderRadius : "5px"};
    border: ${props => props.borderWidth ? `${props.borderWidth} solid` : "none"} 
    ${props => props.borderColor ? props.borderColor : "black"};
`;