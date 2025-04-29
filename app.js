//template_tnwb22c
//service_382mk8t
//So7N716RG64Uodeq


function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_382mk8t',
            'template_tnwb22c',
            event.target,
            'So7N716RG64Uodeq'

        ).then(() => {
            console.log('this worked')
        })
    
}