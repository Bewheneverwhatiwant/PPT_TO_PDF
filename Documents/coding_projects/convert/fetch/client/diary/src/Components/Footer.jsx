import styled from 'styled-components';
import TextDescription from './TextDescription';
import ColumnContainer from './CommonComponent/ColumnContainer';
import CenterContainer from './CommonComponent/CenterContainer';
import SizedBox from './SizedBox';
import TextHeader from './TextHeader';

const FooterContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #D9D9D9;
    min-height: 60px;
    padding: 0 20px;

    transform: translateY(0%);
    bottom: 0;
    left: 0;      
    right: 0;     
    
`;


const Image = styled.img`
    max-height: ${props => props.$max ? props.$max : "100px"};
    margin-left: ${props => props.$left ? props.$left : null};
    max-width: 100%;
`;

export default function Component() {

    return (
        <FooterContainer>

            <ColumnContainer>

                <CenterContainer>
                    <TextDescription color='white'>
                        <TextHeader>
                            개발자 정보
                        </TextHeader>
                        한국외대 독일어통번역학과 이나영 <br />
                        Github: @bewheneverwhatiwant <br />
                        한국외대 정보통신공학과 이수혁 <br />
                        Github: @leestana01
                    </TextDescription>
                </CenterContainer>
            </ColumnContainer>


        </FooterContainer>
    )
}