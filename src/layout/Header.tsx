import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { styled } from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getProfileImageState } from "@/redux/slice/authSlice";
import { Heading3 } from "@/styles/texts";
import { isAbsolute } from "path";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const profileImage = useSelector(getProfileImageState);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  return (
    <>
      {pathname === "/signup" && <Header_Title title="Sign up" />}
      {pathname === "/terms" && <Header_Title title="Terms and use" />}
    </>
  );
};

export default Header;

function Header_Title({ title }: { title: string }) {
  return (
    <Container_Signup>
      <Goback
        src="/images/hs_goback.svg"
        alt="go back"
        width={24}
        height={24}
        isAbsolute={true}
      />
      <Heading3>{title}</Heading3>
    </Container_Signup>
  );
}

function Header_Conversation() {
  return (
    <Container_Conversation>
      <Goback
        src="/images/vb_goback.svg"
        alt="go back"
        width={24}
        height={24}
        isAbsolute={true}
      />
      <Heading3>Accident Report</Heading3>
    </Container_Conversation>
  );
}

function Header_Home() {
  return (
    <Container_Home>
      <Image
        src="/images/vb_home_목록.svg"
        alt="category"
        width={32}
        height={32}
      />
      <Image
        src="/images/vb_home_알림.png"
        alt="notification"
        width={48}
        height={48}
      />
    </Container_Home>
  );
}

const Container_Signup = styled.div`
  width: 100%;
  height: 65px;

  position: fixed;
  z-index: 10;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
`;

const Container_Conversation = styled.div`
  width: 100%;
  height: 65px;

  position: fixed;
  z-index: 10;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
`;

const Goback = styled(Image)<{ isAbsolute?: boolean }>`
  cursor: pointer;
  position: ${(props) => props.isAbsolute == true && "absolute"};
  left: 26px;
  top: 21px;
`;

const Container_Home = styled.div`
  width: 100%;
  height: 80px;

  position: fixed;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px 0 24px;
`;
