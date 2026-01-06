const Button = ({ name }) => {
  return (
    <button
      className="
        px-2 py-[5px] m-2
        sm:px-4 sm:py-[6px] sm:m-3
        bg-gray-200 rounded-lg font-semibold whitespace-nowrap
        text-sm sm:text-base
        focus:bg-black focus:text-white
      "
    >
      {name}
    </button>
  );
};

export default Button;
