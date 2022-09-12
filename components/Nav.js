import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Navigation bar component
const navigationRoutes = [
  "home",
  "about",
  "partners",
  "influencers",
  "contact",
];

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="nav_container">
      {navigationRoutes.map((singleRoute) => {
        return (
          <NavigationLink
            key={singleRoute}
            href={`/${singleRoute}`}
            text={singleRoute}
            router={router}
          />
        );
      })}
    </nav>
  );
}

function NavigationLink({ href, text, router }) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link href={href === "/home" ? "/" : href} passHref>
      <a
        href={href === "/home" ? "/" : href}
        className={`${isActive && "nav_item_active"} nav_item`}
      >
        <span>{text}</span>
      </a>
    </Link>
  );
}
