export const  DownloadDates = {
    "Tver_Thumb"            : (SeriesID) => `https://statics.tver.jp/images/content/thumbnail/series/large/${SeriesID}.jpg`,
    "Tver_GetSerise" : (SeriesID, platform_uid, platform_token, require_data) => `https://platform-api.tver.jp/service/api/v1/callSeriesEpisodes/${SeriesID}?platform_uid=${platform_uid}&platform_token=${platform_token}&require_data=${require_data}`,
    // [mylist | later | good | resume]
    "Tver_Episode"          : (episode) => `https://tver.jp/episodes/${episode}`
}

export const SeriesList = {
    "Datsuryoku": "srhhiubqnn",
    "Yohukashi" : "srmwc0hkme",
    "ItteQ"     : "sr9gfdf2ex",
    "Suidau"    : "srf5mcrw4o",
    "Crazy"     : "sr033d6j4c"
}