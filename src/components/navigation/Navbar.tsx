import React from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  logo?: string;
  categories?: Array<{
    name: string;
    href: string;
  }>;
  cartItemCount?: number;
}

const Navbar = ({
  logo = "HealthCo",
  categories = [
    { name: "Blog", href: "/blog" },
    { name: "Where to Buy", href: "/where-to-buy" },
    { name: "Lab Reports", href: "/lab-reports" },
    { name: "Academic Articles", href: "/articles" },
  ],
  cartItemCount = 0,
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full h-20 bg-white border-b border-gray-200 z-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600">
          {logo}
        </a>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {categories.map((category) => (
              <NavigationMenuItem key={category.name}>
                <NavigationMenuLink asChild>
                  <a
                    href={category.href}
                    className="block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {category.name}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>

        {/* Shopping Cart */}
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
