const config = require('../config')
const request = require('koa2-request')


let cache = {
    isFetching : false,
    latestFetchingTimeStamp : null,    
    pro : null,
    payload : null
};

const hasCacheExpired = function(){
    let bExpired = false;
    if(!cache.latestFetchingTimeStamp){
        bExpired = true;
    }else{
        const cur_date = new Date();
        const t1 = cache.latestFetchingTimeStamp.getTime(),
              t2 = cur_date.getTime();
    
        if((t2 - t1) > parseInt(config.CACHE.INTERVAL,10)){
            bExpired = true;
        }
    }    
    return bExpired;
}

const fetchLatestTopics = function () {          
    if(cache.isFetching && !cache.pro){              
        return cache.pro;
    }
    
    let url = `${config.API.BASE}/topics/latest.json`;
    cache.isFetching = true;
    const promise=  new Promise(function (resolve, reject) {
        if(!hasCacheExpired() && cache.payload){            
            resolve(cache.payload);
        }else{            
            cache.latestFetchingTimeStamp = new Date(); 
            request({url: url, json: true}, function (error, response, body) {            
            cache.isFetching = false;
            cache.pro = null;
            cache.payload = body;
            if (error) return reject(error);

            resolve(body);
        })
        }        
    });
    cache.pro = promise;
    return promise;
};

exports.fetchLatestTopics = fetchLatestTopics;