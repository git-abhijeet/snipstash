import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    fullWidth?: boolean;
}

export function Button({
    children,
    className,
    variant = "primary",
    fullWidth = false,
    ...props
}: ButtonProps) {
    const baseStyles = "font-medium rounded-md transition-colors px-4 py-2";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "border border-gray-300 hover:bg-gray-50",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${
                fullWidth ? "w-full" : ""
            } ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
