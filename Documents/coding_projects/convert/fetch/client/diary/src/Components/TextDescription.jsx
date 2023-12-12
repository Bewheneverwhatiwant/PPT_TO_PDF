import styled from "styled-components"

export default styled.p`
    font-size : ${props => props.size || "16px"};
    color : ${props => props.color || null};
`