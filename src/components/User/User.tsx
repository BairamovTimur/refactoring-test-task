import { memo } from "react";
import "./styles.css";

export const User = memo(
  ({
    id,
    enabled,
    name,
    onChange,
    index,
  }: {
    id: number;
    enabled: boolean;
    name: string;
    onChange: (id: number) => void;
    index: number;
  }) => {
    return (
      <li>
        <label className="user" key={id}>
          <input
            key={index}
            type="checkbox"
            checked={enabled}
            onChange={() => onChange(id)}
          />
          {name}
        </label>
      </li>
    );
  }
);
