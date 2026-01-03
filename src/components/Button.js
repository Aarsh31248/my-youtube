const Button = ({ name }) => {
  return (
    <button className="px-4 py-[6px] m-3 bg-gray-200 rounded-lg font-semibold whitespace-nowrap focus:bg-black focus:text-white">
      {name}
    </button>
  );
};

export default Button;
