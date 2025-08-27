const SectionTitle = ({ subtitle, title, align }) => {
  return (
    <h2 className={`${align}`}>
      <span>{subtitle}</span>
      {title}
    </h2>
  );
};

export default SectionTitle;
