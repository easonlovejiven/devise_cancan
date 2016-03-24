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
            "data": "author",
            "name": "author"
        }, {
            "targets": [3],
            "orderable": false,
            "data": "category.title",
            "name": "category.title"
        }, {
            "targets": [4],
            "orderable": false,
            "data": "annotation",
            "name": "annotation"
        }, {
            "targets": [5],
            "orderable": false,
            "data": "comment_count",
            "name": "comment_count"
        }, {
            "targets": [6],
            "orderable": false,
            "data": "praise_count",
            "name": "praise_count"
        }, {
            "targets": [7],
            "orderable": false,
            "data": "status",
            "name": "status"
        }, {
            "targets": [8],
            "data": "id",
            "orderable": false,
            "render": function(data, type, full) {
                return '<a href="/admin/notifies/' + data + '/edit" class="btn default btn-xs purple"><i class="fa fa-edit"></i> 编辑</a><a href="/admin/notifies/' + data + '" class="btn default btn-xs black" data-method="delete" data-confirm="确定删除此条记录吗？"><i class="fa fa-trash-o"></i> 删除</a>';
            }
        }],
    });
});
