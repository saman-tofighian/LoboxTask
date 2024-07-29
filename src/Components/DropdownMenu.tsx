// Saman Tofighian

import React, { useState, useRef, useEffect } from "react";
import "../../src/App.scss";

interface Option {
  label: string;
  icon: JSX.Element;
}

interface DropdownMenuProps {
  options: Option[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleAddOption = (option: Option) => {
    if (!selectedOptions.some((selected) => selected.label === option.label)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemoveOption = (option: Option) => {
    setSelectedOptions(
      selectedOptions.filter((item) => item.label !== option.label)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      handleAddOption({ label: inputValue, icon: <span /> }); // add a dummy icon
      setInputValue("");
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdownMenu" ref={wrapperRef}>
      <div className="selected-options">
        {selectedOptions.map((option) => (
          <div className="option" key={option.label}>
            {option.icon}
            {option.label}
            <span className="remove" onClick={() => handleRemoveOption(option)}>
              x
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onFocus={() => setDropdownOpen(true)}
      />
      {dropdownOpen && (
        <div className="dropdown-options">
          {options
            .filter(
              (option) =>
                !selectedOptions.some(
                  (selected) => selected.label === option.label
                )
            )
            .map((option) => (
              <div
                className="dropdown-option"
                key={option.label}
                onClick={() => {
                  handleAddOption(option);
                  setDropdownOpen(false);
                }}
              >
                {option.icon}
                {option.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

// Saman Tofighian
