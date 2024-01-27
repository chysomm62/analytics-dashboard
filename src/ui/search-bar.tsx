import { SearchIcon } from "@/assets/icons";
import { ChangeEvent, HTMLProps } from "react";

type SearchBarProps = {
  className?: string;
  placeholder?: string;
  value?: string;
  theme?: "dark" | "light";
  variant?: "auto" | "expanded";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
} & React.HTMLAttributes<HTMLInputElement> &
  Omit<HTMLProps<HTMLInputElement>, "onChange">;

export default function SearchBar({
  className,
  placeholder,
  variant = "auto",
  value,
  theme,
  ...props
}: SearchBarProps) {
  return (
    <>
      <div className="w-full h-10 pl-4 relative">
        <div className="absolute left-0 top-0 h-full w-10 flex items-center justify-center">
          <SearchIcon className="text-lg" />
        </div>

        <input
          type="text"
          {...props}
          value={value}
          onChange={props.onChange}
          placeholder="Search..."
          className={`placeholder:text-neutral-400/80  ${
            theme === "dark" ? " text-neutral-100" : "text-neutral-400"
          } text-base font-normal font-['Inter'] leading-normal outline-none border-none  w-full h-full rounded-3xl p-1 bg-white/10 border-transparent focus:border-transparent`}
          style={{
            paddingLeft: "40px",
            borderRadius: "24px",
            color:
              theme === "dark" ? " rgba(245,245,245,1)" : "rgba(163,163,163,1)",
          }}
        />
      </div>
    </>
  );
}
