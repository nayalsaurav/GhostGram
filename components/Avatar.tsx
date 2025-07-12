import React from "react";
import ColorHash from "color-hash";

const colorHash = new ColorHash({ saturation: 1.0 });

const stringToColour = (s: string): string => colorHash.hex(s);

const generateColours = (s: string): [string, string] => {
  const mid = Math.floor(s.length / 2);
  const s1 = s.slice(0, mid);
  const s2 = s.slice(mid);
  return [stringToColour(s1), stringToColour(s2)];
};

type GradientAvatarProps = {
  name: string;
  size?: number;
  className?: string;
};

export const GradientAvatar: React.FC<GradientAvatarProps> = ({
  name,
  size = 64,
  className = "",
}) => {
  const [c1, c2] = generateColours(name);
  const id = `gradient-${btoa(name).replace(/[^a-z0-9]/gi, "")}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={id}
          x1="0"
          y1="0"
          x2={size}
          y2={size}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={`url(#${id})`} />
    </svg>
  );
};
