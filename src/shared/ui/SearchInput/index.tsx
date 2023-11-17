import {ChangeEvent, Dispatch} from "react";
import {useDebounce} from "../../hooks";

interface Props {
  onChange: Dispatch<string>
  placeholder: string;
}

export const SearchInput = ({onChange, placeholder}: Props) => {

  const onInput = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }, 300);

  return (
    <input className="p-2 min-w-[300px] rounded-lg" onChange={onInput} placeholder={placeholder}/>
  )
};