import { useContext, useState } from "react";
import { MainContext } from "../context/context";

const Header = () => {
  const { total, money } = useContext(MainContext);
  return (
    <>
      {(total > 0 && (
        <div>Harcayacak {money - total} $ paranız kaldı.</div>
      )) || <div>Harcaman için {money} $ paranız var.</div>}
    </>
  );
};

export default Header;
