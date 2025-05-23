import { HeaderItemArray } from "./Types";

interface HeaderProps {
  headerItems: HeaderItemArray;
}

const Header: React.FC<HeaderProps> = ({ headerItems }) => {
  return (
    <div className="container">
      <div className="header-container"
      >
        {headerItems.map((val, idx) => {
          return (
            <div key={idx} style={{ flex: 1 }}>
              <a className="header-text" href={val.url}>
                <h1>{val.name}</h1>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
