export async function fetchProduct() {
  const api_token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const option = {
    headers: {
      Authorization: `Bearer ${api_token}`,
    },
  };

  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/products?populate=*",
      option
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchProductById(id: string) {
  const api_token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const options = {
    headers: {
      Authorization: `Bearer ${api_token}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/products/${id}?populate=*`,
      options
    );
    const response = await res.json();
    return response?.data;
  } catch (err) {
    console.error("Lỗi khi fetch sản phẩm theo ID:", err);
    return null;
  }
}
