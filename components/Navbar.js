// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        {/* Add other links as necessary */}
      </ul>
      <style jsx>{`
        nav {
          padding: 20px;
          background: #0070f3;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 20px;
        }
        li a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
