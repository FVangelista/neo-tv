const GET = async (id = "") => {
  const res = await fetch(
    `${process.env.BASEURL}${id}?api_key=${process.env.APIKEY}&language=en-US`
  );
  const data = await res.json();
  return data;
};

const GET_2 = async (search = "two") => {
  const res = await fetch(
    `${process.env.BASEURLSEARCH}api_key=${process.env.APIKEY}&language=en-US&page=1&query=${search}`
  );
  const data = await res.json();
  return data;
};

const GET_3 = async (category = "", page = "") => {
  const res = await fetch(
    `${process.env.BASEURL}${category}?api_key=${process.env.APIKEY}&language=en-US&page=${page}`
  );
  const data = await res.json();
  return data;
};

export { GET, GET_2, GET_3 };
