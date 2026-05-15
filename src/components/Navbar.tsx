import banner from "@/assets/banner.png";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full m-0 p-0"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="w-full flex justify-center m-0 p-0" style={{ backgroundColor: "#000000" }}>
        <img
          src={banner}
          alt="LS Street MMA - Self Defence"
          className="block h-auto max-h-24 md:max-h-28 w-auto max-w-[90%] object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;
