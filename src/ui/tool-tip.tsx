import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type ToolTipProps = {
  message: string;
  event?: "mouseover" | "click";
};

export default function Tooltip({
  message,
  event = "mouseover",
}: ToolTipProps) {
  const toolTipRef = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const [showTooltip, setShowToolTip] = useState(false);

  useEffect(() => {
    let parentElement = toolTipRef.current?.parentElement;

    function handleMouseOver() {
      let rect = parentElement?.getBoundingClientRect();
      setPos({ x: rect?.right ?? +7, y: rect?.y ?? +rect.height / 2 - 20 });
      setShowToolTip(true);
    }

    function handleMouseOut() {
      setShowToolTip(false);
    }

    parentElement?.addEventListener(event, handleMouseOver);
    parentElement?.addEventListener("mouseout", handleMouseOut);

    return () => {
      parentElement?.removeEventListener(event, handleMouseOver);
      parentElement?.removeEventListener("mouseout", handleMouseOut);
    };
  }, [event]);

  return (
    <div className="inline" ref={toolTipRef}>
      {showTooltip ? (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          style={{ position: "fixed", left: `${pos.x}px`, top: `${pos.y}px` }}
          className="tooltip whitespace-nowrap"
        >
          {message}
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}
