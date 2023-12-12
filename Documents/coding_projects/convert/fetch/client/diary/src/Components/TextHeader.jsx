import styled from "styled-components"

export default styled.p`
    font-weight : bold;
    font-size : ${props => props.size || "25px"};
    color : ${props => props.color || null};
    height : ${props => props.height || null};
`