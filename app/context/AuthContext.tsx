'use client';
import react, { createContext, useContext } from "react";


/* const AuthContext = createContext<[string | null, (authData : string) => void] | undefined>(undefined);

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children } : { children: React.ReactNode }) {

  const authJson : string | null = localStorage.getItem("auth")
  const [auth, setAuth] = react.useState<string | null>(null);
  if(authJson){
    const persistedAuth : string = JSON.parse(authJson);
    setAuth(persistedAuth)
  }
  function signIn(authData : string) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={[ auth, signIn]}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
} */