import Link from "next/link";
import { memo } from "react";
import { Twitter, Facebook, Linkedin } from "lucide-react";

export const Footer = memo(() => {
  return (
    <footer className="bg-background py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Top Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm text-muted-foreground">
          <Link href="#about" className="hover:text-main transition-colors">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-main transition-colors">
            Contact
          </Link>
          <Link href="#privacy" className="hover:text-main transition-colors">
            Privacy Policy
          </Link>
          <Link href="#terms" className="hover:text-main transition-colors">
            Terms of Service
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4 text-muted-foreground">
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="h-5 w-5 hover:text-main transition-colors" />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <Facebook className="h-5 w-5 hover:text-main transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="h-5 w-5 hover:text-main transition-colors" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; 2025 Task Flow. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
