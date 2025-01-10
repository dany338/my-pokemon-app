import React from "react";
import { QueryClient, QueryClientProvider as RQProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5000,
    },
  },
});

const QueryClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <RQProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </RQProvider>
  );
};

export default QueryClientProvider;
