import React, { useState } from "react";
import { GlobalStyle } from "./components/style/GlobalStyle.styles";
import Support from "./pages/Support";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/" element={<Support />} />
          {/* 404 rounte */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
