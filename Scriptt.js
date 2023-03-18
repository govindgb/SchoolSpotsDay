function OpeningCeremony(sports, callbackFnc) {
    console.log("Let the games begin");
    setTimeout(() => {
      sports = {red: 0, blue: 0, green: 0, yellow: 0};
      Race100M(sports, callbackFnc);
    }, 1000);
  }
  
  function Race100M(sports, callbackFnc) {
    console.log("Starting Race100M");
    setTimeout(() => {
      const times = {red: Math.floor(Math.random() * 6) + 10,
                     blue: Math.floor(Math.random() * 6) + 10,
                     green: Math.floor(Math.random() * 6) + 10,
                     yellow: Math.floor(Math.random() * 6) + 10};
      const sorted = Object.keys(times).sort((a,b) => times[a] - times[b]);
      
      sports[sorted[0]] += 50;
      sports[sorted[1]] += 25;
      console.log("Race100M completed. Scores:", sports);
      callbackFnc(sports, LongJump);
    }, 3000);
  }
  
  function LongJump(sports, callbackFnc) {
    console.log("Starting LongJump");
    setTimeout(() => {
      const color = ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random() * 4)];
      sports[color] += 150;
      console.log(`LongJump completed. ${color} won. Scores:`, sports);
      callbackFnc(sports, HighJump);
    }, 2000);
  }
  
  function HighJump(sports, callbackFnc) {
    console.log("Starting HighJump");
    const color = prompt("What colour secured the highest jump?");
    if (color && color !== '' && Object.keys(sports).includes(color)) {
      sports[color] += 100;
    } else {
      console.log("Event was cancelled");
    }
    console.log("HighJump completed. Scores:", sports);
    callbackFnc(sports, AwardCeremony);
  }
  
  function AwardCeremony(sports) {
    console.log("Starting AwardCeremony");
    const sorted = Object.keys(sports).sort((a,b) => sports[b] - sports[a]);
    console.log(`${sorted[0]} came first with ${sports[sorted[0]]} points.`);
    console.log(`${sorted[1]} came second with ${sports[sorted[1]]} points.`);
    console.log(`${sorted[2]} came third with ${sports[sorted[2]]} points.`);
  }
  
  OpeningCeremony({red:100,blue:50,green:150,yellow:100}, Race100M);