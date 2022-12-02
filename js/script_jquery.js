$(function(){
    
    function redimensionarJanela(){
        var alturaJanela = $(window).height();
        console.log("Altura da janela é: ",alturaJanela)
        $('#primeiroConteudo').css('height',alturaJanela)
        $('#segundoConteudo').css('height',alturaJanela)
        $('#terceiroConteudo').css('height',alturaJanela)
    }

    $('#menuSobre').click(function(){
        $('html,body').animate({scrollTop:$('#segundoConteudo').offset().top},1000)
        console.log("Altura do conteúdo até o TOPO:",$('#segundoConteudo').offset().top);
    })

    $('nav li:nth-child(1)').click(function(){
        $('html,body').animate({scrollTop:$('#primeiroConteudo').offset().top},1000)
        console.log("Altura do conteúdo até o TOPO:",$('#primeiroConteudo').offset().top);
    })
    $('nav li:nth-child(3)').click(function(){
        $('html,body').animate({scrollTop:$('#terceiroConteudo').offset().top},1000)
        console.log("Altura do conteúdo até o TOPO:",$('#terceiroConteudo').offset().top);
    })

    redimensionarJanela()

    $(window).resize(function(){
        redimensionarJanela();
    })
})