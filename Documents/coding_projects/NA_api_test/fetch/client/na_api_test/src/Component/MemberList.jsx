import React, { useState, useEffect } from 'react';
import axios from 'axios';

//응답이 json이 아닌 xml이라서, 무작정 axios만 쓰면 안되고
//axios로 응답받기 -> DOMParser로 파싱하기 -> getElementByTagName으로 가져오기
//이렇게 받아와야함

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://open.assembly.go.kr/portal/openapi/npffdutiapkzbfyvr', {
            params: {
                KEY: 'aa9fa3831c4848d5b6dc99353af2b00a',
                Type: 'xml',
                pIndex: 1,
                pSize: 5,
                UNIT_CD: '100021'
            },
            responseType: 'text'  // XML 응답을 위해 responseType을 'text'로 설정
        })
            .then(response => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(response.data, "text/xml");

                // XML에서 필요한 데이터 추출
                const rows = Array.from(xmlDoc.getElementsByTagName('row')).map(row => {
                    return {
                        HG_NM: row.getElementsByTagName('HG_NM')[0].textContent,
                        POLY_NM: row.getElementsByTagName('POLY_NM')[0].textContent,
                        ORIG_NM: row.getElementsByTagName('ORIG_NM')[0].textContent
                    };
                });

                setMembers(rows);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>국회의원 목록</h1>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>
                        이름: {member.HG_NM}, 정당: {member.POLY_NM}, 선거구: {member.ORIG_NM}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MemberList;
