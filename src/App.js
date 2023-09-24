import CodeEditor from "./components/CodeEditor";
import Console from "./components/Console";
import Header from "./components/Header";
import ParseTree from "./components/ParseTree";
import MainContext from "./context/GlobalState";

function App() {
  return (
    <MainContext>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "grid",
          gridTemplateRows: "1fr 6.5fr 2.5fr",
          gridTemplateColumns: "7fr 3fr",
        }}
      >
        <Header />
        <CodeEditor />
        <ParseTree />
        <Console />
      </div>
    </MainContext>
  );
}

export default App;
