"use client";

import { store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import "react-quill/dist/quill.snow.css";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
}
