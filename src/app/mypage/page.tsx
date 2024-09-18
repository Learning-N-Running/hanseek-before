"use client";

import styled, { keyframes } from "styled-components";
import { useState } from "react";
import SlideUpModal from "@/components/base/SlideUpModal";
import Footer from "@/layout/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
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
