/**
 * Created by Nouman Awan on 4/25/2020.
 */
var baseurl = window.location.protocol + "//" + window.location.host ;

$(document).ready(function() {
console.log(baseurl);
    $("#load").on('click',function(){
        $.ajax({
            type: "GET",
            url: baseurl + "/assignment/public/fetch-scrap-data",
            dataType: "json",
            async: true,
            contentType: 'application/json',
            success: function (response) {
                var room = 0;
                var room2 = 0;
                var datatable = $("#example").DataTable({
                    destroy: true,
                    data: response,
                    "deferRender": true,
                    "columns": [
                        {"data": "title"},
                        {"data": "url"},
                        {"data": "points"},
                        {"data": "username"},
                        {"data": "comments_number"},
                        {
                            sortable: false,
                            "render": function (data, type, full, meta) {
                                room++;
                                return '' +
                                    '<input hidden type="text" id="record' + room + '" value="' + full.id + '"/>' +
                                    '<button  value="Pending" class="btn btn-danger" onclick="deleteRecord(' + room + ')" >Delete</button>';

                            }
                        }
                    ]
                });
            }
        });
    });

});
function deleteRecord(id) {
    $.confirm({
        title: 'Confirmation!',
        content: 'Please confirm do you want to delete this Record?',
        type: 'yellow',
        typeAnimated: true,
        buttons: {
            confirm: {
                text: 'Confirm',
                btnClass: 'btn-danger',
                action: function () {
                    $.ajax({
                        type: "GET",
                        url: baseurl + "/delete-data",
                        dataType: "json",
                        data: {
                            "id": $('#record' + id).val()
                        },
                        contentType: 'application/json',
                        success: function (response) {
                            if(response == 'success') {
                                $.ajax({
                                    type: "GET",
                                    url: baseurl + "/fetch-scrap-data",
                                    dataType: "json",
                                    async: true,
                                    contentType: 'application/json',
                                    success: function (response) {
                                        var room = 0;
                                        var room2 = 0;
                                        var datatable = $("#example").DataTable({
                                            destroy: true,
                                            data: response,
                                            "deferRender": true,
                                            "columns": [
                                                {"data": "title"},
                                                {"data": "url"},
                                                {"data": "points"},
                                                {"data": "username"},
                                                {"data": "comments_number"},
                                                {
                                                    sortable: false,
                                                    "render": function (data, type, full, meta) {
                                                        room++;
                                                        return '' +
                                                            '<input hidden type="text" id="record' + room + '" value="' + full.id + '"/>' +
                                                            '<button  value="Pending" class="btn btn-danger" onclick="deleteRecord(' + room + ')" >Delete</button>';

                                                    }
                                                }
                                            ]
                                        });
                                    }
                                });

                            }}
                    });
                }
            }
        }
    });
}