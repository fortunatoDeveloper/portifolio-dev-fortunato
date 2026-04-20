/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
// import ToggleButton from "../ToggleButton/ToggleButton";

const Header = () => {
  return (
    <header className="container fixed top-6 left-1/2 -translate-x-1/2 w-full z-50 md:max-w-3xl lg:max-w-7xl mx-auto">
      <div
        className="flex border-2 border-main-light-grey/80 bg-dark/40 h-16 backdrop-blur-xl rounded-full mx-auto py-4 px-10">
        <div className="flex items-center justify-start z-10">
          <a href="/"><img src="/logo.svg" width="150" height="100" alt="logo" /></a>
        </div>
        <nav className="grow flex justify-center">
          <ul className="flex items-center gap-10 font-semibold text-lg text-primary/80">
            <li className="cursor-pointer hover:text-primary transition-colors"><a href="https://www.fortunatodev.com.br/aboutMe">Sobre</a></li>
            <li className="cursor-pointer hover:text-primary transition-colors"><a href="#projects">Projetos</a></li>
            <li className="cursor-pointer hover:text-primary transition-colors"><a href="#action">Fale comigo</a></li>
          </ul>
        </nav>
        {/* <div className="flex items-center">
          <ToggleButton />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
