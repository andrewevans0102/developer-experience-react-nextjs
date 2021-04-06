import Link from "next/link";
const Header = () => {
  return (
    <nav className="header">
      <span>
        <Link href="/">Home</Link>
      </span>
      <span>
        <Link href="/episodes">Episodes</Link>
      </span>
      <span>
        <Link href="/season2">Season 2</Link>
      </span>
      <span>
        <Link href="/quotes">Quotes</Link>
      </span>
    </nav>
  );
};
export default Header;
