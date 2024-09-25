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
          className={cn(className, "object-cover cursor-pointer")}
          alt=""
          width={1500}
          height={1500}
        />
      </PhotoView>
    </PhotoProvider>
  );
};

export default PhotoViewer;
