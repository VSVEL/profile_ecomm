// components/Sidebar.tsx
"use client"
import { FC, useState } from "react";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  Package2,
  Search,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar for screens below 700px */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white border-r border-gray-200 transition-transform md:hidden ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span>Profile E-Comm</span>
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="ml-auto h-8 w-8"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <nav className="flex-1 px-2 text-sm font-medium lg:px-4">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
            </Link>
          </nav>
        </div>
      </div>

      {/* Menu Button for screens above 700px */}
      <div className="md:hidden fixed top-0 left-0 z-50 p-4">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="icon"
          className="h-8 w-8"
        >
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
