const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const avatar_preset = import.meta.env.VITE_AVATARS_PRESET;
const project_preset = import.meta.env.VITE_PROJECT_PRESET;
const product_preset = import.meta.env.VITE_PRODUCT_PRESET;

export const uploadImage = async (preset: string, image: File | Blob) => {
  console.log(preset);
  console.log(image);
  let upload_preset = "";
  if (preset === "avatar") {
    console.log(avatar_preset);
    upload_preset = avatar_preset;
  }
  if (preset === "project") {
    console.log(project_preset);
    upload_preset = project_preset;
  }
  if (preset === "product") {
    console.log(product_preset);
    upload_preset = product_preset;
  }
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", `${upload_preset}`);
  for (let entrie of formData.entries()) {
    console.log(entrie);
  }
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  return await response.json();
};
