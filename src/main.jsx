import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SnackbarProvider } from "./contexts/SnackbarContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "MoonFightTech",
          url: window.location.href,
        },
        infuraAPIKey: "42e45967a1ab45f29138d7585b74b170",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </MetaMaskProvider>
  </StrictMode>
);
