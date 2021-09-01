function deleteRow(obj, user_id, booking_id) {

    // console.log('Object: ' + obj + '\nUser ID: ' + user_id + '\nBooking ID: ' + booking_id);

    // Delete User Document
    // $.ajax({
    //     url: '/admin/db/user/delete/'+user_id,
    //     contentType: 'application/json',
    //     method: 'DELETE',
    //     success: function(data) {
    //         $(obj).closest('tr').remove();
    //         console.log('Successfully deleted user.');
    //     },
    //     error: function() {
    //         console.log('Error deleting user.');
    //     }
    // });

    // Delete Booking Document
    $.ajax({
        url: '/admin/db/booking/delete/'+booking_id,
        contentType: 'application/json',
        method: 'GET',
        success: function(data) {
            $(obj).closest('tr').remove();
        },
        error: function() {
            console.log('Error deleting booking.');
        }
    });
}