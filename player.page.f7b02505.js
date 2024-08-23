import{r as u,s as v,t as c,e as p,n as g}from"./chunks/point-formatter.e755dd0c.js";import{b as h,$ as m}from"./chunks/lit-html.154a0938.js";import{i as y}from"./chunks/player-points.a91c4020.js";import{e as f,i as b,t as w}from"./chunks/directive.7cba340f.js";import{n as k,p as S,P as I}from"./chunks/player-status.41319264.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=f(class extends b{constructor(r){var e;if(super(r),r.type!==w.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var s,t;if(this.nt===void 0){this.nt=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!(!((s=this.st)===null||s===void 0)&&s.has(a))&&this.nt.add(a);return this.render(e)}const o=r.element.classList;this.nt.forEach(a=>{a in e||(o.remove(a),this.nt.delete(a))});for(const a in e){const n=!!e[a];n===this.nt.has(a)||((t=this.st)===null||t===void 0?void 0:t.has(a))||(n?(o.add(a),this.nt.add(a)):(o.remove(a),this.nt.delete(a)))}return h}});class P{async getData(e,s="2335868"){const t=`https://api.better-kickbase.workers.dev/leagues/${s}/players/${e}/`;return await(await fetch(t)).json()}}const D=new P;function $(r){return{match:r.d,points:r.p,goals:r.g,assists:r.a,home:r.h,playtimeSeconds:r.sp,startingEleven:r.ms,homeTeamId:r.t1i,awayTeamId:r.t2i,homeTeamGoals:r.t1s,awayTeamGoals:r.t2s}}function T(r){return{points:r.p,appearances:r.mp,startingEleven:r.ms,matches:r.m.map($),year:r.t}}class N{async getData(e){const s=`https://api.better-kickbase.workers.dev/players/${e}/points`,t=await fetch(s);return t.ok?{seasons:(await t.json()).s.map(T)}:(console.log(`request was not successful: 
      ${t.statusText}: ${t.status}
      `),{seasons:[]})}}const F=new N;function x(r){return{...r}}function U(r){return{day:new Date(r.d),homeTeamId:r.t1i,homeTeamName:r.t1n,homeTeamNameShort:r.t1y,awayTeamId:r.t2i,awayTeamName:r.t2n,awayTeamNameShort:r.t2y,match:r.md,points:0,playtimeSeconds:0,homeTeamGoals:-1,awayTeamGoals:-1}}class j{async getData(e,s="2335868"){const t=`https://api.better-kickbase.workers.dev/leagues/${s}/players/${e}/stats`,a=await(await fetch(t)).json();return{averagePoints:a.averagePoints,f:a.f,firstName:a.firstName,id:a.id,lastName:a.lastName,marketValue:a.marketValue,mvHigh:a.mvHigh,mvHighDate:new Date(a.mvHighDate),mvLow:a.mvLow,mvLowDate:new Date(a.mvLowDate),mvTrend:a.mvTrend,upcomingMatches:a.nm.map(U),number:a.number,points:a.points,position:a.position,profileUrl:a.profileUrl,seasons:a.seasons.map(x),status:a.status,teamCoverUrl:a.teamCoverUrl,teamId:a.teamId,teamUrl:a.teamUrl,userFlags:a.userFlags}}}const _=new j;class A{async getData(e){return{playerInfo:await D.getData(e),playerPoints:await F.getData(e),playerStats:await _.getData(e)}}}const H=new A,O=u`
  :root,
  * {
    --team-primary-color-15: #28a144;
    --team-primary-color-11: #51a600;
    --team-primary-color-7: #fe0000;
    --team-primary-color-40: #d3011c;
    --team-primary-color-43: #001f46;
    --team-primary-color-3: #fde101;
    --team-primary-color-20: #001f46;
    --team-primary-color-24: #0a5ca5;
    --team-primary-color-13: #ce1719;
    --team-primary-color-14: #1c62b7;
    --team-primary-color-5: #d11b1a;
    --team-primary-color-2: #dc052e;
    --team-primary-color-22: #0090d7;
    --team-primary-color-19: #019a32;
    --team-primary-color-28: #e20612;
    --team-primary-color-9: #e32219;
    --team-primary-color-18: #e30713;
    --team-primary-color-4: #e10010;
    --team-primary-color-50: #e10016;
    --team-primary-color-42: #014d9e;
  }
  .team-primary-color-4 {
    background-color: var(--team-primary-color-4);
  }
  .team-primary-color-15 {
    background-color: var(--team-primary-color-15);
  }
  .team-primary-color-11 {
    background-color: var(--team-primary-color-11);
  }
  .team-primary-color-7 {
    background-color: var(--team-primary-color-7);
  }
  .team-primary-color-40 {
    background-color: var(--team-primary-color-40);
  }
  .team-primary-color-43 {
    background-color: var(--team-primary-color-43);
  }
  .team-primary-color-3 {
    background-color: var(--team-primary-color-3);
  }
  .team-primary-color-20 {
    background-color: var(--team-primary-color-20);
  }
  .team-primary-color-24 {
    background-color: var(--team-primary-color-24);
  }
  .team-primary-color-13 {
    background-color: var(--team-primary-color-13);
  }
  .team-primary-color-14 {
    background-color: var(--team-primary-color-14);
  }
  .team-primary-color-5 {
    background-color: var(--team-primary-color-5);
  }
  .team-primary-color-2 {
    background-color: var(--team-primary-color-2);
  }
  .team-primary-color-22 {
    background-color: var(--team-primary-color-22);
  }
  .team-primary-color-19 {
    background-color: var(--team-primary-color-19);
  }
  .team-primary-color-28 {
    background-color: var(--team-primary-color-28);
  }
  .team-primary-color-9 {
    background-color: var(--team-primary-color-9);
  }
  .team-primary-color-18 {
    background-color: var(--team-primary-color-18);
  }
  .team-primary-color-50 {
    background-color: var(--team-primary-color-50);
  }
  .team-primary-color-42 {
    background-color: var(--team-primary-color-42);
  }
