/**
 * RandomProfile Library
 * Profile Scroller
 * @version 1.0.0
 * @author Firooz Meysami
  */

class RandomProfile{
    constructor(){ }

    //Make A HTTP Get Request
    async get(){
        
        var response= await fetch('https://randomuser.me/api/');
        var resData = await response.json();
        return resData;
    }
}