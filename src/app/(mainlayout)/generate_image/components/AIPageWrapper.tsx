"use client";

import { useState } from "react";
import AIBannerPart from "./AIBannerPart";
import AIMainContent from "./AIMainContent";

const AIPageWrapper = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageCount, setImageCount] = useState<string>("");
  const [imageLength, setImageLength] = useState<number>(0);

  return (
    <div>
      <AIBannerPart
        prompt={prompt}
        setPrompt={setPrompt}
        setImageCount={setImageCount}
        imageCount={imageCount}
        setImageLength={setImageLength}
      />
      <AIMainContent
        prompt={prompt}
        setPrompt={setPrompt}
        setImageCount={setImageCount}
        imageCount={imageCount}
        imageLength={imageLength}
      />
    </div>
  );
};

export default AIPageWrapper;
