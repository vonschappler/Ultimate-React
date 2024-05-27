"use client";

import { createContext, useContext, useState } from "react";

const ReservantionContext = createContext();

const initialState = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => {
    setRange(initialState);
  };

  return (
    <ReservantionContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservantionContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservantionContext);
  if (context === undefined)
    throw new Error("ReservationContext was used outside the provider scope");
  return context;
}

export { ReservationProvider, useReservation };
