const {
    getDataXml,
    xmlToJson,
    showJsonData
} = require ('./exports')

const cluster = require('cluster')
const process = require('process')

const numWorker = require('os').cpus().length

console.log('numWorker :: ', numWorker)
console.log('isMaster :: ', cluster.isMaster)

if(cluster.isMaster) {
    // for worker
    for (let index = 0; index < numWorker; index++) {
        cluster.fork()
    }
} else {
    async function run() {
        for (let i = 0; i < 4; i++) {
            const xml = await getDataXml(`${i} getXML ${process.pid}`);
            console.log(xml)
            const json = await xmlToJson(`${i} xml ${process.pid}`);
            console.log(json)
            const data = await showJsonData(`${i} json ${process.pid}`);
            console.log(data)
        }
    }
    
    run()
}