import Container from "@/app/components/Shared/Container";
import { Input } from "@/components/ui/input";
import { Button } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";
import { dropDownItem } from "./dropDownItem";

type TProps = {
  prompt: string;
  setPrompt: Dispatch<SetStateAction<string>>;
  imageCount: string;
  imageLength: number;
  setImageCount: Dispatch<SetStateAction<string>>;
  setImageLength: Dispatch<SetStateAction<number>>;
};

const AIBannerPart = ({
  prompt,
  setPrompt,
  imageCount,
  setImageCount,
  setImageLength,
  imageLength,
}: TProps) => {
  const OPENAI_API_KEY = "";

  const handleGenerateImage = async () => {
    const imageCountNumber = imageCount.split(" ")[0];
    setImageLength(Number(imageCountNumber));

    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: prompt,
        n: parseInt(imageCount.split(" ")[0]),
        size: "512x512",
        response_format: "b64_json",
      }),
    });

    const data = await res.json();
  };

  return (
    <div className="aiImageBg">
      <Container>
        <div className="flex items-center justify-center flex-col pt-28">
          <h2 className="text-6xl font-bold text-white">
            AI Image Generator Tool
          </h2>
          <p className="text-white text-lg w-[600px] text-center mt-3">
            Convert your text into an image within a second using this
            JOB-HUNTER powered AI Image Generator tool
          </p>
        </div>

        <div className="relative mt-8">
          <div>
            <Input
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to see"
              className="rounded-full bg-white border-none h-14 px-5"
            />
          </div>
          <div className="absolute right-[150px] top-4">
            <select
              onChange={(e) => setImageCount(e.target.value)}
              className="bg-transparent"
            >
              {dropDownItem.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={() => handleGenerateImage()}
            className="bg-[#4552E5] text-white rounded-full px-8 absolute right-5 top-2"
          >
            Generate
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AIBannerPart;
