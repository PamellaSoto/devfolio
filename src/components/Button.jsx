const Button = ({ href, label }) => {
  return (
    <a className="cursor-pointer" href={href}>
      {label}
    </a>
  );
};

export default Button;
