import logo from "@/assets/logo.jpg";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full bg-black"
    >
      <div className="w-full flex justify-center">
        <img
          src={logo}
          alt="LS Street MMA - Self Defence"
          className="block h-auto w-auto max-w-[300px] md:max-w-[500px] object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;