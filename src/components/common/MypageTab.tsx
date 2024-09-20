import React, { useState } from "react";
import Image from "next/image";

export default function MyPageTab() {
  const [activeTab, setActiveTab] = useState("Videos");

  return (
    <div>
      <Image
        src="\images\video_icon.svg"
        alt="video_icon"
        width={24}
        height={24}
      />
      <button
        className={`${
          activeTab === "Videos" ? "text-orange-500" : "text-gray-500"
        } font-medium`}
        onClick={() => setActiveTab("Videos")}
      >
        Videos
      </button>
      <button
        className={`${
          activeTab === "Likes" ? "text-orange-500" : "text-gray-500"
        } font-medium`}
        onClick={() => setActiveTab("Likes")}
      >
        Likes
      </button>
      <button
        className={`${
          activeTab === "Collection" ? "text-orange-500" : "text-gray-500"
        } font-medium`}
        onClick={() => setActiveTab("Collection")}
      >
        Collection
      </button>
    </div>
  );
}
