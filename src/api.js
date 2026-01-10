export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("https://rakhi-backend-a99y.onrender.com/upload", {
    method: "POST",
    body: formData,
  });

  return res.json();
}
