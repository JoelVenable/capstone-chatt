import shrinkImage from "browser-image-compression";
import { File } from "@babel/types";

const options = {
  thumbImg: {
    maxSizeMB: 0.3, // 300kb
    maxWidthOrHeight: 400,
    useWebWorker: false
  },
  avatarImg: {
    maxSizeMB: 0.03, // 30kb
    maxWidthOrHeight: 60,
    useWebWorker: false
  }
};

type ImageType = "thumbImg" | "avatarImg";

async function compressImage(
  imageFile: File,
  imageType: ImageType
): Promise<File | undefined> {
  // imageType should be "mainImg", "thumbImg", or "avatarImg"
  // console.log('original file instanceof Blob', imageFile instanceof Blob);
  // console.log(`original file size:  ${imageFile.size / 1024 / 1024} MB`);

  try {
    const compressedFile: File = await shrinkImage(
      imageFile,
      options[imageType]
    );
    // console.log('compressed file instanceof Blob', compressedFile instanceof Blob);
    // console.log(`compressed file size:  ${compressedFile.size / 1024 / 1024} MB`);
    return compressedFile;
  } catch (e) {
    /* eslint-disable-next-line */
    console.log(e);
  }
}

export default compressImage;
