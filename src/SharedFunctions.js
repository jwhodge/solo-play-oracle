export const diceRoll = function diceRoll(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};

export const parseAdvantage = function parseAdvantage(select, min, max) {
  let arr = [diceRoll(min, max), diceRoll(min, max)];
  switch (select) {
    case "std":
      return arr[0];
    case "adv":
      if (arr[0] < arr[1]) {
        return arr[1];
      }
      return arr[0];
    case "dis":
      if (arr[0] < arr[1]) {
        return arr[0];
      }
      return arr[1];
    default:
      return arr[0];
  }
};

export const tagConstructor = function tagConstructor(arr, index) {
  let sourceArr = arr[index];
  let codeTags = ['<span class="feedTag ', '">', ": </span> "];
  let outputString = codeTags[0].concat(
    sourceArr.style,
    codeTags[1],
    sourceArr.label,
    codeTags[2],
    "<br/>"
  );
  return outputString;
};

export const dieRollConstructor = (
  dieRolled,
  withAdv,
  result,
  tagArr,
  tagIndex
) => {
  let tag = tagConstructor(tagArr, tagIndex);
  let textArr = [
    "Your **d",
    "** roll ",
    "with advantage ",
    "with disadvantage ",
    "returned a **",
    "**.",
  ];

  let advantage = (y) => {
    if (y === "adv") {
      return textArr[2];
    } else if (y === "dis") {
      return textArr[3];
    } else return "";
  };

  let outputString = tag.concat(
    textArr[0],
    dieRolled,
    textArr[1],
    advantage(withAdv),
    textArr[4],
    result,
    textArr[5]
  );
  return outputString;
};

export const immersionMarkdownConstructor = (
  source,
  selector,
  tagArr,
  tagIndex
) => {
  const tag = tagConstructor(tagArr, tagIndex);
  if (selector === "general") {
    let index = diceRoll(source[7].minVal, source[7].useDie);
    return tag.concat(source[7].descriptionArr[index]);
  } else {
    let descriptor = "";
    let array = [];
    if (selector === "specific") {
      array = source[diceRoll(source[0].minVal, source[0].useDie)];
      let selected = diceRoll(array.minVal, array.useDie);
      descriptor = array.descriptionArr[selected];
    } else {
      source.forEach((element, index) => {
        if (element.type === selector) {
          array = source[index];
          let selected = diceRoll(array.minVal, array.useDie);
          descriptor = array.descriptionArr[selected];
        }
      });
    }
    return tag.concat(
      array.descriptionArr[0],
      "**",
      descriptor,
      "**",
      array.descriptionArr[1]
    );
  }
};

export const dcManager = (arr, adv, type, playerRoll, tagArr, tagIndex) => {
  let tag = tagConstructor(tagArr, tagIndex);
  let keyRoll = parseAdvantage(adv, arr[0].dieMin, arr[0].useDie);
  let dcNumber = arr[keyRoll].minCheck;
  let dcLevel = arr[keyRoll].description;
  let result = " check **succeeds**!. You get what you were seeking.";
  if (playerRoll < dcNumber) {
    result = " check **fails**!. Sorry, try another approach.";
  }
  let mdOut = tag.concat("The DC was **", dcLevel, "**. Your ", type, result);
  return mdOut;
};

export const reduceOrExpand = (id, changeClass) => {
  let controlUnit = document.getElementById(id);
  if (controlUnit.classList.contains(changeClass)) {
    controlUnit.classList.remove(changeClass);
  } else {
    controlUnit.classList.add(changeClass);
  }
};

export const generateOptionsFromList = (
  arr,
  elementId,
  rangeMin,
  rangeMax,
  labelName
) => {
  const location = document.getElementById(elementId);
  arr.forEach((element, index) => {
    if (index >= rangeMin && index < rangeMax) {
      let newOption = document.createElement("option");
      let type = element.name;
      let label = document.createTextNode(element[labelName]);
      location.appendChild(newOption);
      newOption.value = [type];
      newOption.appendChild(label);
    }
  });
};

export const oracleRollConstructor = (
  actOrQuest,
  actionOut,
  questionOut,
  playerIn,
  withAdv,
  tagArr,
  tagIndex
) => {
  let source = {};
  if (actOrQuest === "action") {
    source = actionOut;
  } else {
    source = questionOut;
  }
  let tag = tagConstructor(tagArr, tagIndex);
  let x = parseAdvantage(withAdv, source[0].minVal, source[0].useDie);
  let markdown = source[x].result.concat(
    "**",
    playerIn,
    "**",
    ". ",
    source[x].additional,
    source[x].message,
    source[x].instruction
  );
  let tagAndMarkdown = tag.concat(markdown);
  return tagAndMarkdown;
};
