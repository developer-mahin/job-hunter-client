"use client";

import { NextUIProvider } from "@nextui-org/react";
import 'react-quill/dist/quill.snow.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
