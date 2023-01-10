$('document').ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const newTask = $('#task-name').val();
        const newItem = $('<li> </li>')
        $('<li>' + newTask + '</li> <i class="fa-solid fa-check"></i><i class="fa-solid fa-trash"></i>').appendTo(newItem);
        $(newItem).appendTo('ul');
        $('#task-name').val('');
    })
    
        $('ul').on('click', '.fa-check', function () {
            $(this).parent('li').toggleClass('checked');
        })

        $('ul').on('click', 'li', function () {
            $(this).parent('li').toggleClass('checked');
        })

        $('ul').on('click', '.fa-trash', function () {
            $(this).parent('li').fadeOut();
        })

})