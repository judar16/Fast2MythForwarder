import * as fs from "fs"

function formatDate(date: Date, isDateTime: boolean = false): string {
    const d: Date = new Date(date);

    let month: string = '' + (d.getMonth() + 1);
    let day: string = '' + d.getDate();
    let year: number = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    let result: string = [year, month, day].join('-');

    if(isDateTime) {
        let hour: string = d.getHours().toString();
        let minute: string = d.getMinutes().toString();
        let second: string = d.getSeconds().toString();

        if (hour.length < 2) 
            hour = '0' + hour;
        if (minute.length < 2) 
            minute = '0' + minute;
        if (second.length < 2) 
            second = '0' + second;

        result = result + " " + [hour, minute, second].join(':')
    }

    return result;
}

function buildBaseJSON(name: string, dateTimeString: string) {
    let result = {"id":1234567,"name":name,"portrait":"","sheet_template_id":12,"game_id":null,"private":0,"created_at":dateTimeString,"updated_at":dateTimeString,"deleted_at":null,"downloaded_at":dateTimeString,"sheetdata_revision_id":"","sheet_data":{"jsondata":{"name":name,"_meta_sheet_data_version":"1"}}}
    return result;
}

const name: string = "OUTPUT_TEST"
const date: Date = new Date();

fs.writeFile(`${name}-${formatDate(date)}.json`, JSON.stringify(buildBaseJSON(name, formatDate(date, true))), function(err) {
    if (err) throw err;
        console.log("Data written successfully!");
});