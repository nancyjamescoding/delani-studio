function toggle(div1, div2) {
    const styleOne = document.getElementById(div1).style.display
    const styleTwo = document.getElementById(div2).style.display
    document.getElementById(div1).style.display = styleTwo
    document.getElementById(div2).style.display =  styleOne
}
let name=$('#name')
        let email=$('#email')
        let message=$('#message')
        let myform=$('#contacts-fm')[0]

$('#contacts-fm').submit(
    function (){
         name = name.val()
         email = email.val()
         message = message.val()

        if(!name || !email || !message){
            alert('fill in all the values')
            return false;
        }
        else{myform.method=('post')
             myform.action=('https://gmail.us20.list-manage.com/subscribe/post?u=0674e772a8702cce9f1f&amp;id=f3770d27b3b7371')
             alert(name + ', we have recieved your message.Thankyou for reaching out to us')
             return true;

        }
    }
)
    