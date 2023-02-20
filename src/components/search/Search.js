import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchForm from "./SearchForm";
import Button from "../ui/button/Button";
import styles from "./Search.module.css";

const Search = () => {
  const [active, setActive] = useState(false);
  const searchHandler = () => {
    setActive(!active);
  };
  const closeSearchHandler = () => {
    setActive(false);
  };

  return (
    <div className={styles.search}>
      <SearchForm active={active} closeHanlder={closeSearchHandler} />
      <div className={styles.actions__search}>
        <Button
          type="button"
          className={styles.action__search}
          onClick={searchHandler}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
    </div>
  );
};

export default Search;
