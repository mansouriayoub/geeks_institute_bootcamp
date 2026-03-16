const Navbar = ({ imgUrl }) => {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-6xl mx-auto w-full">
      <a href="#" className="flex items-center gap-2 text-xl font-bold text-slate-800">
        <img src={imgUrl} alt="Company Logo" className="w-8 h-8 object-contain" />
        Company
      </a>
      <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
        <li>
          <a href="#" className="hover:text-slate-900 transition-colors">Home</a>
        </li>
        <li>
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
