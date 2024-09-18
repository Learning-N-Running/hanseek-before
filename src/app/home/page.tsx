"use client";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { getIsLoggedInState } from "@/redux/slice/authSlice";
import Image from "next/image";
import { Heading1 } from "@/styles/texts";
import { useState } from "react";
import { useRouter } from "next/navigation";
import HomeSearchBar from "@/components/common/HomeSearchBar";
import CldVideoPlayer from "@/components/CldVideoPlayer";

export default function Home() {
  return (
    <>
      <Container>
        <HomeSearchBar />
        <CldVideoPlayer
          width="768"
          height="1024"
          src="IMG_4173_vauw4c"
          logo={{
            imageUrl: "/images/hs_favicon.png",
          }}
          autoplay
          //여기는 잘 모르겠음
          sourceTypes={["hls"]}
          transformation={{
            streaming_profile: "hd",
          }}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
