

$(document).ready(function() {
    $("#savebtn").click(function () {
        $('#tbl tbody').append('<tr>  <td>' + $("#data").val() +  "</td><td><img src='" + $("#img").val() + "'></td><td><button style=\"color: orangered\"><a>Pirkti</a></button></td></tr>");

    });

});