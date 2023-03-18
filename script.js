function OpeningCeremony() {
    console.log("Let the games begin");
  
    const sportsObj = { red: 0, blue: 0, green: 0, yellow: 0 };
  
    setTimeout(() => {
      Race100M(sportsObj, (updatedSportsObj) => {
        console.log("Updated score after Race100M:", updatedSportsObj);
        LongJump(updatedSportsObj, (updatedSportsObj) => {
          console.log("Updated score after LongJump:", updatedSportsObj);
          HighJump(updatedSportsObj, (updatedSportsObj) => {
            console.log("Updated score after HighJump:", updatedSportsObj);
            AwardCeremony(updatedSportsObj);
          });
        });
      });
    }, 1000);
  }
  
  function Race100M(sportsObj, callbackFnc) {
    console.log("Starting Race100M");
    const colors = ["red", "blue", "green", "yellow"];
    //10-15
    const times = colors.map(() => Math.floor(Math.random() * 6) + 10);
    const timeMap = colors.reduce(
      (acc, color, index) => ({ ...acc, [color]: times[index] }),
      {}
    );
    const sortedColors = Object.keys(timeMap).sort(
      (a, b) => timeMap[a] - timeMap[b]
    );
    const pointsMap = sortedColors.reduce((acc, color, index) => {
      const points = index === 0 ? 50 : index === 1 ? 25 : 0;
      return { ...acc, [color]: points };
    }, {});
    const updatedSportsObj = { ...sportsObj, ...pointsMap };
    setTimeout(() => {
      console.log("Race100M result:", timeMap);
      console.log("Points Map:", pointsMap);
      console.log("Updated Sports Object after Race100M:", updatedSportsObj);
      callbackFnc(updatedSportsObj);
    }, 3000);
  }
  
  function LongJump(sportsObj, callbackFnc) {
    console.log("Starting LongJump");
    const colors = ["red", "blue", "green", "yellow"];
    const color = colors[Math.floor(Math.random() * 4)];
    const updatedSportsObj = { ...sportsObj, [color]: sportsObj[color] + 150 };
    setTimeout(() => {
      console.log(`Long Jump won by ${color}`);
      console.log("Updated Sports Object after LongJump:", updatedSportsObj);
      callbackFnc(updatedSportsObj);
    }, 2000);
  }
  
  function HighJump(sportsObj, callbackFnc) {
    console.log("Starting HighJump");
    const color = prompt(
      "Which color secured the highest jump? (red/yellow/blue/green)"
    );
    if (color && sportsObj[color]) {
      const updatedSportsObj = { ...sportsObj, [color]: sportsObj[color] + 100 };
      console.log(`High Jump won by ${color}`);
      console.log("Updated Sports Object after HighJump:", updatedSportsObj);
      callbackFnc(updatedSportsObj);
    } else {
      console.log("Event was cancelled");
      callbackFnc(sportsObj);
    }
  }
  
//   function AwardCeremony(sportsObj) {
//     console.log("Final scores:");
//     const sortedColors = Object.keys(sportsObj).sort(
//       (a, b) => sportsObj[b] - sportsObj[a]
//     );
//     sortedColors.forEach((color, index) => {
//       const points = sportsObj[color];
//       const position =
//         index === 0
//           ? "first"
//           : index
  
  
  