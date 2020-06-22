// plugins/route.js
// export default ({app})=>{
//   var token = app.store.getters.genToken
//   app.router.beforeEach((to,from,next)=>{
//     console.log(to);
//     if(to.fullPath == '/'){
//       next()
//     }else{
//       if(!!token){
//         next()
//       }else{
//         next('/')
//       }
//     }
//   })
// }
