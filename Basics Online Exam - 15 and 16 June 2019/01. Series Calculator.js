function seriesCalculator(params) {
    let seriesName = params[0];
    let seasons = Number(params[1]);
    let episodes = Number(params[2]);
    let durationWithoutAds = Number(params[3]);
    let lengthPerEpisode = durationWithoutAds * 0.2;
    let durationWithAds = durationWithoutAds + lengthPerEpisode;
    let extraTime = seasons * 10;
    let totalTime = durationWithAds * episodes * seasons + extraTime;
    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(totalTime)} minutes.`)
}
seriesCalculator(["Lucifer", 

    "3", 
    
    "18", 
    
    "55" ])