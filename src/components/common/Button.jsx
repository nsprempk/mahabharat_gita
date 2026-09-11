export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const variants = {
    primary: "bg-saffron-500 text-white hover:bg-saffron-600 shadow-sm",
    secondary: "border border-saffron-300 text-saffron-700 hover:bg-saffron-50",
    dark: "bg-spiritual-brown text-white hover:bg-stone-800",
  };

  return (
    <button
      className={`rounded-full px-5 py-3 font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
