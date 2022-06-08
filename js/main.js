function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#bairro").html(response.bairro);
            $(".cep").show();
            $(".barra-progresso").hide();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("localidade").innerHTML = response.localidade;
        }
    } )
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});
