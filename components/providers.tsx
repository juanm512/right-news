"use client";

import { ThemeProvider } from "next-themes";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableColorScheme={false}
      defaultTheme="light"
    >
      {/* ACA AGREGAR ALGUN BOTON DE CONFIGURACION PARA QUE EL USUARIO PUEDA ELEGIR SI QUIERE ANIMACIONES O NO */}
      {/* <MotionConfig reducedMotion="always"> */}
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
      {/* </MotionConfig> */}
    </ThemeProvider>
  );
}
