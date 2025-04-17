export const fetchCategories = async () => {
  const api_token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const option = {
    headers: {
      Authorization: `Bearer ${api_token}`,
    },
  };
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/categories",
      option
    ); // ⚡ API categories
    if (!response.ok) {
      throw new Error("Không thể lấy danh mục");
    }
    return await response.json();
  } catch (error) {
    console.error("Lỗi khi fetch danh mục:", error);
    return { data: [] }; // Trả về mảng rỗng nếu lỗi
  }
};
