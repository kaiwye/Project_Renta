import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ApiProvider } from "./api/ApiContext.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./auth/AuthContext.jsx";
import "./index.css";
import UsersProvider from "./context/UsersContext.jsx";
import AnnouncementsProvider from "./context/AnnouncementsContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ApiProvider>
      <UsersProvider>
        <AnnouncementsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AnnouncementsProvider>
      </UsersProvider>
    </ApiProvider>
  </AuthProvider>
);
