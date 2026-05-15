import banner from "@/assets/banner.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="w-full flex justify-center">
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
