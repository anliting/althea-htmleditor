import{moduleLoader}from'/lib/core.static.js'
export default async()=>{
    let module=await moduleLoader()
    module.styleByPath('https://gitcdn.link/cdn/anliting/htmleditor/9f904627c0ab99c4527ceb3c54a61c5704e6ddec/htmleditor.css').then(style=>
        document.head.appendChild(style)
    )
}
