import{s as p,r as v,e as b,n as f,t as k}from"./chunks/point-formatter.e755dd0c.js";import{$ as r}from"./chunks/lit-html.154a0938.js";import"./chunks/player-points.03407b83.js";import{B as _,a as m}from"./chunks/base-path.de1b58ba.js";import"./chunks/directive.7cba340f.js";const h="/kickbase-information/assets/2.a58a4fe1.png",u="/kickbase-information/assets/3.1aaf4c2d.png",$="/kickbase-information/assets/4.390aa2e6.png",T="/kickbase-information/assets/5.3c60513d.png",w="/kickbase-information/assets/7.3228187f.png",D="/kickbase-information/assets/8.62dbde79.png",O="/kickbase-information/assets/9.dec4e08a.png",y="/kickbase-information/assets/10.8350e8cf.png",P="/kickbase-information/assets/11.966c1542.png",A="/kickbase-information/assets/13.d1f5ae18.png",B="/kickbase-information/assets/14.5d4a8ad3.png",x="/kickbase-information/assets/15.1de1fa14.png",S="/kickbase-information/assets/18.bb2586fc.png",j="/kickbase-information/assets/19.6cf8fd57.png",L="/kickbase-information/assets/20.9ea4b95b.png",I="/kickbase-information/assets/22.94f6b1e5.png",U="/kickbase-information/assets/24.3e3d819b.png",N="/kickbase-information/assets/28.43738ef7.png",E="/kickbase-information/assets/39.37ab8826.png",R="/kickbase-information/assets/40.3353a31d.png",F="/kickbase-information/assets/42.16a241d0.png",C="/kickbase-information/assets/43.9f19ca2e.png",J="/kickbase-information/assets/50.30de6bef.png",G="/kickbase-information/assets/51.61fcb4ab.png",H={team_2:h,team_3:u,team_4:$,team_5:T,team_7:w,team_8:D,team_9:O,team_10:y,team_11:P,team_13:A,team_14:B,team_15:x,team_18:S,team_19:j,team_20:L,team_22:I,team_24:U,team_28:N,team_39:E,team_40:R,team_42:F,team_43:C,team_50:J,team_51:G};var M=Object.defineProperty,W=Object.getOwnPropertyDescriptor,g=(s,e,t,i)=>{for(var a=i>1?void 0:i?W(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&M(e,t,a),a};let l=class extends p{static styles=v`
    .root {
      display: flex;
      background-color: white;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      height: 64px;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      cursor: pointer;
      color: black;
    }

    .root:link,
    .root:visited,
    .root:hover,
    .root:active {
      text-decoration: none;
    }

    .team-name {
      flex-grow: 1;
    }

    .team-logo {
      display: flex;
      justify-content: center;
      max-height: 70%;
      width: 128px;
    }

    .team-logo > img {
      object-fit: contain;
    }

    .root > *:not(:first-child) {
      padding-left: 1rem;
    }

    .invisible {
      visibility: hidden;
    }
    .label {
      color: #9ca4a8;
    }
  `;data;render(){return r`
      <a class="root" href=${`${_}/bundesliga/team/${this.data.teamName}`}>
        <div class="place">
          ${String(this.data.place).length===1?r`<span class="invisible">1</span>`:""}${this.data.place}
        </div>
        <div class="team-logo">
          <img src="${H[`team_${this.data.teamId}`]}" />
        </div>
        <div class="team-name">${this.data.teamName}</div>
        <div class="matches-played">
          <div class="matches-played value">${this.data.matches}</div>
          <div class="matches-played label">gesp.</div>
        </div>
        <div class="goal-difference">
          <div class="goal-difference value">${this.data.goadDifference}</div>
          <div class="goal-difference label">TD</div>
        </div>
        <div class="points">
          <div class="points value">${this.data.points}</div>
          <div class="points label">Pkt.</div>
        </div>
      </a>
    `}};g([b({type:Object})],l.prototype,"data",2);l=g([f("bkb-bundesliga-table-list-item")],l);function q(s){return{goadDifference:s.g,matches:s.m,points:s.p,place:s.pl,teamId:s.tid,teamName:s.tn,trend:s.t}}class z{BASE_URL=m.BASE_URL;defaultOpts=m.DEFAULT_OPTS;async getData(){try{const e=await fetch(this.BASE_URL,this.defaultOpts);if(!e.ok)throw new Error(`Failed to fetch data: ${e.status} ${e.statusText}`);const t=await e.json();return this.transformApiResponse(t)}catch(e){throw console.error("Error fetching Bundesliga table data:",e),new Error(`Error fetching Bundesliga table data: ${e.message}`)}}transformApiResponse(e){const t=e.t.map(q);return{matchDay:e.md,currentMatchDay:e.cmd,teams:t}}}const K=new z;var Q=Object.defineProperty,V=Object.getOwnPropertyDescriptor,d=(s,e,t,i)=>{for(var a=i>1?void 0:i?V(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&Q(e,t,a),a};let c=class extends p{serverJsonData;bundesligaTable;async willUpdate(s){const e=!this.bundesligaTable;if(e){const t=JSON.parse(this.serverJsonData);t.teams.sort((i,a)=>i.place-a.place),this.bundesligaTable=t}if(e){const t=await K.getData();t.teams.sort((i,a)=>i.place-a.place),this.bundesligaTable=t}}render(){return r`
      <div class="root">
        ${this.bundesligaTable?.teams.map(s=>r`
            <bkb-bundesliga-table-list-item .data=${s}></bkb-bundesliga-table-list-item>
          `)}
      </div>
    `}};d([b({type:String,attribute:"server-json-data"})],c.prototype,"serverJsonData",2);d([k()],c.prototype,"bundesligaTable",2);c=d([f("bkb-bundesliga-table")],c);export{c as BundesligaTablePage};
