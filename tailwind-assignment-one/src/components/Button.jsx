// eslint-disable-next-line react/prop-types, no-unused-vars
export const Button = ({ disabled, children, onClick, variant }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white h-[35px] text-xs bg-[#8493a5] w-[250px] rounded-md hover:bg-cyan-500 hover:text-black ${disabled ? "bg-[#8493a5]" : "bg-cyan-500"}
      `}
    >
      {children}
    </button>
  );
};
