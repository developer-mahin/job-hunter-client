import { toast } from "sonner";
export const imageUploadIntoImgbb = (formData: any) => {
  const url = `https://api.imgbb.com/1/upload?key=24d84a68bfdc2c22513e85c053934abf`;

  const image = fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imageData) => {
      return imageData.data.display_url;
    })
    .catch(() => {
      toast.error("Image not upload please try again");
    });

  return image;
};
