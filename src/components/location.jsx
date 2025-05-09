import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
		"timestamp" : "1746787492016",
		"key" : "2nxyq",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1746787492016"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        서울 성북구 정릉로 10길 127
        <br />
        르한스(구. 한스갤러리)
        <br />
        <br />
        <Title>셔틀버스 이용안내</Title>
        <br />
        <br />
        한성대입구역 6번출구 50M앞 마을버스 정류장
        <br />
        (스텝 인솔) / 배차간격 : 20분
        <br />
        (11:00 / 11:20 / 11:40 / 12:00)
        <br />
        <br />
        <Title>자가용 이용 시</Title>
        <br />
        서울 성북구 정릉로 10길 127
        <br />
        1. 제 1주차장(르한스) 주차발렛서비스
        <br />
        2. 제 1주차장 만차 시, 제 2주차장(LG물류센터, 국민대) 이용가능
        <br />
        ** 제 2주차장 이용 시 셔틀버스 상시운행
        <br />
        <Title>대중교통 안내</Title>
        <br />
        <br />
        1. 4호선 한성대 입구역 6번 출구 →
        <br />
        택시 승차 : 성북동 → 길상사 지나서 정릉방향 / 6-10분 소요
        <br />
        <br />
        2. 4호선 길음역 3번 출구 → 버스 승차: 국민대 방향
        <br />
        [청덕초교] 하차 후 / 북악산길 방면 도보 이동 15분 소요
        <br />
        (길음역 3번출구 연계 버스: 171,163, 1213, 7211)
      </Content>
    </Wrapper>
  );
};

export default Location;
