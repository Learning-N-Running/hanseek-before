"use client";

import styled, { keyframes } from "styled-components";
import { useState } from "react";
import SlideUpModal from "@/components/base/SlideUpModal";
import Footer from "@/layout/Footer";
import Image from "next/image";
import MyPageTab from "@/components/common/MypageTab";

interface MyProfile {
  title: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="flex items-center p-6 space-x-4 justify-end">
        <Image
          className=""
          src="\images\bell_icon.svg"
          alt="bell icon"
          width={24}
          height={24}
        />
        <Image
          className=""
          src="\images\system_icon.svg"
          alt="system icon"
          width={24}
          height={24}
        />
      </nav>
      <Profile title="Stella.leeee" />
      <MyPageTab />
      <Container>
        <button onClick={handleOpenModal} className="display bg-slate-400">
          Open Modal
        </button>
      </Container>

      <SlideUpModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>Choose Your Date</p>
        <p>add location</p>
      </SlideUpModal>

      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Profile = ({ title }: MyProfile) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="rounded-full"
        src="/images/profile_image.png"
        alt="mypage_profile"
        width={100}
        height={100}
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex mt-2">
        <Image
          className="mr-1"
          src="/images/user_check.svg"
          alt="user_check"
          width={18}
          height={18}
        />
        <p>
          Following <strong>210K</strong>
        </p>
        <Image
          className="ml-4 mr-1"
          src="/images/users.svg"
          alt="users"
          width={18}
          height={18}
        />
        <p>
          Follow <strong>456K</strong>
        </p>
      </div>
    </div>
  );
};
