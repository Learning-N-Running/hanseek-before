import colors from "@/styles/color";
import { styled } from "styled-components";
import Image from "next/image";

export default function Footer() {
  return (
    <Container>
      <Image
        src="/images/hs_foot_home_white.svg"
        alt="home"
        width={36}
        height={36}
        style={{ cursor: "pointer" }}
      />
      <Image
        src="/images/hs_foot_plus.svg"
        alt="plus"
        width={56}
        height={56}
        style={{ cursor: "pointer" }}
      />
      <Image
        src="/images/hs_foot_mypage_white.svg"
        alt="my page"
        width={36}
        height={36}
        style={{ cursor: "pointer" }}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 72px;
  padding: 8px 48px;

  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 100;

  background-color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
