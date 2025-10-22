// RouteProvider.jsx
import { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useLocalStorage("@routes", "features");
  const [path, setPath] = useLocalStorage("@path", "features/converter/pdf-to-sign");
  const [params, setParams] = useLocalStorage("@params", null);

  return (
    <RouteContext.Provider value={{ routes, setRoutes, path, setPath, params, setParams }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
