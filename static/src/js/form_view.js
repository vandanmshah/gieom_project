$(document).ready(function () {
    // call _rpc to get JSON response
    _rpc({
        method: "search_read",
    }).then(function (res) {

        // get the ID of field which is clicked from dashboard
        var clickedFieldID = Number(document.URL.split("field_id=")[1]);
        var fieldTodisplay;

        // get whole field from JSON respone of clicked field id
        for(var index = 0; index < res.length; index++) {
            if (clickedFieldID === res[index]["id"]) {
                fieldTodisplay = res[index]
                break;
            }
        }

        // display some data
        var usedKeys = ['name', 'abv', 'ounces', 'ibu'];
        var fieldLabels = ['Beer Name', 'The alcoholic content by volume', 'Beer Size', 'International bittering units'];
        var $formMainData = $("<div />", {
            "class": 'form_main_data',
        });
        for (var i = 0; i < usedKeys.length; i++) {
            var $label = $("<label />", {
                text: fieldLabels[i],
            });
            var $span = $("<span />", {
                text: fieldTodisplay[usedKeys[i]] ? fieldTodisplay[usedKeys[i]] : "NA",
            });
            var $div = $("<div />", {
                class: 'form_field',
            });
            $label.appendTo($div);
            $span.appendTo($div);
            $div.appendTo($formMainData);
        }
        $formMainData.appendTo($(".main_content"));

        // display document data in table structure for that call ListView function constructure
        // and append it to DOM
        // var keysInListView = ["name", "uploader", "status"];
        // var theadInListView = ["Document Name", "Uploaded By", "Current Status"];
        // var $table = ListView(fieldTodisplay.documents, keysInListView, theadInListView, "1-10");
        // $table.appendTo($(".main_content"));
    });
});
