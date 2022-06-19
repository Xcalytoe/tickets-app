export interface ISearch {
  placeholder: string;
  onSubmit: (e: React.SyntheticEvent, value: string) => void;
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
