const Footer = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f97316" }}>
      <div
        className="container mx-auto d-flex flex-column flex-md-row
         justify-content-between align-items-center"
      >
        <span
          className="display-4 text-white fw-bold "
          style={{ letterSpacing: "-0.015em" }}
        >
          MernEats.com
        </span>
        <span
          className="display-8 text-white fw-bold  d-flex gap-4"
          style={{ letterSpacing: "-0.015em" }}
        >
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};
export default Footer;
