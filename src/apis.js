import { Redirect } from "react-router";

class Apis {

    static login = async (user)=>{
       var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
       var raw =JSON.stringify(user);
       console.log(raw)
       var requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
       };
     let response = await fetch("https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/96/login", requestOptions);
     let responseJsonObj= await response.json();
     console.log(responseJsonObj);
     if (responseJsonObj.token){
       console.log(responseJsonObj.token)
       window.localStorage.setItem("Token",responseJsonObj.token)
      
     }
     else{
       alert("You Are Not Authorized ")
       return <Redirect to='/register'/>
     }
  }

  static register = async (user)=>{
    const url = 'https://whispering-journey-12121.herokuapp.com/http://anyservice.imassoft.com/96/register';
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(user);
        console.log(raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        let httpResponse = await fetch(url, requestOptions)
        let responseJsonObj = await httpResponse.json()
        console.log(responseJsonObj)
        let token = await responseJsonObj.token
        window.localStorage.setItem("Token", token)

    }





  static listall = async()=>{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", window.localStorage.getItem("Token"));
      var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
      };
      let httpResponse = await fetch(`https://nameless-dusk-81295.herokuapp.com/http://anyservice.imassoft.com/96/videos/`,
      requestOptions);
    let responseJsonObj = await httpResponse.json();
    console.log(responseJsonObj)
    if(responseJsonObj.error){
      return [{'title':'you donot have access'},{'title':'try again with login'}]
    }
    else return responseJsonObj;
    
    }



}
export default Apis;