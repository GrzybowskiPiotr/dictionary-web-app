import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import SEARCH_ICON from "../assets/images/icon-search.svg";
import { searchContext } from "../contexts/searchContext";
export function SearchInput({ setData, fetching }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [searchWord, setSearchWord] = useContext(searchContext);

  const { data, refetch, isFetching } = useQuery({
    queryKey: ["word"],
    queryFn: async () => {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      const data = await res.json();
      if (res.status === 404) {
        setData({ status: 404, responseData: data });
      }

      if (res.ok) {
        setData({ status: 200, responseData: data });
      }

      return data;
    },
    enabled: false,
  });

  const onSubmit = ({ searchInput }) => {
    setSearchWord(searchInput);
    setTimeout(() => refetch(), 0);
  };

  useEffect(() => {
    fetching(isFetching);
  }, [isFetching, fetching]);

  return (
    <form
      className="relative mb-7"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <input
        {...register("searchInput", { required: "Whoops, can’t be empty…" })}
        type="text"
        onChange={() => {
          if (data) {
            setData({ status: null, responseData: null });
          }
        }}
        placeholder="Search for any word…"
        className={`peer font-bold w-full bg-CustomGray-light-200 mt-6 rounded-2xl py-4 px-6 focus:border-1  caret-CustomPurple outline-CustomPurple outline-1 dark:bg-CustomGray-dark-300 dark:text-CustomGray-light-100 last:${
          errors.searchInput
            ? "border-CustomOrange caret-CustomOrange outline-CustomOrange"
            : "border-CustomPurple outline-CustomPurple"
        } `}
      />
      {errors.searchInput && (
        <p className="text-sm ml-1 text-CustomOrange">
          {errors.searchInput.message}
        </p>
      )}
      <button className="outline-CustomPurple absolute right-2 top-7 p-4 dark:bg-CustomGray-dark-300 rounded-2xl" aria-label="Search for a word" type="submit">
        <img src={SEARCH_ICON} alt="search icon" />
      </button>
    </form>
  );
}
