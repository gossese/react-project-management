import Sidebar from "./components/SideBar";
import MainScreen from "./components/MainScreen";
import TaskContextProvider from "./store/task-context";
import ProjectContextProvider from "./store/project-context";

function App() {
  return (
    <ProjectContextProvider>
      <TaskContextProvider>
        <main className="flex flex-row gap-8 h-screen">
          <h1 className="hidden">Project Management React App</h1>
          <Sidebar />
          <MainScreen />
        </main>
      </TaskContextProvider>
    </ProjectContextProvider>
  );
}

export default App;
