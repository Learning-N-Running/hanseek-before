import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import VideoContent from "./VideoContent";

export default function MyPageTab({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}) {
  const ColoredLine = () => (
    <hr className="w-full mt-2 h-1 bg-orange-500 border-none m-0" />
  );

  const tabs = [
    {
      name: "Videos",
      icon: "/images/video.icon.svg",
      activeIcon: "/images/clicked_video_icon.svg",
    },
    {
      name: "Likes",
      icon: "/images/heart_icon.svg",
      activeIcon: "/images/clicked_heart_icon.svg",
    },
    {
      name: "History",
      icon: "/images/heart_icon.svg",
      activeIcon: "/images/clicked_heart_icon.svg",
    },
    {
      name: "Collection",
      icon: "/images/save_icon.svg",
      activeIcon: "/images/clciked_save_icon.svg",
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-center gap-12 mt-6">
        {tabs.map((tab) => (
          <div key={tab.name} className="flex flex-col px-15 w-full">
            <div className="flex flex-row items-center justify-center">
              <img
                className="mr-2"
                src={activeTab === tab.name ? tab.activeIcon : tab.icon}
                alt={`${tab.name}_icon`}
                width={24}
                height={24}
              />
              <button
                className={`${
                  activeTab === tab.name ? "text-orange-500" : "text-gray-500"
                } font-bold text-lg`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            </div>
            {activeTab === tab.name && <ColoredLine />}
          </div>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "Videos" && <VideoContent />}
        {activeTab === "Likes" && <LikesContent />}
        {activeTab === "History" && <CollectionContent />}
        {activeTab === "Collection" && <CollectionContent />}
      </div>
    </>
  );
}

const LikesContent = () => {
  return (
    <div className="flex flex-row justify-center p-4 place-content-evenly"></div>
  );
};

const CollectionContent = () => {
  return <div></div>;
};
