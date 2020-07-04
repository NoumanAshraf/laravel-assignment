/**
 * Created by Nouman Awan on 7/2/2020.
 */
$(document).ready(function() {
    $('.dataTable').DataTable({
        processing: true,
        serverSide: true,
        ajax: 'customers',
        columns: [
            { data: 'name', name: 'name' },
            { data: 'email', name: 'email' },
            { data: 'phone', name: 'phone' },
            { data: 'address', name: 'address' }
        ],
        dom: 'Bfrtip',
        buttons: [
            'pageLength', 'csv', 'excel', 'pdf'
        ],
    });
});