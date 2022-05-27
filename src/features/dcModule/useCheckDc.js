import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectDcType, selectPlayerDC } from "./dcSlice";
import { chooseAdvantage } from "../diceRollerModule/diceRollerSlice";

import { feedTypeLabels, difficultyCheck } from "../../oracle-outcomes";
import { dcManager } from "../../SharedFunctions";

function useCheckDc() {
  const [md, setMd] = useState("");
  const adv = useSelector(chooseAdvantage);
  const type = useSelector(selectDcType);
  const playerDC = useSelector(selectPlayerDC);

  useEffect(() => {
    setMd(dcManager(difficultyCheck, adv, type, playerDC, feedTypeLabels, 10));
    return md;
  }, [adv, type, playerDC, md]);

  return md;
}

export default useCheckDc;
