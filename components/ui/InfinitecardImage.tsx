import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have this utility or replace with classnames or string join

interface Card {
    src: string;
    text: string;
}

interface InfiniteMovingCardsProps {
    cards: Card[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
    cards,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [start, setStart] = useState(false);

    // Duplicate cards for seamless scroll
    useEffect(() => {
        if (!scrollerRef.current) return;

        const children = Array.from(scrollerRef.current.children);
        children.forEach((child) => {
            const clone = child.cloneNode(true);
            scrollerRef.current?.appendChild(clone);
        });

        // Set CSS vars for direction and speed
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "right" ? "normal" : "reverse"
            );
            let duration = "20s";
            if (speed === "normal") duration = "40s";
            else if (speed === "slow") duration = "80s";
            containerRef.current.style.setProperty("--animation-duration", duration);
        }

        setStart(true);
    }, [cards, direction, speed]);

    return (
        <>
            <style>
                {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .infinite-scroll {
            animation-name: scroll;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-direction: var(--animation-direction, normal);
            animation-duration: var(--animation-duration, 20s);
            will-change: transform;
          }
        `}
            </style>
            <div
                ref={containerRef}
                className={cn(
                    "overflow-hidden w-full relative",
                    className
                )}
            >
                <div
                    ref={scrollerRef}
                    className={cn(
                        "flex gap-8 w-max",
                        start && "infinite-scroll",
                    )}
                    style={{ width: "max-content" }}
                >
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="relative w-[400px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden shadow-md"
                        >
                            <img
                                src={card.src}
                                alt={card.text}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span
                                    className="tracking-tight text-4xl font-extrabold px-4 py-2 rounded-full"
                                    style={{ color: "rgb(252, 243, 207)" }}
                                >
                                    {card.text}
                                </span>
                            </div>
                        </div>                      
                    ))}
                </div>
            </div>
        </>
    );
};
