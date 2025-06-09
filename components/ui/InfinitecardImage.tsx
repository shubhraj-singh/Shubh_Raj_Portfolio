import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
    cards,
    direction = "left",
    speed = "fast",
    className,
}: {
    cards: {
        src: string;
        text: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    // Set CSS vars for direction and speed
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

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
