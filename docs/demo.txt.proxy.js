
exports.operations=[
    (fileInfo,options) => {

    }
]
exports.appender ={
    // todo 
}
exports.add ={
    //todo
}
exports.replace = [
    (fileInfo,options)=>{
        return {
            from :  /foo/g,
            to : 'bar'
        }
    },
    (fileInfo,options)=>{
        return new Promise((r,j)=>{
            r({
                from : 'abc',
                to : "aaa"
            })
        })
    },
    {
        from : 'abc',
        to : 'ccc'
    }
]