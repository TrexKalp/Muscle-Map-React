export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "c21c76fa2fmshca97611323aace0p1c3a66jsn9faa413d8ab5",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

interface Props {
  url: string;
  options: RequestInit;
}

export const fetchData = async ({ url, options }: Props) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
