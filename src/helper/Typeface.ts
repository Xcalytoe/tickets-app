export interface ISearch {
  placeholder: string;
  onChange: (e: React.SyntheticEvent, value: string) => void;
}
export interface IState {
  id: number;
  name: string;
  value: string;
  count: number;
}
export interface ISelect {
  selectOption: { id: number; name: string; value: string; count: number }[];
  onChange: (value: string) => void;
  defaultOption: { id: number; name: string; value: string; count: number };
}

export interface IGetSample {
  id: number;
  title: string;
  created_time: string;
  created_time_utc: string;
  forum: {
    id: number;
    title: string;
    url: string;
  };
  author: {
    id: number;
    display_name: string;
    avatar_url: string;
    is_staff: boolean;
  };
  latest_post_author: {
    id: number;
    display_name: string;
    avatar_url: string;
    is_staff: boolean;
  };
  num_replies: number;
  status: string;
  url: string;
}

export interface ITickets {
  tickets: [];
  setTickets: (tickets: []) => void;
}
export interface ISearchText {
  searchText: string;
  setSearchText: (searchText: string) => void;
}
export interface ISelectFilter {
  selectFilter: string;
  setSelectFilter: (selectFilter: string) => void;
}
