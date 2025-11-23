import Logo from "../CommonComponents/Logo";
import NavLinks from "../HeaderItems/NavLinks";
import ActionButtons from "../HeaderItems/ActionButtons";

function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo textColor="black" />
          <NavLinks/>
          <ActionButtons />
        </div>
      </div>
    </header>
  );
}

export default Header;
