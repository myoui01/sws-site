import React from 'react';

const SearchPopup: React.FC = () => {
  return (
    <div className="search-popup">
      <button type="button" className="search-popup__close">
        <i className="fas fa-times"></i>
      </button>
      <form className="search-popup__form">
        <input
          type="text"
          className="search-popup__form__input"
          placeholder="Type Words Then Enter"
        />
        <button className="search-popup__btn">
          <i className="icon-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchPopup;