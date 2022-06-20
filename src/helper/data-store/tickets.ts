import create from "zustand";
import { ISearchText, ISelectFilter, ITickets } from "../Typeface";

export const useTickets = create<ITickets>((set) => ({
  tickets: [],

  setTickets: (tickets) =>
    set((state) => ({
      ...state,
      tickets: tickets,
    })),
}));

export const useSearchText = create<ISearchText>((set) => ({
  searchText: "",

  setSearchText: (searchText) =>
    set((state) => ({
      ...state,
      searchText: searchText,
    })),
}));

export const useSelectFilter = create<ISelectFilter>((set) => ({
  selectFilter: "",
  setSelectFilter: (selectFilter) =>
    set((state) => ({
      ...state,
      selectFilter: selectFilter,
    })),
}));
