import{s as b,r as f,e as l,n as p,t as h}from"./chunks/point-formatter.e755dd0c.js";import{$ as r}from"./chunks/lit-html.154a0938.js";import"./chunks/player-points.edc610dd.js";import{B as v}from"./chunks/base-path.6dae1c4c.js";import"./chunks/directive.7cba340f.js";const k="/better-kickbase-web/assets/2.a58a4fe1.png",u="/better-kickbase-web/assets/3.1aaf4c2d.png",_="/better-kickbase-web/assets/4.390aa2e6.png",w="/better-kickbase-web/assets/5.3c60513d.png",D="/better-kickbase-web/assets/7.3228187f.png",I="/better-kickbase-web/assets/8.62dbde79.png",N="/better-kickbase-web/assets/9.dec4e08a.png",y="/better-kickbase-web/assets/10.8350e8cf.png",$="/better-kickbase-web/assets/11.966c1542.png",P="/better-kickbase-web/assets/13.d1f5ae18.png",T="/better-kickbase-web/assets/14.5d4a8ad3.png",O="/better-kickbase-web/assets/15.1de1fa14.png",x="/better-kickbase-web/assets/18.bb2586fc.png",j="/better-kickbase-web/assets/19.6cf8fd57.png",B="/better-kickbase-web/assets/20.9ea4b95b.png",S="/better-kickbase-web/assets/22.94f6b1e5.png",A="/better-kickbase-web/assets/24.3e3d819b.png",H="/better-kickbase-web/assets/28.43738ef7.png",J="/better-kickbase-web/assets/39.37ab8826.png",L="/better-kickbase-web/assets/40.3353a31d.png",M="/better-kickbase-web/assets/42.16a241d0.png",U="/better-kickbase-web/assets/43.9f19ca2e.png",C="/better-kickbase-web/assets/50.30de6bef.png",F="/better-kickbase-web/assets/51.61fcb4ab.png",z={team_2:k,team_3:u,team_4:_,team_5:w,team_7:D,team_8:I,team_9:N,team_11:$,team_10:y,team_13:P,team_14:T,team_15:O,team_18:x,team_19:j,team_20:B,team_22:S,team_24:A,team_28:H,team_39:J,team_40:L,team_42:M,team_43:U,team_50:C,team_51:F};var G=Object.defineProperty,W=Object.getOwnPropertyDescriptor,g=(i,a,t,s)=>{for(var e=s>1?void 0:s?W(a,t):a,n=i.length-1,c;n>=0;n--)(c=i[n])&&(e=(s?c(a,t,e):c(e))||e);return s&&e&&G(a,t,e),e};let d=class extends b{static styles=f`
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
      <a class="root" href=${`${v}/bundesliga/team/${this.data.teamName}`}>
        <div class="place">
          ${String(this.data.place).length===1?r`<span class="invisible">1</span>`:""}${this.data.place}
        </div>
        <div class="team-logo">
          <img src="${z[`team_${this.data.teamId}`]}" />
        </div>
        <div class="team-name">${this.data.teamName}</div>
        <div class="matches-played">
          <div class="matches-played value">${this.data.matches}</div>
          <div class="matches-played label">gesp.</div>
        </div>
        <div class="goal-difference">
          <div class="goal-difference value">${this.data.goadDifference}</div>
          <div class="goal-difference label">GD</div>
        </div>
        <div class="points">
          <div class="points value">${this.data.points}</div>
          <div class="points label">Pts.</div>
        </div>
      </a>
    `}};g([l({type:Object})],d.prototype,"data",2);d=g([p("bkb-bundesliga-table-list-item")],d);class E{async getData(){return this.mockData()}mockData(){return{matchDay:1,currentMatchDay:1,teams:[{goadDifference:0,matches:0,points:0,place:4,teamId:"43",teamName:"Leipzig",trend:0},{goadDifference:0,matches:0,points:0,place:17,teamId:"10",teamName:"Bremen",trend:0},{goadDifference:0,matches:0,points:0,place:14,teamId:"13",teamName:"Augsburg",trend:0},{goadDifference:0,matches:0,points:0,place:18,teamId:"39",teamName:"St. Pauli",trend:0},{goadDifference:0,matches:0,points:0,place:8,teamId:"18",teamName:"Mainz 05",trend:0},{goadDifference:0,matches:0,points:0,place:11,teamId:"4",teamName:"Frankfurt",trend:0},{goadDifference:0,matches:0,points:0,place:15,teamId:"9",teamName:"Stuttgart",trend:0},{goadDifference:0,matches:0,points:0,place:7,teamId:"51",teamName:"Kiel",trend:0},{goadDifference:0,matches:0,points:0,place:10,teamId:"15",teamName:"M-Gladbach",trend:0},{goadDifference:0,matches:0,points:0,place:9,teamId:"14",teamName:"Hoffenheim",trend:0},{goadDifference:0,matches:0,points:0,place:5,teamId:"40",teamName:"Union",trend:0},{goadDifference:0,matches:0,points:0,place:13,teamId:"24",teamName:"Bochum",trend:0},{goadDifference:0,matches:0,points:0,place:3,teamId:"7",teamName:"Bayer 04",trend:0},{goadDifference:0,matches:0,points:0,place:6,teamId:"5",teamName:"Freiburg",trend:0},{goadDifference:0,matches:0,points:0,place:12,teamId:"11",teamName:"Wolfsburg",trend:0},{goadDifference:0,matches:0,points:0,place:1,teamId:"2",teamName:"Bayern",trend:0},{goadDifference:0,matches:0,points:0,place:2,teamId:"3",teamName:"Dortmund",trend:0},{goadDifference:0,matches:0,points:0,place:16,teamId:"50",teamName:"Heidenheim",trend:0}]}}}const K=new E;var q=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,m=(i,a,t,s)=>{for(var e=s>1?void 0:s?Q(a,t):a,n=i.length-1,c;n>=0;n--)(c=i[n])&&(e=(s?c(a,t,e):c(e))||e);return s&&e&&q(a,t,e),e};let o=class extends b{serverJsonData;bundesligaTable;async willUpdate(i){const a=!this.bundesligaTable;if(a){const t=JSON.parse(this.serverJsonData);t.teams.sort((s,e)=>s.place-e.place),this.bundesligaTable=t}if(a){const t=await K.getData();t.teams.sort((s,e)=>s.place-e.place),this.bundesligaTable=t}}render(){return r`
      <div class="root">
        ${this.bundesligaTable?.teams.map(i=>r`
            <bkb-bundesliga-table-list-item .data=${i}></bkb-bundesliga-table-list-item>
          `)}
      </div>
    `}};m([l({type:String,attribute:"server-json-data"})],o.prototype,"serverJsonData",2);m([h()],o.prototype,"bundesligaTable",2);o=m([p("bkb-bundesliga-table")],o);export{o as BundesligaTablePage};
