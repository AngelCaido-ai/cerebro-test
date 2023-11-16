import {ChangeEvent, InputHTMLAttributes} from "react";
import {useDebounce} from "../../hooks";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  onChange: Dispatch<string>
}

export const SearchInput = ({onChange, ...props}: Props) => {

  const onInput = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }, 300);

  return (
    <input className="p-2 min-w-[300px] rounded-lg" onChange={onInput} {...props}/>
  )
};