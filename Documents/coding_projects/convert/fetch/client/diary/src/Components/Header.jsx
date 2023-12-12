import styled from 'styled-components';
import RowContainer from './CommonComponent/RowContainer';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: white;
    min-height: 60px;
    padding: 0 20px;
    color: white;
`;


const Image = styled.img`
    max-height: ${props => props.$max ? props.$max : "30px"};
    margin-left: ${props => props.$left ? props.$left : null};
    max-width: 100%;
`;

export default function Component() {

    return (
        <HeaderContainer>
            <a href="/">
                <RowContainer>
                    <Image src="/unilogo.svg" alt="로고" />
                    <Image src="/global.svg" alt="글로벌" />
                </RowContainer>
            </a>
        </HeaderContainer>
    )
}