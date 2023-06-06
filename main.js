$('form').on('submit',function(e){
    e.preventDefault()
    const novaTerefa = $('#tarefa').val();
    const addTarefa = $('<li style="display:block"></li>')
    $(`<p>${novaTerefa}</p>`).appendTo(addTarefa)
    $(addTarefa).appendTo('ul')
    $('#tarefa').val('')
})

$('ul').on('click','li', function(){
    $(this).addClass('ok_tarefa_li')
})