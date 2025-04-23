interface FetchProductParams {
  page: number;
  pageSize: number;
  category?: number;
  search?: string;
  sort?: string;
}

interface ProductResponse {
  data: {
    id: string;
    name: string;
    productImage?: { url: string }[];
    productRentalPrice: number;
    productRetailPrice: number;
    categories?: { id: number }[];
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
export const fetchProduct = async ({
  page = 1,
  pageSize,
  category,
  search,
}: FetchProductParams): Promise<ProductResponse> => {
  const queryParams = new URLSearchParams({
    "pagination[page]": page.toString(),
    "pagination[pageSize]": pageSize.toString(),
  });

  if (category && category !== 0) {
    queryParams.append("filters[categories][id]", category.toString());
  }
  if (search) {
    queryParams.append("filters[name][$contains]", search);
  }

  const res = await fetch(
    `http://127.0.0.1:1337/api/products?populate=*&${queryParams}`
  );
  return res.json();
};
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
export const fetchProductHome = async () => {
  const query = new URLSearchParams({
    populate: "*",
    pagination: JSON.stringify({
      page: 1,
      pageSize: 4, // 👈 chỉ lấy 4 sản phẩm đầu tiên
    }),
    // sort: JSON.stringify(["productRentalCount:desc"]), // 👈 nếu muốn lấy sản phẩm được thuê nhiều
  });

  const res = await fetch(`http://localhost:1337/api/products?${query}`);
  const data = await res.json();
  return data;
};
