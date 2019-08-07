function Plugin(althea){
    althea.setClientModules({
        editpage:'editpage.js'
    })
}
Plugin.prototype.end=function(){
}
Plugin.prototype.shutdownEnd=function(){
}
export default Plugin
