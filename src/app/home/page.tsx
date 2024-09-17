"use client";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { getIsLoggedInState } from "@/redux/slice/authSlice";
import Image from "next/image";
import { Heading1 } from "@/styles/texts";
import { useState } from "react";
import { useRouter } from "next/navigation";
import HomeSearchBar from "@/components/common/HomeSearchBar";

export default function Home() {
  return (
    <>
      <Container>
        <HomeSearchBar />
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
