export default{
    name:"topic",
    api:{
        getNav:{
            url:'/topic/v1/know/navWap.json',
            method:'get',
            corsUrl:"/api"
        },
        getInit:{
            url:'/topic/v1/find/recManual.json',
            method:'get',
            corsUrl:"/api"
        },
        getMore:{
            url:'/topic/v1/find/recAuto.json',
            method:'get',
            corsUrl:"/api"
        },
    },
}