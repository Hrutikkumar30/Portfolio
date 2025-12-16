declare global {
  interface Window {
    Typed: new (element: HTMLElement | string, options?: any) => {
      destroy: () => void;
      start: () => void;
      stop: () => void;
      reset: () => void;
    };
  }
}

export {};

