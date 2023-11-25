import React from 'react';
import styled, { keyframes } from 'styled-components';

const TopBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%; /* 화면의 절반 높이 */
  background-color: beige; /* 베이지 색상 */
  z-index: -1; /* 다른 요소보다 뒤에 위치하도록 */
`;

const BottomBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%; /* 화면의 절반 높이 */
  background-color: #d2b48c; /* 황토색 */
  z-index: -1; /* 다른 요소보다 뒤에 위치하도록 */
`;

const NavyBox_left = styled.div`
  width: 400px;
  height: 400px;
  background-color: navy;
  margin: 10px;
  position: relative; // 가상 요소를 위한 포지셔닝 기준
  z-index: 1;
  transform: translate(50%, 5%);

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: white; // 흰색 선
  }

  &::before {
    // 가로 선
    top: 50%;
    left: 0;
    width: 100%;
    height: 5px; // 선의 두께
    transform: translateY(-50%);
  }

  &::after {
    // 세로 선
    top: 0;
    left: 50%;
    width: 5px; // 선의 두께
    height: 100%;
    transform: translateX(-50%);
  }
`;

const NavyBox_rignt = styled.div`
  width: 400px;
  height: 400px;
  background-color: navy;
  margin: 10px;
  z-index: 1;
  position: relative; // 가상 요소를 위한 포지셔닝 기준
  transform: translate(270%, -97%);

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: white; // 흰색 선
  }

  &::before {
    // 가로 선
    top: 50%;
    left: 0;
    width: 100%;
    height: 5px; // 선의 두께
    transform: translateY(-50%);
  }

  &::after {
    // 세로 선
    top: 0;
    left: 50%;
    width: 5px; // 선의 두께
    height: 100%;
    transform: translateX(-50%);
  }
`;

const AppContainer = styled.div`
  position: relative; // TreeContainer의 위치 기준
  width: 100%; // 전체 화면 너비를 사용
  height: 100vh; // 전체 화면 높이를 사용
`;

const TreeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; // 예시 너비, 실제 크기에 맞게 조정 가능
  height: 650px; // 예시 높이, 실제 크기에 맞게 조정 가능
`;

const fade = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const TreeTopStar = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    clip-path: polygon(
        50% 0%, 
        61% 35%, 
        98% 35%, 
        68% 57%, 
        79% 91%, 
        50% 70%, 
        21% 91%, 
        32% 57%, 
        2% 35%, 
        39% 35%
    );
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    animation: ${fade} 1s linear infinite;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: red;
      clip-path: polygon(
        50% 0%, 
        61% 35%, 
        98% 35%, 
        68% 57%, 
        79% 91%, 
        50% 70%, 
        21% 91%, 
        32% 57%, 
        2% 35%, 
        39% 35%
      );
      box-shadow: 0 0 8px 2px white, 0 0 15px 5px yellow;
    }
`;

const appearDisappear = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const disappearAppear = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const TreeMiddleStar = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${props => props.index % 2 === 0 ? disappearAppear : appearDisappear} 2s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: yellow;
    clip-path: polygon(
      50% 0%, 
      61% 35%, 
      98% 35%, 
      68% 57%, 
      79% 91%, 
      50% 70%, 
      21% 91%, 
      32% 57%, 
      2% 35%, 
      39% 35%
    );
    box-shadow: 0 0 8px 2px white, 0 0 15px 5px yellow;
  }
`;

// 트리의 각 층
const TreeLayer = styled.div`
    width: ${props => 20 * (props.layer + 1)}%;
    height: 150px;
    background-color: green;
    margin: 10px auto;
    border-radius: 50%;
    z-index: 4;
`;

// 트리 줄기
const TreeTrunk = styled.div`
    width: 20%;
    height: 60px;
    background-color: #8B4513;
    margin: 0 auto;
    border-radius: 10px;
`;

const GiftBox_small = styled.div`
  width: 100px; // 상자 크기
  height: 100px;
  background-color: ${props => props.color || 'red'}; // 상자 색상
  left: ${props => props.shiftRight ? 'calc(50% + 10px)' : '50%'};
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: white; // 흰색 선
  }

  &::before {
    // 가로 선
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px; // 선의 두께
    transform: translateY(-50%);
  }

  &::after {
    // 세로 선
    top: 0;
    left: 50%;
    width: 2px; // 선의 두께
    height: 100%;
    transform: translateX(-50%);
  }
