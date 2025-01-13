import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const menuList = [
    { title: "남성", subMenu: ["셔츠", "바지", "신발"] },
    { title: "여성", subMenu: ["드레스", "스커트", "블라우스"] },
    { title: "신생아/유아", subMenu: ["아기 옷", "모자", "양말"] },
    { title: "아동", subMenu: ["티셔츠", "청바지", "운동화"] },
    { title: "Coordi", subMenu: ["스타일 팁", "추천 아이템"] },
  ];

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_JMPBd5OhJOs07PIM0wfX5yhtTU38gjfUQ&s" alt="로고" />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li
              key={menu.title}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="menu-item"
            >
              {menu.title}
              {activeMenu === index && (
                <ul className="submenu">
                  {menu.subMenu.map((sub, subIndex) => (
                    <li key={subIndex} className="submenu-item">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div>
          <FontAwesomeIcon className="search" icon={faSearch} />
          <input type="text" placeholder="검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
