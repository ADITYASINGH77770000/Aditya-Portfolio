const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`cursor-pointer transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;