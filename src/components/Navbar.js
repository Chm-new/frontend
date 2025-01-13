import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navber.css'; 

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
     
      <div className="menu-area">

      <div className="nav-section">
      </div>
        <ul className="menu-list">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_JMPBd5OhJOs07PIM0wfX5yhtTU38gjfUQ&s" alt="로고" />
          
          

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
          <div className='right-menu'>

            <div className="search">
              <FontAwesomeIcon icon={faSearch} />
              <input className='search-input' type="text" placeholder="검색" />
            </div>

            <div className="login-button">
              <FontAwesomeIcon icon={faUser} /> 로그인
            </div> 
            
          </div>

        </ul>
       
      </div>
    </div>
  );
};

export default Navbar;
