import { useState, type ChangeEvent, type FormEvent } from "react";

export const CloudinaryExample = () => {
  const [file, setFile] = useState<File | null>(null); // archivo seleccionado
  const [image, setImage] = useState<string | null>(null); // URL de la imagen subida
  const [loading, setLoading] = useState(false); // estado de carga

  // Cambia estas variables con tus datos de Cloudinary
  const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_AVATARS_PRESET;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return alert("Selecciona una imagen primero");

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImage(data.secure_url); // guardamos la URL de la imagen
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      alert("Error al subir la imagen");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Subir imagen a Cloudinary</h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Subir Imagen
        </button>
      </form>

      {loading && <p className="mb-4 text-blue-500">Subiendo imagen...</p>}

      {image && (
        <div className="flex flex-col items-center">
          <p className="mb-2">Imagen subida:</p>
          <img
            src={image}
            alt="Uploaded"
            className="w-64 h-64 object-cover rounded shadow"
          />
          <p className="mt-2 text-sm text-gray-700 break-all">{image}</p>
        </div>
      )}
    </div>
  );
};
