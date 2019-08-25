$("#result").text('')


function executar() {
    $.post("/sessao-2/action", function (data, status) {
        $("#result").text(JSON.stringify(data))
    });

}