export const combatTacticsGeneric = [
  {
    id: 0,
    useDie: 0,
  },
  {
    id: 1,
    group: "general",
    useTatic: [
      {
        user: "unknown",
        lowHp: "The opponent disengages, dashes or moves away from the combat.",
        withinMelee:
          "The opponent moves to the nearest PC and makes a melee attack.",
        withinRanged:
          "The opponent moves to an optimal distance and makes their attack with a ranged weapon.",
        otherOptions:
          "The opponent moves or dashes to place themselves where they are within range to attack.",
      },
      {
        user: "melee",
        lowHp: "The opponent disengages, dashes or moves away from the combat.",
        withinMelee:
          "The opponent moves to the nearest PC and makes a melee attack.",
        withinRanged:
          "The opponent moves or dashes to place themselves where they can make a melee attack.",
        otherOptions:
          "The opponent moves or dashes to place themselves where they can make a melee attack.",
      },
      {
        user: "rangedOrCaster",
        lowHp: "The opponent disengages, dashes or moves away from the combat.",
        withinMelee:
          "If already within melee range make a melee attack. Otherwise move to optimal position for ranged attack.",
        withinRanged:
          "The opponent moves to an optimal distance and makes their attack with a ranged weapon.",
        otherOptions:
          "The opponent moves or dashes to find cover and ready themselves to make a ranged attack.",
      },
    ],
  },
  {
    id: 2,
    group: "goblinoid",
    useTatic: [
      {
        user: "goblin",
        lowHp: "The opponent disengages, dashes or moves away from the combat.",
        withinMelee:
          "If already within melee range make a melee attack on the nearest PC (or last to hit them). Otherwise move to optimal position for ranged attack.",
        withinRanged:
          "The opponent moves to an optimal distance, attempts to hide, and makes their attack with a ranged weapon.",
        otherOptions:
          "The opponent moves or dashes to hide and ready themselves to make a ranged attack.",
      },
      {
        user: "kobold",
        lowHp: "The opponent dashes or moves away from the combat.",
        withinMelee:
          "If two or more can reach the same target the Kobold moves to the use their swarm effect and makes a melee attack on the nearest PC.",
        withinRanged:
          "The opponent moves to an optimal distance, attempts to hide, and makes their attack with a ranged weapon.",
        otherOptions:
          "The opponent moves or dashes to place themselves where they can make an attack.",
      },
      {
        user: "orc",
        lowHp:
          "The opponent disengages or dashes and moves away from the combat.",
        withinMelee:
          "The opponent moves to the nearest PC and makes a melee attack. They use their bonus action for aggresive movement if they have line of sight on a PC.",
        withinRanged:
          "The opponent moves and dashes to place themselves where they can make a melee attack. They add their bonus action for aggresive movement if they have line of sight on a PC.",
        otherOptions:
          "The opponent moves and dashes to place themselves where they can make a melee attack. They add their bonus action for aggresive movement if they have line of sight on a PC.",
      },
      {
        user: "gnoll",
        lowHp: "The opponent dashes or moves away from the combat.",
        withinMelee:
          "The Gnoll moves to the nearest melee and uses their Rampage feature to attack.",
        withinRanged:
          "The opponent moves or dashes toward the combat. They only use their ranged attack on fleeing PCs",
        otherOptions:
          "The opponent moves or dashes toward the combat in order to join melee.",
      },
      {
        user: "hobgoblin",
        lowHp: "The opponent disengages, dashes or moves away from the combat.",
        withinMelee:
          "The Hobgoblin will attack elves first. They only attack a PC already facing another opponent (to use their swarm effect) and will use their Rampage effect. Do not engage a PC alone.",
        withinRanged:
          "The opponent moves to an optimal distance, attempts to hide, and makes their attack with a ranged weapon.",
        otherOptions:
          "The opponent moves or dashes to find cover and ready themselves to make a ranged attack.",
      },
      {
        user: "bugbear",
        lowHp: "The opponent dashes and moves away from the combat.",
        withinMelee:
          "The opponent moves to the nearest melee and makes a surprise attack (if possible). They use their bonus action for aggresive movement if they have line of sight on a PC.",
        withinRanged:
          "The opponent hides or moves to find cover and readies their attack. They only use their ranged attack on fleeing PCs",
        otherOptions:
          "The opponent hides or moves to find cover and readies their attack.",
      },
    ],
  },
];
