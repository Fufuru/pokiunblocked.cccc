"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3876],{6404:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var l=s(8661),i=s(6727),a=s(512),r=s(241),n=s(4833),u=s(394),c=s(4481),m=s(4278),o=s(2338);const d=(0,i.ZP)({resolved:{},chunkName:()=>"app-components-TileLabel",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!s.m[t]},importAsync:()=>Promise.all([s.e(1828),s.e(170),s.e(9406)]).then(s.bind(s,5060)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return s(t)},resolve(){return 5060}});function h(e){let{className:t,width:s=r.eY[1],data:i={id:0,image:{path:""},isNew:!1,slug:"",title:"",url:"",isGoodSearchResults:!1},list:h,idx:_,label:g,lazy:p=!0,onClick:y,panelSection:f,trackingIndex:N}=e;const v=(0,c.u2)({width:s,image:i.image}),A=(0,c.u2)({width:2*s,image:i.image}),w=(0,l.useMemo)((()=>(0,m.i)({label:g,isNew:i.isNew})),[g,i.isNew]),S=(0,l.useCallback)((e=>{e.preventDefault(),y&&y();const{pageY:t}=e,l=N||_;(0,n.y)({id:i.id,image:"a",path:i.url,width:s,panelSection:f,index:l,type:"game",list:h,y:t}),(0,u.Z)().push(i.url)}),[y,i.id,i.url,f,_,N,h]),E=(0,a.W)(o.summaryTile,o.summaryTile_fixedAspectRatio,i.isGoodSearchResults&&o.summaryTile_goodSearchResult,t);return l.default.createElement("a",{className:E,href:i.url,onClick:S},l.default.createElement("img",{src:v,srcSet:`${v} 1x, ${A} 2x`,width:s,height:s,className:o.summaryTile__img,loading:p?"lazy":"eager",alt:i.title}),l.default.createElement("span",{className:o.summaryTile__title},i.title),w&&l.default.createElement(d,{label:w}))}}}]);