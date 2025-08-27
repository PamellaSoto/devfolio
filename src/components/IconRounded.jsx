const IconRounded = ({ href, label }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-amber-300 p-2"
      href={href}
    >
      {label}
    </a>
  );
};

export default IconRounded;
