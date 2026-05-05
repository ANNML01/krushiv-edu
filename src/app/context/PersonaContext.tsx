"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Persona = 'student' | 'teacher' | 'parent';

interface PersonaContextType {
  persona: Persona;
  setPersona: (persona: Persona) => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [persona, setPersonaState] = useState<Persona>('student');

  useEffect(() => {
    const saved = localStorage.getItem('krushiv_persona') as Persona;
    if (saved) setPersonaState(saved);
  }, []);

  const setPersona = (p: Persona) => {
    setPersonaState(p);
    localStorage.setItem('krushiv_persona', p);
  };

  return (
    <PersonaContext.Provider value={{ persona, setPersona }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
}
