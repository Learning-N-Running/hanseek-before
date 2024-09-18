"use client";

import styled from "styled-components";
import HomeSearchBar from "@/components/common/HomeSearchBar";
import Video from "next-video";
import testVid from "/videos/hs_test1.mp4";

export default function Home() {
  return (
    <>
      <Container>
        <HomeSearchBar />
        <Video src={testVid} style={{ height: "100%" }} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 24px 0 24px;
  background-color: black;
`;
