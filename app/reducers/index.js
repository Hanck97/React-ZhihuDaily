//首页显示的内容
const mainList = (state = {
    latest: [],
    before: []
},action) => {
    switch (action.type){
        case 'GET_LATEST':
        return Object.assign({},state,{
            latest:action.payload.stories
        })
    }
}