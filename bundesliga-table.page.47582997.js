import{s as l,r as g,e as p,n as f,t as h}from"./chunks/point-formatter.e755dd0c.js";import{$ as c}from"./chunks/lit-html.154a0938.js";import"./chunks/player-points.a91c4020.js";import{B as v}from"./chunks/base-path.e932ef86.js";import"./chunks/directive.7cba340f.js";const k="/kickbase-information/assets/2.a58a4fe1.png",u="/kickbase-information/assets/3.1aaf4c2d.png",_="/kickbase-information/assets/4.390aa2e6.png",D="/kickbase-information/assets/5.3c60513d.png",I="/kickbase-information/assets/7.3228187f.png",N="/kickbase-information/assets/8.62dbde79.png",y="/kickbase-information/assets/9.dec4e08a.png",$="/kickbase-information/assets/10.8350e8cf.png",P="/kickbase-information/assets/11.966c1542.png",T="/kickbase-information/assets/13.d1f5ae18.png",O="/kickbase-information/assets/14.5d4a8ad3.png",w="/kickbase-information/assets/15.1de1fa14.png",x="/kickbase-information/assets/18.bb2586fc.png",j="/kickbase-information/assets/19.6cf8fd57.png",B="/kickbase-information/assets/20.9ea4b95b.png",S="/kickbase-information/assets/22.94f6b1e5.png",A="/kickbase-information/assets/24.3e3d819b.png",H="/kickbase-information/assets/28.43738ef7.png",J="/kickbase-information/assets/39.37ab8826.png",L="/kickbase-information/assets/40.3353a31d.png",M="/kickbase-information/assets/42.16a241d0.png",U="/kickbase-information/assets/43.9f19ca2e.png",C="/kickbase-information/assets/50.30de6bef.png",F="/kickbase-information/assets/51.61fcb4ab.png",z={team_2:k,team_3:u,team_4:_,team_5:D,team_7:I,team_8:N,team_9:y,team_11:P,team_10:$,team_13:T,team_14:O,team_15:w,team_18:x,team_19:j,team_20:B,team_22:S,team_24:A,team_28:H,team_39:J,team_40:L,team_42:M,team_43:U,team_50:C,team_51:F};var G=Object.defineProperty,W=Object.getOwnPropertyDescriptor,b=(i,t,a,s)=>{for(var e=s>1?void 0:s?W(t,a):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(e=(s?o(t,a,e):o(e))||e);return s&&e&&G(t,a,e),e};let r=class extends l{static styles=g`
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
  `;data;render(){return c`
      <a class="root" href=${`${v}/bundesliga/team/${this.data.teamName}`}>
        <div class="place">
          ${String(this.data.place).length===1?c`<span class="invisible">1</span>`:""}${this.data.place}
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
    `}};b([p({type:Object})],r.prototype,"data",2);r=b([f("bkb-bundesliga-table-list-item")],r);class E{async getData(){return this.mockData()}mockData(){return{matchDay:1,currentMatchDay:1,teams:[{goadDifference:0,matches:0,points:0,place:4,teamId:"43",teamName:"Leipzig",trend:0},{goadDifference:0,matches:0,points:0,place:17,teamId:"10",teamName:"Bremen",trend:0},{goadDifference:0,matches:0,points:0,place:14,teamId:"13",teamName:"Augsburg",trend:0},{goadDifference:0,matches:0,points:0,place:18,teamId:"39",teamName:"St. Pauli",trend:0},{goadDifference:0,matches:0,points:0,place:8,teamId:"18",teamName:"Mainz 05",trend:0},{goadDifference:0,matches:0,points:0,place:11,teamId:"4",teamName:"Frankfurt",trend:0},{goadDifference:0,matches:0,points:0,place:15,teamId:"9",teamName:"Stuttgart",trend:0},{goadDifference:0,matches:0,points:0,place:7,teamId:"51",teamName:"Kiel",trend:0},{goadDifference:0,matches:0,points:0,place:10,teamId:"15",teamName:"M-Gladbach",trend:0},{goadDifference:0,matches:0,points:0,place:9,teamId:"14",teamName:"Hoffenheim",trend:0},{goadDifference:0,matches:0,points:0,place:5,teamId:"40",teamName:"Union",trend:0},{goadDifference:0,matches:0,points:0,place:13,teamId:"24",teamName:"Bochum",trend:0},{goadDifference:0,matches:0,points:0,place:3,teamId:"7",teamName:"Bayer 04",trend:0},{goadDifference:0,matches:0,points:0,place:6,teamId:"5",teamName:"Freiburg",trend:0},{goadDifference:0,matches:0,points:0,place:12,teamId:"11",teamName:"Wolfsburg",trend:0},{goadDifference:0,matches:0,points:0,place:1,teamId:"2",teamName:"Bayern",trend:0},{goadDifference:0,matches:0,points:0,place:2,teamId:"3",teamName:"Dortmund",trend:0},{goadDifference:0,matches:0,points:0,place:16,teamId:"50",teamName:"Heidenheim",trend:0}]}}}const K=new E;var q=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,d=(i,t,a,s)=>{for(var e=s>1?void 0:s?Q(t,a):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(e=(s?o(t,a,e):o(e))||e);return s&&e&&q(t,a,e),e};let m=class extends l{serverJsonData;bundesligaTable;async willUpdate(i){const t=!this.bundesligaTable;if(t){const a=JSON.parse(this.serverJsonData);a.teams.sort((s,e)=>s.place-e.place),this.bundesligaTable=a}if(t){const a=await K.getData();a.teams.sort((s,e)=>s.place-e.place),this.bundesligaTable=a}}render(){return c`
      <div class="root">
        ${this.bundesligaTable?.teams.map(i=>c`
            <bkb-bundesliga-table-list-item .data=${i}></bkb-bundesliga-table-list-item>
          `)}
      </div>
    `}};d([p({type:String,attribute:"server-json-data"})],m.prototype,"serverJsonData",2);d([h()],m.prototype,"bundesligaTable",2);m=d([f("bkb-bundesliga-table")],m);export{m as BundesligaTablePage};
