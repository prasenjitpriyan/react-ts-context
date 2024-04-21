import "./App.css";
import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timers from "./components/Timers";
import TimersContextProvider from "./store/timers-context";

function App() {
  return (
    <TimersContextProvider>
      <main className="bg-[#AAB7B6] min-h-screen flex flex-col items-center">
        <div className="bg-[#24474E] w-[70%] flex flex-col items-center mt-5 rounded-xl">
          <Header />
          <div className="flex flex-col">
            <AddTimer />
            <Timers />
          </div>
        </div>
      </main>
    </TimersContextProvider>
  );
}

export default App;
