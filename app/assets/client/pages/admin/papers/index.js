//= require jquery
//= require jquery_ujs
//= require bootstrap/js/bootstrap.min
//= require moment/moment
//
//
//= require components/admin/common/metronic
//= require components/admin/common/layout
//= require components/admin/common/index
//= require components/admin/table-ajax/index
//
//
//= require_self



$(function() {
    var el = $('body');


    Metronic.init(); // init metronic core componets
    Layout.init(); // init layout
    Demo.init(); // init demo features

    //init table-managed
    TableAjax.init(el.find('.com-datatable-ajax'), {
        'columnDefs': [{
            "targets": [0],
            "data": "id",
            "render": function(data, type, full) {
                return "<input type=\"checkbox\" name=\"id[]\" value=\"" + data + "\">";
            }
        }, {
            "targets": [1],
            "orderable": false,
            "data": "title",
            "name": "title"
        }, {
            "targets": [2],
            "orderable": false,
            "data": "description",
            "name": "description"
        }, {
            "targets": [3],
            "orderable": false,
            "data": "sequence",
            "name": "sequence"
        }, {
            "targets": [4],
            "orderable": false,
            "data": "record_count",
            "name": "record_count"
        }, {
            "targets": [5],
            "orderable": false,
            "data": "praise_count",
            "name": "praise_count"
        }, {
            "targets": [6],
            "orderable": false,
            "data": "status",
            "name": "status"
        }, {
            "targets": [7],
            "data": "id",
            "orderable": false,
            "render": function(data, type, full) {
                return '<a href="/admin/papers/' + data + '/edit" class="btn default btn-xs purple"><i class="fa fa-edit"></i> 编辑</a><a href="/admin/papers/' + data + '" class="btn default btn-xs black" data-method="delete" data-confirm="确定删除此条记录吗？"><i class="fa fa-trash-o"></i> 删除</a>';
            }
        }],
    });
});
