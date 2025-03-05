import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Mentinator</h3>
            <p className="text-sm text-muted-foreground">
              Connect with top experts in Tech & AI Mentorship, Startup & Business Consulting, and Career Coaching.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/experts" className="text-muted-foreground hover:text-foreground">
                  Find Mentors
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/become-expert" className="text-muted-foreground hover:text-foreground">
                  Become a Mentor
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" className="max-w-[220px]" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mentinator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

