const GET = async (id = "") => {
  const res = await fetch(`/.netlify/functions/http-id?id=${id}`);
  const data = await res.json();
  return data;
};

const GET_2 = async (search = "two") => {
  const res = await fetch(`/.netlify/functions/http-search?search=${search}`);
  const data = await res.json();
  return data;
};

const GET_3 = async (category = "", page = "") => {
  const res = await fetch(
    `/.netlify/functions/http?category=${category}&page=${page}`
  );
  const data = await res.json();
  return data;
};

export { GET, GET_2, GET_3 };
