import { cn } from "@/lib/utils";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

type TProps = {
  src: string;
  className: string;
};

const PhotoViewer = ({ src, className }: TProps) => {
  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <Image
          src={src}
          className={cn(className, "w-full object-cover cursor-pointer")}
          alt=""
          width={1500}
          height={100}
        />
      </PhotoView>
    </PhotoProvider>
  );
};

export default PhotoViewer;