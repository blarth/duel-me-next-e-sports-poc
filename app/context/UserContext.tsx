'use client';

import React, { useState } from 'react';

export interface User {
  name : string,
  image : string,
  blerth : number
}

const UserContext = React.createContext<
  [user : User | null, signUser : (userData : User) => void] | undefined | null
>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const userJson : string | null = localStorage.getItem("user")
  if(userJson){
    const persistedUser : User = JSON.parse(userJson);
    setUser(persistedUser)
  }
  function signUser(userData : User) {//
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }
  return (
    <UserContext.Provider value={[ user, signUser ]}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}