`;var E=Object.defineProperty,L=Object.getOwnPropertyDescriptor,l=(r,e,s,t)=>{for(var o=t>1?void 0:t?L(e,s):e,a=r.length-1,n;a>=0;a--)(n=r[a])&&(o=(t?n(e,s,o):n(o))||o);return t&&o&&E(e,s,o),o};let i=class extends v{playerName;playerId;serverJsonData;teamId;playerInfo;playerPoints;playerStats;static styles=[O,u`
      .upper-half {
        width: 100%;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas: 'main';
      }

      img.player-image {
        grid-area: main;
        width: 100%;
        z-index: 0;
      }

      .player-color-fade {
        grid-area: main;
        width: 100%;
        height: 60%;
        align-self: end;
        z-index: 1;
      }

      .player-summary {
        grid-area: main;
        z-index: 2;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      }

      h1.player-name {
        margin: 0;
        color: white;
      }
      h1.player-name.inverted {
        color: black;
      }
      .bottom-container {
        align-self: stretch;
        padding: 0.5rem 1rem 0.5rem 1rem;
        color: white;
      }
      .bottom-container.inverted {
        color: black;
      }
      .price-container {
        display: flex;
      }
      .price-value {
        margin: 0;
      }
    `];async willUpdate(r){const e=!this.playerPoints;if(e){const{playerInfo:s,playerPoints:t,playerStats:o}=JSON.parse(this.serverJsonData);this.playerInfo=s,this.playerPoints=t,this.playerStats=o}if(e){const{playerInfo:s,playerPoints:t,playerStats:o}=await H.getData(this.playerId);this.playerInfo=s,this.playerPoints=t,this.playerStats=o}}get upperHalfStyles(){return{"background-color":`var(--team-primary-color-${this.teamId}, gray)`}}get colorFadeStyles(){return{background:`linear-gradient(to bottom, transparent, var(--team-primary-color-${this.teamId}, gray));`}}render(){return m`
      <div class="upper-half" style=${y(this.upperHalfStyles)}>
        <img
          class="player-image"
          src=${this.playerInfo?.profileBig??k}
          alt="Profilbild von ${this.playerName}"
        />
        <div class="player-color-fade" style=${y(this.colorFadeStyles)}></div>
        <div class="player-summary">
          <div
            class=${d({"bottom-container":!0,inverted:this.playerInfo.teamName==="Dortmund"})}
          >
            <div class="price-container">
              <h3 class="price-value">
                ${S.format(this.playerInfo.marketValue??0)}&nbsp${this.priceTrendTemplate(this.playerInfo.marketValueTrend)}
              </h3>
            </div>
          </div>
          <h1
            class=${d({"player-name":!0,inverted:this.playerInfo.teamName==="Dortmund"})}
          >
            ${this.playerName}
          </h1>

          <bkb-player-badges
            .number=${this.playerInfo.number}
            .position=${this.playerInfo.position}
            .status=${I[this.playerInfo.status]}
            ?inverted=${this.playerInfo.teamName==="Dortmund"}
          ></bkb-player-badges>
        </div>
      </div>
      <bkb-player-points
        .points=${this.playerPoints}
        .upcomingMatches=${this.playerStats.upcomingMatches}
      ></bkb-player-points>
    `}priceTrendTemplate(r){switch(r){case 1:return m`&#8657;`;case 2:return m`&#8659;`;default:case 0:return m`&#8660;`}}};l([p({type:String,attribute:"player-name"})],i.prototype,"playerName",2);l([p({type:String,attribute:"player-id"})],i.prototype,"playerId",2);l([p({type:String,attribute:"server-json-data"})],i.prototype,"serverJsonData",2);l([p({type:String,attribute:"team-id"})],i.prototype,"teamId",2);l([c()],i.prototype,"playerInfo",2);l([c()],i.prototype,"playerPoints",2);l([c()],i.prototype,"playerStats",2);i=l([g("bkb-player")],i);export{i as PlayerPage};
