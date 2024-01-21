const {
    getDataXml,
    xmlToJson,
    showJsonData
} = require ('./exports')

async function run() {
    const tasks = []

    for (let i = 0; i < 4; i++) {
        // const xml = await getDataXml(`getXML ${i}`);
        // console.log(xml)
        // const json = await xmlToJson(`xml ${i}`);
        // console.log(json)
        // const data = await showJsonData(`json ${i}`);
        // console.log(data)

        tasks.push(getDataXml(`getXML ${i}`))
        tasks.push(xmlToJson(`xml ${i}`))
        tasks.push(showJsonData(`json ${i}`))
    }

    const result = await Promise.all(tasks)
    console.log("Result :: ", result)
}

run()