const alertBox = document.getElementById('alert-box')
const imgBox = document.getElementById('img-box')

const form = document.getElementById('p-form')
const name = document.getElementById('id_name')
const description = document.getElementById('id_description')
const image = document.getElementById('id_image')

const csrf = document.getElementsByName('csrfmiddlewaretoken')

const url = ""

image.addEventListener('change', function(){
    const img_data = image.files[0]
    const url = URL.createObjectURL(img_data)
    imgBox.innerHTML = `<img src="${url}" width='100%'>`
})
form.addEventListener('submit', function(e){
    e.preventDefault()
    const fd = new FormData()
    fd.append('csrfmiddlewaretoken',csrf[0].value)
    fd.append('name', name.value)
    fd.append('description',description.value)
    fd.append('image', image.files[0])

    $.ajax({
        type:'POST',
        url:url,
        enctype:'multipart/form-data',
        data:fd,
        success:function(response){
         name.value = "",
        description.value = "",
        imgBox.innerHTML = `<div class='alert alert-primary'>photo added</div>`


               },
        error:function(error){
        console.log(error)
        },
        cache:false,
        contentType:false,
        processData:false,
    })
})
