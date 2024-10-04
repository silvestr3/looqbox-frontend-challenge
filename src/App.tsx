import { RouterProvider } from "react-router-dom";
import { appRouter } from "./lib/app-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query-client";
import { GlobalStyle } from "./styles/global-style";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <RouterProvider router={appRouter} />
          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