`;

const GiftBox_small_behind = styled.div`
  width: 100px; // 상자 크기
  height: 100px;
  background-color: ${props => props.color || 'red'}; // 상자 색상
  left: ${props => props.shiftRight ? 'calc(50% - 30px)' : '50%'};
  position: relative;
  z-index: 2;

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: white; // 흰색 선
  }

  &::before {
    // 가로 선
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px; // 선의 두께
    transform: translateY(-50%);
  }

  &::after {
    // 세로 선
    top: 0;
    left: 50%;
    width: 2px; // 선의 두께
    height: 100%;
    transform: translateX(-50%);
  }
`;

const GiftBox_Big = styled.div`
  width: 200px; // 상자 크기
  height: 150px;
  background-color: ${props => props.color || 'red'}; // 상자 색상
  left: ${props => props.shiftRight ? 'calc(50% + 10px)' : '50%'};
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: white; // 흰색 선
  }

  &::before {
    // 가로 선
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px; // 선의 두께
    transform: translateY(-50%);
  }

  &::after {
    // 세로 선
    top: 0;
    left: 50%;
    width: 2px; // 선의 두께
    height: 100%;
    transform: translateX(-50%);
  }
`;

const GiftBoxPlace_1 = styled.div`
  width: 500px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(10%, 40%);
`;

const GiftBoxPlace_2 = styled.div`
  width: 500px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
`;

const GiftBoxPlace_3 = styled.div`
  width: 500px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-140%, 100%);
`;

const GiftBoxPlace_4 = styled.div`
  width: 500px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-175%, -70%);
  z-index: 3;
`;

const RedCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%; // 원 형태를 만들기 위해
  position: absolute;
  transform: translate(1500%, 150%);
  background: radial-gradient(circle, white, red);
`;

// 각 TreeLayer 위에 빨간 원들을 배치하는 함수
const createRedCircles = (layer) => {
  let circleCount;
  if (layer === 0) {
    circleCount = 2; // 0층에는 2개
  } else if (layer === 1) {
    circleCount = 4; // 1층에는 4개
  } else {
    circleCount = 7; // 2층에는 7개
  }
  let circles = [];
  for (let i = 0; i < circleCount; i++) {
    circles.push(
      <RedCircle key={i} style={{
        top: `${150 * layer + (i % 2) * 10}px`, // 지그재그 배치
        left: `${50 - (circleCount - 1) * 50 + i * 110}px` // 원 사이 10px 간격
      }} />
    );
  }
  return circles;
};

const ChristmasTree = () => {
  // TreeLayer 1과 2 위의 TreeMiddleStar들 생성
  const createStars = (layer, count) => {
    let stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <TreeMiddleStar key={i} index={i} style={{
          top: layer === 1 ? '140px' : '300px', // TreeLayer 1과 2의 높이에 따라 조정
          left: `calc(50% + ${(i - Math.floor(count / 2)) * 30}px)`  // 별들 사이의 간격 조정
        }} />
      );
    }
    return stars;
  };

  return (
    <AppContainer>
      <TopBackground>
        <NavyBox_left />
        <NavyBox_rignt />
      </TopBackground>
      <BottomBackground />
      <TreeContainer>
        <TreeTopStar />
        <TreeLayer layer={0}>
          {createRedCircles(0)}
        </TreeLayer>
        {createStars(1, 3)}
        <TreeLayer layer={1}>
          {createRedCircles(1)}
        </TreeLayer>
        {createStars(15, 19)}
        <TreeLayer layer={2}>
          {createRedCircles(2)}
        </TreeLayer>
        <TreeTrunk />
      </TreeContainer>
      <GiftBoxPlace_1>
        <GiftBox_small color="red" />
        <GiftBox_small color="blue" shiftRight />
        <GiftBox_small color="green" />
      </GiftBoxPlace_1>
      <GiftBoxPlace_2>
        <GiftBox_Big color="orange" />
      </GiftBoxPlace_2>
      <GiftBoxPlace_3>
        <GiftBox_Big color="purple" />
      </GiftBoxPlace_3>
      <GiftBoxPlace_4>
        <GiftBox_small_behind color="yellow" />
        <GiftBox_small_behind color="pink" shiftRight />
        <GiftBox_small_behind color="skyblue" />
      </GiftBoxPlace_4>
    </AppContainer>
  );
};

export default ChristmasTree;
