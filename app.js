//Instance of randomProfile Class
var profile = new RandomProfile();

//Instanse of UI
var ui = new UI();

//Make Http Call
profile.get()
       .then(res => {
           // Show Profile
           ui.showProfile(res);
        })
       .catch(err => {
           //Show Alert
           ui.showAlert('Something Went Wrong.Please Retry ...')
        });

//Define ui variables
var messageBtn = document.querySelector('.message');
var followBtn = document.querySelector('button.follow');
var unfollowBtn = document.querySelector('button.unfollow');
var body = document.querySelector('body');
//Event Listners
body.addEventListener('click',(e)=>{
    if(e.target.classList.contains('message')){
        sendMessage();
    }else if(e.target.classList.contains('follow')){
        follow(e);
    }else if(e.target.classList.contains('unfollow')){
        unfollow(e);
    }
})
    

//Functions
function sendMessage(){
    ui.showAlert('Message Sent Successfully','success');
}

function follow(e){
    ui.showAlert('Followed Successfully','success');
    e.target.innerHTML = 'unfollow';
    e.target.classList.remove('btn-primary');
    e.target.classList.remove('follow');
    e.target.classList.add('btn-warning'); 
    e.target.classList.add('unfollow'); 
}
function unfollow(e){
    ui.showAlert('Unfollowed Successfully','warning');
    e.target.innerHTML = 'Follow';
    e.target.classList.remove('btn-warning'); 
    e.target.classList.remove('unfollow');
    e.target.classList.add('follow'); 
    e.target.classList.add('btn-primary'); 

}





