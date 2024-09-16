"use client";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { getIsLoggedInState } from "@/redux/slice/authSlice";
import Image from "next/image";
import { Heading1 } from "@/styles/texts";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = useSelector(getIsLoggedInState);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Container>
        <Name>Hi, Danny!</Name>
        <Heading1 style={{ margin: "6px 24px 0 24px", fontWeight: "400" }}>
          Ready to make safe journey?
        </Heading1>
        <div className="flex items-center justify-center mx-auto my-0 mt-[50px] w-4/5 bg-green-700">
          안녕하세요~
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 12px 0 0 0;
`;

const Name = styled.div`
  padding: 0 24px 0 24px;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 700;
`;
