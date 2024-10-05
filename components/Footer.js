const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <style jsx>{`
        footer {
          text-align: center;
          padding: 20px;
          background-color: #333;
          color: #fff;
          position: relative;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
