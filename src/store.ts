import {useSyncExternalStore} from 'react'
export type W={sa:string;tr:string;en:string;ex?:string}
export type S={xp:number;done:Record<string,number>;saved:W[];mast:string[];learned:string[];streak:number;best:number;last:string;days:string[];ans:[number,number];seen:string[];log:string[]}
const K='sanskrit-setu-v1'
const init:S={xp:0,done:{},saved:[],mast:[],learned:[],streak:0,best:0,last:'',days:[],ans:[0,0],seen:[],log:[]}
let s:S=(()=>{try{return {...init,...JSON.parse(localStorage.getItem(K)||'{}')}}catch{return init}})()
const subs=new Set<()=>void>()
export const set=(f:(x:S)=>S)=>{s=f(s);try{localStorage.setItem(K,JSON.stringify(s))}catch{};subs.forEach(c=>c())}
export const useS=()=>useSyncExternalStore(c=>{subs.add(c);return()=>subs.delete(c)},()=>s)
export const reset=()=>set(()=>init)
const dstr=(ms=0)=>new Date(Date.now()-ms).toLocaleDateString('en-CA')
export const xpFor=(c:number,t:number)=>c*10+(c===t?10:0)
export function complete(id:string,c:number,t:number,words:string[]){set(x=>{const td=dstr();const streak=x.last===td?x.streak:x.last===dstr(864e5)?x.streak+1:1
return{...x,xp:x.xp+xpFor(c,t),streak,best:Math.max(x.best,streak),last:td,days:[...new Set([...x.days,td])],done:{...x.done,[id]:Math.max(Math.round(c/t*100),x.done[id]??0)},learned:[...new Set([...x.learned,...words])],ans:[x.ans[0]+c,x.ans[1]+t],log:[...x.log,`${td} · Completed lesson “${id}” (${Math.round(c/t*100)}%)`].slice(-8)}})}
export const save=(w:W)=>set(x=>x.saved.some(y=>y.sa===w.sa)?x:{...x,saved:[...x.saved,w]})
export const mast=(sa:string)=>set(x=>({...x,mast:x.mast.includes(sa)?x.mast.filter(m=>m!==sa):[...x.mast,sa]}))
export const seen=(id:string)=>set(x=>x.seen.includes(id)?x:{...x,seen:[...x.seen,id],log:[...x.log,`${dstr()} · Explored passage “${id}”`].slice(-8)})
export const level=(xp:number)=>Math.floor(xp/100)+1
