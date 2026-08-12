import { useState } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type FieldProps =
  | ({ as?: "input" } & InputHTMLAttributes<HTMLInputElement>)
  | ({ as: "textarea" } & TextareaHTMLAttributes<HTMLTextAreaElement>);

export default function Field(props: FieldProps) {
  const [focus, setFocus] = useState(false);
  const className = `w-full bg-transparent border-0 border-b outline-none py-3 font-body text-sm text-text-primary placeholder:text-text-secondary transition-colors duration-200 ${
    focus ? "border-border-strong" : "border-border-color"
  }`;

  if (props.as === "textarea") {
    const { as: _as, ...rest } = props;
    return (
      <textarea
        {...rest}
        className={`${className} resize-none`}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    );
  }

  const { as: _as, ...rest } = props;
  return (
    <input
      {...rest}
      className={className}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
}
