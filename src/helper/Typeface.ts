export interface ISearch {
  placeholder: string;
  onSubmit: (e: React.SyntheticEvent, value: string) => void;
}
