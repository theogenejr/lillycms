import React, { ReactNode, Ref, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface BaseProps {
  className?: string;
  [key: string]: unknown;
}
type OrNull<T> = T | null;

const cn = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export const Button = React.forwardRef<
  HTMLSpanElement,
  PropsWithChildren<
    {
      active: boolean;
      reversed: boolean;
    } & BaseProps
  >
>(({ className, active, reversed, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cn(
      "cursor-pointer inline-block px-2 py-1 rounded transition-colors",
      reversed
        ? active
          ? "text-white bg-blue-600 hover:bg-blue-700"
          : "text-gray-400 hover:text-gray-600"
        : active
        ? "text-black bg-gray-200 hover:bg-gray-300"
        : "text-gray-300 hover:text-gray-500",
      className
    )}
  />
));

Button.displayName = "Button";

export const EditorValue = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<
    {
      value: any;
    } & BaseProps
  >
>(({ className, value, ...props }, ref) => {
  const textLines = value.document.nodes
    .map((node: any) => node.text)
    .toArray()
    .join("\n");
  return (
    <div ref={ref} {...props} className={cn("mt-8 -mx-5", className)}>
      <div className="text-sm py-1 px-5 text-gray-700 border-t-2 border-gray-200 bg-gray-100">
        Slate's value as text
      </div>
      <div className="text-gray-700 font-mono text-xs whitespace-pre-wrap p-5">
        {textLines}
      </div>
    </div>
  );
});

EditorValue.displayName = "EditorValue";

export const Icon = React.forwardRef<
  HTMLSpanElement,
  PropsWithChildren<BaseProps>
>(({ className, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cn("material-icons text-lg align-text-bottom", className)}
  />
));

Icon.displayName = "Icon";

export const Instruction = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<BaseProps>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn(
      "whitespace-pre-wrap -mx-5 mb-3 py-3 px-5 text-sm bg-yellow-50",
      className
    )}
  />
));

Instruction.displayName = "Instruction";

export const Menu = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<BaseProps>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    data-test-id="menu"
    ref={ref}
    className={cn("space-x-4", className)}
  />
));

Menu.displayName = "Menu";

export const Portal = ({ children }: { children?: ReactNode }) => {
  return typeof document === "object"
    ? createPortal(children, document.body)
    : null;
};

export const Toolbar = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<BaseProps>
>(({ className, ...props }, ref) => (
  <Menu
    {...props}
    ref={ref}
    className={cn(
      "relative py-1 px-5 -mx-5 mb-5 border-b-2 border-gray-200",
      className
    )}
  />
));

Toolbar.displayName = "Toolbar";
