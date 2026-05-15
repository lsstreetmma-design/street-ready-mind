import banner from "@/assets/banner.png";

const Navbar = () => {
  return (
    <nav
      className="w-full m-0 p-0"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="w-full m-0 p-0" style={{ backgroundColor: "#000000" }}>
        <img
          src={banner}
          alt="LS Street MMA - Self Defence"
          className="block w-full h-24 md:h-28 object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;
