import { useTimersContext } from "../store/timers-context";
import Button from "./UI/Button";

const Header = () => {
  const timersCtx = useTimersContext();

  return (
    <header className="flex flex-row justify-between items-center w-full h-[100px] p-5">
      <h1 className="text-[#FEFEFF] text-2xl">ReactTimer</h1>
      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
};

export default Header;
