import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//국회 api 통신 예시 1: 차트 출력

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ChartComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://open.assembly.go.kr/portal/openapi/ncocpgfiaoituanbr?AGE=21&BILL_NO=2106221&Type=json')
            .then(response => {
                const newData = response.data.ncocpgfiaoituanbr[1].row;
                setData(newData);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <Table>
            <thead>
                <tr>
                    <Th>찬성</Th>
                    <Th>반대</Th>
                    <Th>기권</Th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <Td>{item.YES_TCNT}</Td>
                        <Td>{item.NO_TCNT}</Td>
                        <Td>{item.BLANK_TCNT}</Td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ChartComponent;
