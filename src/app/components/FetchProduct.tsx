export async function fetchProduct() {
  const option = {
    headers: {
      Authorization: `Bearer bfe8274dcc995e17dcf4a9acb0024f12cb19a5d1bf80cfabf4f8dc419fee8388f3112577e437246696be8d3d24b8cb503e74131dcc290d15dc3e74dfe8df3686f1fa7d45b6978e7360a4186d60196463e40e3c5a554f87da540156f26ca8d0dc2b07b37d366c4ad4edc0c1d1b66ca180f030b6ab9cea3ad792f08fe53faaf716`,
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
