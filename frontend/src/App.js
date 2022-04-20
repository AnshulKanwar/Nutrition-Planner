import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App bg-[#F0F1F4] min-h-screen text-slate-600">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <div className="w-4/5 mx-auto">
            <Routes>
              <Route path="/login" exact element={<LoginPage />} />

              <Route
                path="/"
                exact
                element={
                  // <PrivateRoute>
                    <Calculator />
                  // </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
