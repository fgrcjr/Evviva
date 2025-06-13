"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  href: string;
  label: string;
}

interface NavigationDropdownProps {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  isActive?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
  className?: string;
}

export const NavigationDropdown = ({
  label,
  href,
  dropdown,
  isActive = false,
  onClose,
  isMobile = false,
  className = "",
}: NavigationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    onClose?.();
  };

  const isCurrentPath = pathname === href || pathname?.startsWith(href + "/");

  if (!dropdown) {
    return (
      <Link
        href={href}
        className={`transition-colors hover:text-sage-600 flex items-center ${
          isCurrentPath ? "text-sage-700 font-semibold" : "text-gray-600"
        } ${className}`}
        onClick={onClose}
      >
        {label}
      </Link>
    );
  }

  if (isMobile) {
    return (
      <div>
        <button
          onClick={toggleDropdown}
          className={`flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium ${
            isCurrentPath
              ? "text-sage-700 bg-sage-50"
              : "text-gray-600 hover:text-sage-600 hover:bg-sage-50"
          } ${className}`}
          aria-expanded={isOpen}
        >
          {label}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="pl-4 mt-1 space-y-1">
            {dropdown.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className={`block px-3 py-2 rounded-md text-sm ${
                  pathname === subItem.href
                    ? "text-sage-700 bg-sage-50"
                    : "text-gray-500 hover:text-sage-600 hover:bg-sage-50"
                }`}
                onClick={handleItemClick}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
      <button
        onClick={toggleDropdown}
        className={`text-sm transition-colors hover:text-sage-600 flex items-center ${
          isCurrentPath ? "text-sage-700 font-semibold" : "text-gray-600"
        } ${className}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-56 bg-white/95 backdrop-blur-sm shadow-lg rounded-md py-2 z-10">
          {dropdown.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className={`block px-4 py-2 text-sm transition-colors ${
                pathname === subItem.href
                  ? "bg-sage-50 text-sage-700 font-medium"
                  : "text-gray-600 hover:bg-sage-50 hover:text-sage-700"
              }`}
              onClick={handleItemClick}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
