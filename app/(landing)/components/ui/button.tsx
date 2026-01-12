type TbuttonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "ghost";
  size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "normal",
  ...props
}: TbuttonProps) => {
  const baseStyle =
    "inline-flex gap-2 duration-300 items-center justify-center cursor-pointer hover:scale-105 rounded-md";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/85",
    dark: "bg-dark text-white hover:bg-dark/85",
    ghost: "bg-transparent text-dark hover:bg-gray-100",
  };

  const sizes = {
    normal: "px-9 py-4",
    small: "px-7 py-[10px]",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
