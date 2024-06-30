import { useState } from "react";

export default function useToggle(value: boolean) {
  const [active, setActive] = useState(value ?? false);

  function toggleActive() {
    setActive(true);
  }

  const r: [boolean, () => void] = [active, toggleActive];

  return r;
}