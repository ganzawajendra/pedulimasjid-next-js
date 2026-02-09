import React from "react";

// Menentukan tipe Variant agar konsisten sesuai standar kerja profesional
type ButtonVariant = "primary" | "primaryOutline" | "danger" | "dangerOutline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // Menampung teks atau icon di dalam tombol [cite: 153]
  variant?: ButtonVariant; // Menentukan tampilan tombol
  className?: string; // Memungkinkan penambahan styling kustom dari luar
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  // Base style untuk memastikan tombol terasa nyaman di klik (Usability)
  const baseStyles =
    "rounded-xs transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-md";

  // Definisi warna berdasarkan fungsi tombol dalam sistem
  const variants = {
    primary: "border border-[#023430] bg-[#023430] text-white hover:bg-white hover:text-[#023430]  hover:border-gray-400 hover:border",

    primaryOutline:
      "border border-[#023430] bg-white text-[#023430] hover:bg-[#023430] hover:text-white ",

    danger: "bg-red-600 text-white hover:bg-red-700",

    dangerOutline:
      "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
