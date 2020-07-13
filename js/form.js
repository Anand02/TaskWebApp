$().ready(function() {

    $('.nav-link').each(function(){
        $(this).append('<img src="images/mobile_link_arrow.png">')
        $(this).addClass('nav-link-button');
               
    });

    $('#regForm').validate({
        rules: {
            firstname: {
                required:true,
                minlength:2
            },
            lastname:"required",
            email: {
                required:true,
                email:true
            },
            title: {
                required:true,
            },
            phone: {
                required:true,
                digits:true
            },
            input: {
                required:true,  
            }
        },
        messages: {
            firstname: {
                required:'Please enter  first name',
            },
            lastname:"Please enter  last name",
            title: {
                required:'Please enter  title',
            },
            email: {
                required: 'Please enter an email address',
                email: 'Please enter a <em>Valid</em> email address'
            },
            phone: {
                required:'Please enter your phone number',
                digits:'Only numbers please'
            },
            inputState: {
                required:'Please select an answer'
            }
        },
        submitHandler: function() {
            alert("success")
            var data = $('#regForm').serialize().split('&');
            console.log("data",data)
            var obj = {};
            for(var key in data) {
                obj[data[key].split('=')[0]] = data[key].split('=')[1];
            }
            console.log("obj",obj)

            $.ajax({
                url: "images/iconfinder_download_3830985.svg",
                dataType: 'html',
                type: 'GET',
                success: function(data) {       
                    alert("sucees0",data)  
                    $(".nested-box-2").prepend(data)
                        .css({
                            'display':'flex',
                            'justify-content':'center',
                            'align-items':'center'
                        })
                    $("#regForm").hide();
                    
                    function showBox() {
                        $('.welcome').append(obj.firstname)
                        .css({'color':'#ff0000', 'transition':'2s ease'})
                        .fadeIn('show', 2000)
                        setTimeout(function() {
                            $('.welcome').css({'color':'#000000', 'transition':'2s ease'})
                        }, 2000)
                    };
                    setTimeout(showBox, 2000);
                    var $formBox = $(".nested-box-2")
                    $($formBox).click(function() {
                        location.reload()
                    })
                }  
            });   
        },
        success: function(element) {
            element.remove();
        }
    });
});

