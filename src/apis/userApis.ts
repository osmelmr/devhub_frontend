const BASE_URL = "http://127.0.0.1:8000/api/v1/users/";
export const deleteAvatar = async () => {
  const token = localStorage.getItem("access");
  const res = await fetch(`${BASE_URL}delete/avatar/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Error al eliminar avatar (${res.status})`);
  }
  return res.json();
};
