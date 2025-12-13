import React from "react";

const baseStyles =
  "relative py-2 px-3 overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

const glowStyles = "hover:shadow-lg hover:shadow-yellow-500/25";

const shineEffect =
  "after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] after:transition-transform after:duration-300 hover:after:translate-x-[100%]";

export const GlowingButton = React.forwardRef(
  (
    {
      children,
      className = "",
      disabled = false,
      type = "button",
      onClick,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={`${baseStyles} ${glowStyles} ${shineEffect} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
);

GlowingButton.displayName = "GlowingButton";

export const GlowingLink = React.forwardRef(
  ({ children, className = "", disabled = false, href, ...props }, ref) => (
    <a
      ref={ref}
      href={disabled ? undefined : href}
      className={`inline-flex items-center justify-center ${baseStyles} ${glowStyles} ${shineEffect} ${
        disabled ? "pointer-events-none" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  )
);

GlowingLink.displayName = "GlowingLink";
