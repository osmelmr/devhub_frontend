import { useState, useRef, useEffect } from "react";

export const useTodo = () => {
  const refEditting = useRef(false);
  const [editState, setEditState] = useState(false);

  const refInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editState && refInput.current) {
      refInput.current.focus();
      refInput.current.select();
    }
  }, [editState]);
  return { setEditState, refEditting, refInput };
};
