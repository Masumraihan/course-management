import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export function MainNav() {
  const { pathname } = useLocation();

  return (
    <div className='mr-4 hidden md:flex'>
      <Link to='/' className='mr-6 flex items-center space-x-2'>
        <span className='hidden sm:inline-block'>Home</span>
      </Link>
      <nav className='flex items-center space-x-6 text-sm font-medium'>
        <Link
          to='/docs'
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Courses
        </Link>
        <Link
          to='/'
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about") ? "text-foreground" : "text-foreground/60",
          )}
        >
          About Us
        </Link>
      </nav>
    </div>
  );
}
