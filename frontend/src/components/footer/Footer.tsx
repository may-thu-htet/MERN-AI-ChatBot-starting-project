import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          padding: 20,
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center" }}>
          Made with Love by
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://maythuhtet.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              MAY
            </Link>
          </span>
          ❤️
        </p>
      </div>
    </footer>
  );
};
