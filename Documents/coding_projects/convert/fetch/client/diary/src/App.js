import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Header from "./Components/Header";
import TextHeader from './Components/TextHeader';
import TextDescription from './Components/TextDescription';
import Footer from "./Components/Footer";
import ImgStyled from './Components/CommonComponent/ImgStyled';
import WrapContent from './Components/WrapContent';

const FileUpload = () => {
  const [downloadLinks, setDownloadLinks] = useState([]);
  const [showText, setShowText] = useState(false); //조건부 렌더링 상태
  const [showText2, setShowText2] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    acceptedFiles.forEach(file => {
      formData.append('files', file);
    });

    axios.post('http://localhost:3000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      // 서버에서 PDF 변환 링크를 받아 상태에 저장
      setDownloadLinks(response.data.links);
    });
  }, []);

  const toggleText = () => setShowText(!showText); // 텍스트 표시 상태 토글
  const toggleText2 = () => setShowText2(!showText2);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <Header />
      <WrapContent>
        <TextHeader>
          PPT 파일을 PDF로 변환하는 프로그램입니다.
        </TextHeader>
        <TextDescription>
          여러 개의 PPT를 한번에 PDF로 변환 가능합니다. <br />
          여러 개의 PPT 강의자료를 하나하나 PDF로 변환하기 귀찮으실 때 사용하세요. <br />
          파일 개수가 많을 수록 변환 시간이 오래 걸릴 수 있습니다. 변환이 모두 완료되면 하단에 다운로드 링크가 출력됩니다. <br />
          작동이 안되는 것이 아니니 잠시만 기다려주세요.
        </TextDescription>
        <TextHeader size='15px' onClick={toggleText2} color='#76E6DF'> Q. 왜 이런 사이트를 만드셨나요? (확인하려면 클릭)</TextHeader>
        {showText2 &&
          <div>
            <TextDescription>
              A. <br />
              이클래스 접속해서 첫번째 강의 들어가서 1주차 수업 PPT 다운로드 받고, <br />
              2주차 수업 PPT 다운로드 받고... PPT PDF로 바꾸고, <br />
              두번째 강의 들어가고 반복반복...<br />
              <ImgStyled src='/red.svg' width='100px' height='100px' /> <br />
              여러 개의 PPT를 한번에 PDF로 바꿔주는 서비스를 찾아봤으나 마땅한 게 없어서 <br />
              만들어보았습니다. <br />
              <ImgStyled src='/blue.svg' width='100px' height='100px' borderRadius='20px' />
            </TextDescription>
          </div>}
        <TextHeader size='15px' onClick={toggleText} color='#76E6DF'>
          Q. 변환이 완료되면 어떤 화면이 보이나요? (확인하려면 클릭)
        </TextHeader>
        {showText &&
          <div>
            <TextDescription>
              A. 아래와 같이 출력됩니다.
            </TextDescription>
            <ImgStyled src='/likethis.svg' />
          </div>}
        <div {...getRootProps()} style={{ border: '2px dashed black', padding: '20px', textAlign: 'center' }}>
          <input {...getInputProps()} />
          <p>파일을 여기에 드래그 앤 드롭하거나 클릭하여 업로드하세요.</p>
        </div>
        {downloadLinks.length > 0 && (
          <div>
            <h3>다운로드 링크:</h3>
            <ul>
              {downloadLinks.map(link => (
                <li key={link}>
                  <a href={`http://localhost:3000${link}`} download>다운로드</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </WrapContent>
      <Footer />
    </div>
  );
};

export default FileUpload;
