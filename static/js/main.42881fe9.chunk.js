(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){},34:function(e,a,t){},43:function(e,a,t){e.exports=t(93)},48:function(e,a,t){},49:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),s=t.n(r),o=(t(48),t(1)),i=t(13);t(49),t(32);var c=function(){return l.a.createElement("div",{className:"hero-head"},l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"navbarMenu",className:"navbar-menu"},l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"tabs is-right"},l.a.createElement("ul",null,l.a.createElement("li",{className:"is-active"},l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",{className:"is-active"},l.a.createElement(o.b,{to:"/Signup"},"Sign Up")),l.a.createElement("li",{className:"is-active"},l.a.createElement(o.b,{to:"/Login"},"Log In")))))))))};var m=function(){return l.a.createElement("section",{className:"hero is-fullheight is-bold"},l.a.createElement(c,null),l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns is-gapless"},l.a.createElement("div",{className:"column"}),l.a.createElement("div",{className:"column is-6"},l.a.createElement("h1",{className:"title"},l.a.createElement("img",{src:"http://xfittrainingeastbay.com/wp-content/uploads/Expiration-Date-1.png",alt:"expiration-date"}))),l.a.createElement("div",{className:"column"},l.a.createElement("h1",{className:"subtitle"},l.a.createElement("br",null),l.a.createElement("br",null),"Find out how much time you have left!"),l.a.createElement("br",null),l.a.createElement("div",{className:"has-text-centered"},l.a.createElement(o.b,{to:"/Signup"},l.a.createElement("div",{className:"signup button"},"Sign Up")))),l.a.createElement("div",{className:"column"})))))},d=t(23),u=t(5),h=t(6),E=t(8),p=t(7),v=t(9),f=(t(34),t(17)),g=t.n(f),b={getUsers:function(){return g.a.get("/api/user")},getSavedUsers:function(e){return g.a.get("/api/user/name")},deleteUser:function(e){return g.a.delete("/api/user/"+e)},saveUser:function(e){return g.a.post("/api/user",e)},updateUser:function(e,a){return console.log("userData",a),console.log("name",e),g.a.put("/api/user/"+e,a)}};var N=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(E.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={name:"",email:"",gender:"",age:"",smoke:"",drink:"",exercise:"",diet:"",expiration:""},t.handleInputChange=function(e){var a=e.target.value;console.log("handleinput"),t.setState(Object(d.a)({},e.target.id,a))},t.handleFormSubmit=function(e){e.preventDefault();var a=document.getElementById("name").value,n=document.getElementById("email").value,l=document.getElementById("gender").value,r=document.getElementById("age").value,s=document.getElementById("smoke").value,o=document.getElementById("drink").value,i=document.getElementById("exercise").value,c=document.getElementById("diet").value;if(""===a)alert("Fill out your name!");else if(""===n)alert("Fill out your email!");else if(!1===function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}(n))alert("Provide valid email!");else if("Select from"===l)alert("Fill out your gender!");else if(""===r)alert("Fill out your age!");else if(r<0||r>120)alert("Please enter valid age");else if("Select from"===s)alert("Fill out if you smoke!");else if("Select from"===o)alert("Fill out if you drink!");else if("Select from"===i)alert("Fill out your exercise habits!");else if("Select from"===c)alert("Fill out your eating habits!");else{var m=0;if("Male"===l?m=76:"Female"===l&&(m=81),"Yes"===s&&(m-=10),"Yes"===o&&(m-=2),"Yes"===c)m-=.14*m;"Yes"===i&&(m+=3),m-=r,m=Math.round(m,1),console.log(m),t.setState({name:a,email:n,gender:l,age:r,smoke:s,drink:o,exercise:i,diet:c,expiration:m});var d={name:a,email:n,gender:l,age:r,smoke:s,drink:o,exercise:i,diet:c,expiration:m};console.log(d),b.saveUser(d).then(function(e){console.log(e.data),t.props.history.push("/Results")})}},t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"hero is-fullheight is-default is-bold"},l.a.createElement(c,null),l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("div",{className:"box has-text-centered"},l.a.createElement("h1",null,l.a.createElement("strong",null,"We need to know more about you and the habits that affect your longevity:")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"What is your name?")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field is-narrow"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",onChange:this.handleInputChange,type:"String",placeholder:"Name",id:"name"}))))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"What is your email?")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field is-narrow"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",onChange:this.handleInputChange,type:"String",placeholder:"Email",id:"email"}))))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Are you male or female?")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field is-narrow"},l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"select is-fullwidth"},l.a.createElement("select",{name:"gender",onChange:this.handleInputChange,id:"gender"},"return (",l.a.createElement("option",{value:"Select from",label:"Select from"},"Select from"),l.a.createElement("option",{value:"Male",label:"Male"},"Male"),l.a.createElement("option",{value:"Female",label:"Female"},"Female"),")")))))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"How old are you?")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field is-narrow"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",onChange:this.handleInputChange,type:"number",placeholder:"Age",id:"age"}))))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Do you smoke?")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field is-narrow"},l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"select is-fullwidth"},l.a.createElement("select",{name:"smoke",onChange:this.handleInputChange,id:"smoke"},"return (",l.a.createElement("option",{value:"Select from",label:"Select from"},"Select from"),l.a.createElement("option",{value:"Yes",label:"Yes"},"Yes"),l.a.createElement("option",{value:"No",label:"No"},"No"),")")))))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Do you consume more than 5 alcoholic drinks per week?")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field is-narrow"},l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"select is-fullwidth"},l.a.createElement("select",{name:"drink",onChange:this.handleInputChange,id:"drink"},"return (",l.a.createElement("option",{value:"Select from",label:"Select from"},"Select from"),l.a.createElement("option",{value:"Yes",label:"Yes"},"Yes"),l.a.createElement("option",{value:"No",label:"No"},"No"),")")))))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Do you get at least 25 minutes of moderate exercise per day?")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field is-narrow"},l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"select is-fullwidth"},l.a.createElement("select",{name:"exercise",onChange:this.handleInputChange,id:"exercise"},"return (",l.a.createElement("option",{value:"Select from",label:"Select from"},"Select from"),l.a.createElement("option",{value:"Yes",label:"Yes"},"Yes"),l.a.createElement("option",{value:"No",label:"No"},"No"),")")))))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Do you eat more that one processed meal and one processed snack per day?")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field is-narrow"},l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"select is-fullwidth"},l.a.createElement("select",{name:"diet",onChange:this.handleInputChange,id:"diet"},"return (",l.a.createElement("option",{value:"Select from",label:"Select from"},"Select from"),l.a.createElement("option",{value:"Yes",label:"Yes"},"Yes"),l.a.createElement("option",{value:"No",label:"No"},"No"),")")))))),l.a.createElement("br",null),l.a.createElement("div",{className:"field is-grouped is-grouped-centered"},l.a.createElement("div",{className:"control",id:"submit"},l.a.createElement("button",{onClick:this.handleFormSubmit,className:"button is-link",type:"submit"},"Submit")),l.a.createElement("div",{className:"control"},l.a.createElement(o.b,{to:"/"},l.a.createElement("div",{className:"button is-link"},"Cancel"))))))))}}]),a}(n.Component);t(73);var y=function(){return l.a.createElement("section",{className:"hero is-fullheight is-bold"},l.a.createElement(c,null),l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("div",{className:"column is-4 is-offset-4"},l.a.createElement("h3",{className:"title has-text-white"},"Please login to proceed"),l.a.createElement("div",{className:"box"},l.a.createElement("form",null,l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-large",type:"username",placeholder:"Username",autoFocus:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-large",type:"password",placeholder:"Password"}))),l.a.createElement(o.b,{to:"/Survey"},l.a.createElement("button",{className:"button is-block is-info is-large is-fullwidth"},"Login"))))))))};t(74);var w=function(){return l.a.createElement("section",{className:"hero is-fullheight is-default is-bold"},l.a.createElement("div",{className:"hero-head"},l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-brand"}),l.a.createElement("div",{id:"navbarMenu",className:"navbar-menu"},l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"tabs is-right"},l.a.createElement("ul",null,l.a.createElement("li",{className:"is-active"},l.a.createElement(o.b,{to:"/Launch"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/Survey"},"Survey")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/Login"},"Log In"))))))))),l.a.createElement("div",{className:"themeImage"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("div",{className:"columns is-vcentered"},l.a.createElement("div",{className:"column is-5"}),l.a.createElement("div",{className:"column is-6 is-offset-1"},l.a.createElement("h1",{className:"title is-2"},"Dying to Find Love"),l.a.createElement("h2",{className:"subtitle is-4"},"How many years do you have left on this world and do you really want to spend them alone?"),l.a.createElement("br",null),l.a.createElement("div",{className:"has-text-centered"},l.a.createElement("div",{className:"button is-medium is-info is-outlined"},l.a.createElement(o.b,{to:"/Survey"},"Learn more")))))))),l.a.createElement("div",{className:"hero-foot"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"tabs is-centered"},l.a.createElement("ul",null,l.a.createElement("li",null))))))},k=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(E.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={expiration:0},t.loadUser=function(){b.getUsers().then(function(e){t.setState({expiration:e.data[0].expiration})}).catch(function(e){return console.log(e)})},t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"render",value:function(){return l.a.createElement("section",{className:"hero is-fullheight is-default is-bold"},l.a.createElement(c,null),l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-half"},l.a.createElement("div",{className:"box has-text-centered",style:{fontSize:50}},l.a.createElement("strong",null,"Years Left!"),l.a.createElement("br",null),l.a.createElement("strong",{style:{color:"red"}},this.state.expiration),l.a.createElement("br",null))),l.a.createElement("div",{className:"column is-half"},l.a.createElement("div",{className:"box has-text-centered"},l.a.createElement("h1",null,l.a.createElement("strong",null,"Want to increase your longevity?")),l.a.createElement("br",null),l.a.createElement(o.b,{to:"Recipes",target:"_blank"},l.a.createElement("div",{className:"recipes button is-success"},"Start Cooking At Home")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/Map",target:"_blank"},l.a.createElement("div",{className:"gyms button is-warning"},"Find nearby gyms"))))),l.a.createElement("div",{className:"box is-fullwidth has-text-centered"},l.a.createElement("h1",null,l.a.createElement("strong",null,"Now that you have your expiration, find your date!")),l.a.createElement(o.b,{to:"/Match",target:"_blank"},l.a.createElement("div",{className:"date button is-danger"},"Don't die alone")),l.a.createElement("br",null),l.a.createElement("h1",null,l.a.createElement("strong",null,"Already found your other half?")),l.a.createElement(o.b,{to:"/Survey"},l.a.createElement("div",{className:"partner button is-danger"},"Check your partner"))))),l.a.createElement("p",{style:{color:"white",padding:"30px"}},"All content found on the expirationdate.com Website, including: text, images, or other formats were created for informational purposes only. The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Website."))}}]),a}(n.Component);var x=function(){return l.a.createElement("section",{className:"hero is-fullheight is-bold"},l.a.createElement(c,null),l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("div",{className:"column is-4 is-offset-4"},l.a.createElement("h3",{className:"title has-text-white"},"Please Sign Up"),l.a.createElement("div",{className:"box"},l.a.createElement("form",null,l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-large",type:"username",placeholder:"Username",autoFocus:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-large",type:"password",placeholder:"Password"}))),l.a.createElement(o.b,{to:"/Login"},l.a.createElement("button",{className:"button is-block is-info is-large is-fullwidth"},"Create Profile"))))))))},S=t(24),C=t(18),j={position:"absolute",width:"100%",height:"100%"},M=function(e){function a(e){var t;Object(u.a)(this,a);var n=(t=Object(E.a)(this,Object(p.a)(a).call(this,e))).props.initialCenter,l=n.lat,r=n.lng;return t.state={currentLocation:{lat:l,lng:r}},t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(a){var t=a.coords;e.setState({currentLocation:{lat:t.latitude,lng:t.longitude}})}),this.loadMap()}},{key:"componentDidUpdate",value:function(e,a){e.google!==this.props.google&&this.loadMap(),a.currentLocation!==this.state.currentLocation&&this.recenterMap()}},{key:"loadMap",value:function(){if(this.props&&this.props.google){var e=this.props.google.maps,a=this.refs.map,t=s.a.findDOMNode(a),n=this.props.zoom,l=this.state.currentLocation,r=l.lat,o=l.lng,i=new e.LatLng(r,o),c=Object.assign({},{center:i,zoom:n});this.map=new e.Map(t,c)}}},{key:"recenterMap",value:function(){var e=this.map,a=this.state.currentLocation,t=this.props.google.maps;if(e){var n=new t.LatLng(a.lat,a.lng);e.panTo(n)}}},{key:"renderChildren",value:function(){var e=this,a=this.props.children;if(a)return l.a.Children.map(a,function(a){if(a)return l.a.cloneElement(a,{map:e.map,google:e.props.google,mapCenter:e.state.currentLocation})})}},{key:"render",value:function(){var e=Object.assign({},j);return l.a.createElement("div",null,l.a.createElement("div",{style:e,ref:"map"},"Loading map..."),this.renderChildren())}}]),a}(l.a.Component),O=M;M.defaultProps={zoom:12,initialCenter:{lat:32.7157,lng:-117.1611},centerAroundCurrentLocation:!1,visible:!0};var I=t(14),L=t.n(I),Y={width:"100%",height:"100%"},z=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(E.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{},selectedGyms:{},gyms:[]},t.onMarkerClick=function(e,a,n){return t.setState({selectedPlace:e,activeMarker:a,showingInfoWindow:!0})},t.onClose=function(e){t.state.showingInfoWindow&&t.setState({showingInfoWindow:!1,activeMarker:null})},t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.a.ajaxPrefilter(function(e){e.crossDomain&&L.a.support.cors&&(e.url="https://cors-anywhere.herokuapp.com/"+e.url)}),L.a.ajax({url:"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.7157,-117.1611&radius=16000&type=gym&keyword=gym&key=AIzaSyBpAnHTdTlRhR2CnLcIfJTFszrI_YcaJ7Q",dataType:"json",method:"GET"}).then(function(a){console.log("GYM RESULTS!!!",a);for(var t=[],n=0;n<a.results.length;n++){var l={};l.geocodes=a.results[n].geometry.location,l.name=a.results[n].name,l.address=a.results[n].vicinity,t.push(l)}console.log("result",t),e.setState(Object(S.a)({},e.state,{gyms:t})),console.log("state",e.state.gyms)})}},{key:"render",value:function(){var e=this;return l.a.createElement(O,{centerAroundCurrentLocation:!0,google:this.props.google},l.a.createElement(C.Map,{google:this.props.google,zoom:12,style:Y,initialCenter:{lat:32.7157,lng:-117.1611}},l.a.createElement(C.Marker,{onClick:this.onMarkerClick,name:"Current Location"}),this.state.gyms.map(function(a){return l.a.createElement(C.Marker,{onClick:e.onMarkerClick,name:a.name+": "+a.address,position:a.geocodes})}),l.a.createElement(C.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},l.a.createElement("div",null,l.a.createElement("h4",null,this.state.selectedPlace.name)))))}}]),a}(n.Component),F=Object(C.GoogleApiWrapper)(function(e){return{apiKey:"AIzaSyBpAnHTdTlRhR2CnLcIfJTFszrI_YcaJ7Q"}})(z),U=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(E.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={match:"",email:""},t.loadUser=function(){b.getUsers().then(function(e){t.setState({expiration:e.data[0].expiration})}).catch(function(e){return console.log(e)})},t.loadMatch=function(){b.getUsers().then(function(e){for(var a=0;a<e.data.length;a++)e.data[a].expiration-t.state.expiration>0&&e.data[a].expiration-t.state.expiration<5?(t.setState({match:e.data[a].name}),t.setState({email:e.data[a].email})):e.data[a].expiration-t.state.expiration<0&&e.data[a].expiration-t.state.expiration>-5?(t.setState({match:e.data[a].name}),t.setState({email:e.data[a].email})):(t.setState({match:"You die alone!"}),t.setState({email:""}))})},t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){this.loadUser(),this.loadMatch()}},{key:"render",value:function(){return l.a.createElement("section",{className:"hero is-fullheight is-default is-bold"},l.a.createElement(c,null),l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement("div",{className:"field is-grouped is-grouped-centered"},l.a.createElement("div",{className:"box has-text-centered",style:{fontSize:50}},"Till death do us part!",l.a.createElement("div",{className:"match"},l.a.createElement("h1",{style:{color:"red"}},"Your Match:"),l.a.createElement("h1",{style:{fontSize:50}},this.state.match),l.a.createElement("h1",{style:{fontSize:50}},this.state.email)))))))}}]),a}(n.Component);function A(){window.location.reload()}var D=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(E.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={contacts:[],ingredients:[],measurements:[],mealname:"",instructions:""},t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.a.ajaxPrefilter(function(e){e.crossDomain&&L.a.support.cors&&(e.url="https://cors-anywhere.herokuapp.com/"+e.url)}),L.a.ajax("https://www.themealdb.com/api/json/v1/1/random.php").then(function(a){console.log("response",a.meals[0]);for(var t={ingredients:[],measurements:[]},n=1;n<21;n++){var l="strIngredient"+n,r="strMeasure"+n;if(""===a.meals[0][l])break;t.ingredients.push(a.meals[0][l]),t.measurements.push(a.meals[0][r])}t.MealName=a.meals[0].strMeal,e.setState(Object(S.a)({},e.state,{ingredients:t.ingredients,measurements:t.measurements,mealname:a.meals[0].strMeal,instructions:a.meals[0].strInstructions})),console.log("result",e.state.ingredients)})}},{key:"render",value:function(){for(var e=[],a=0;a<this.state.ingredients.length;a++){var t=this.state.ingredients[a]+": "+this.state.measurements[a];e.push(t)}return console.log("final array: ",e),l.a.createElement("div",null,l.a.createElement("strong",null,l.a.createElement("center",null,l.a.createElement("h1",{style:{padding:"20px",fontSize:"40px"}},this.state.mealname))),l.a.createElement("center",null,l.a.createElement("h6",{style:{padding:"20px"}},this.state.instructions)),l.a.createElement("div",{style:{padding:"30px"},className:"card"},l.a.createElement("div",{className:"card-body"},e.map(function(e){return l.a.createElement("li",{className:"card-text"},e)}))),l.a.createElement("center",{style:{padding:"30px"}},l.a.createElement("button",{onClick:A,className:"recipes button is-success"},"New Recipe")))}}]),a}(n.Component);var W=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:m}),l.a.createElement(i.a,{exact:!0,path:"/home",component:w}),l.a.createElement(i.a,{exact:!0,path:"/survey",component:N}),l.a.createElement(i.a,{exact:!0,path:"/results",component:k}),l.a.createElement(i.a,{exact:!0,path:"/login",component:y}),l.a.createElement(i.a,{exact:!0,path:"/signup",component:x}),l.a.createElement(i.a,{exact:!0,path:"/map",component:F}),l.a.createElement(i.a,{exact:!0,path:"/match",component:U}),l.a.createElement(i.a,{exact:!0,path:"/recipes",component:D}))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(W,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/project-3",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/project-3","/service-worker.js");P?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):B(e)})}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.42881fe9.chunk.js.map