import Button from "./UI/Button";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full h-[100px] p-5">
      <h1 className="text-[#FEFEFF] text-2xl">ReactTimer</h1>
      <Button>Stop Timers</Button>
    </header>
  );
};

export default Header;
