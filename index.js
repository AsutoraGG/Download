import axios from "axios";
import youtubeDl from "youtube-dl-exec";
import { fileURLToPath } from "url";
import path from "path";

import { DownloadDates, SeriesList } from './config.js';


axios.defaults.headers.common["x-tver-platform-type"] = "web" //これがないとtverにはリクエストできん

const ___firename = fileURLToPath(
    import.meta.url);
const ___dirname = path.dirname(___firename);

async function DownloadfromTver(SeriesID) { // put ur UID,Token
    axios.get(DownloadDates.Tver_GetSerise(SeriesID, "UID", "Token", "mylist,later,good,resume")).then(Response => {
        console.log("URL: " + DownloadDates.Tver_Episode(Response.data.result.contents[0].contents[0].content.id))

        youtubeDl(DownloadDates.Tver_Episode(Response.data.result.contents[0].contents[0].content.id), {
            output: `${___dirname}\\video.mp4`
        }).then(() => {
            console.log("Download was completed!"); 
        })
    })
}

DownloadfromTver(SeriesList.Suidau)