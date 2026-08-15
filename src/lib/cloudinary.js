// src\lib\cloudinary.js
export const uploadToCloudinary = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    if (data.secure_url) {
      // Automatic image optimization & sizing applied
      return data.secure_url.replace('/upload/', '/upload/f_auto,q_auto,w_500,h_500,c_fill/');
    }
    throw new Error("Cloudinary upload failed");
  } catch (error) {
    console.error("Cloudinary Error:", error);
    throw error;
  }
};