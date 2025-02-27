import { RouterProvider } from "react-router";
import { ThemeProvider } from "./components/providers/theme-provider";
import { router } from "./pages/Router/Router";

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
