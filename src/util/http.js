import {loading,success,fail} from "./toast"
export default (axios,config={})=>{
    let modelName = config.name || "default"
    if(!config.api)
        throw new Error(`${modelName}的配置文件中的api选项是必须的`)
    if(Object.prototype.toString.call(config.api) !== "[object Object]")
        throw new Error(`${modelName}的配置文件中的api选项必须是对象`)

    let httpObj = {}
    let api = config.api
    for(let apiName in api){
        let {url,method,isForm,data:apiData,toast,hooks,corsUrl,token} = api[apiName]
        apiData = apiData || {}
        hooks = hooks||{}
        let {beforeReq,afterReqSuccess,afterReqFail} = hooks
        httpObj[apiName]  = async (data = {}) =>{
            let transfromData = null
            if(isForm){
                transfromData = new FormData()
                for(let key in data){
                    transfromData.append(key,data[key])
                }
                for(let key in apiData){
                    transfromData.append(key,apiData[key])
                }
            }else{
                transfromData = Object.assign(apiData,data)
            }

            let body = ''
            if(corsUrl){
                url = corsUrl+url
                corsUrl = "";
            }
            let headers = {};
            let Authorization = (typeof token === "function")&&token()
            if(Authorization){
                headers = {Authorization}
            }
            try{
                beforeReq&&beforeReq.call(config);
                toast && loading();
                switch (method){
                    case "get":
                    case "delete":
                        body = await  axios({
                            url,
                            method,
                            params:transfromData,
                            headers
                        })
                        break
                    case "put":
                    case "post":
                        body = await axios({
                            url,
                            method,
                            data:transfromData,
                            headers
                        })
                        break
                }
                afterReqSuccess&&afterReqSuccess.call(config,body);
                toast && success();
            }catch(error){
                afterReqFail&&afterReqFail.call(config);
                toast && fail();
                return Promise.reject(error)
            }
            return body;
        }
    }
    return httpObj
}