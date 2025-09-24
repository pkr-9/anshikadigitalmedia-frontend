import { useRef, useState, type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InteractiveCardProps extends React.ComponentProps<typeof Card> {
  children: ReactNode;
}

export const InteractiveCard = ({
  children,
  className,
  ...props
}: InteractiveCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const spotlightStyle = {
      "--spotlight-x": `${(x / width) * 100}%`,
      "--spotlight-y": `${(y / height) * 100}%`,
    };

    const rotateX = (y / height - 0.5) * -15;
    const rotateY = (x / width - 0.5) * 15;
    const transformStyle = {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    };

    setStyle({ ...spotlightStyle, ...transformStyle });
  };

  const onMouseLeave = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className={cn(
        "relative transition-transform duration-300 ease-out will-change-transform",
        "before:content-[''] before:absolute before:inset-0 before:rounded-lg", // changed to rounded-lg to match card
        "before:bg-[radial-gradient(300px_circle_at_var(--spotlight-x)_var(--spotlight-y),hsl(var(--primary)/0.15),transparent_40%)]",
        "before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
};
