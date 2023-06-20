'use strict';
const logoutBtn = new LogoutButton();
logoutBtn.action = () => {
    ApiConnector.logout(response => {
        if(response.success) {
            location.reload();
        }
    });
};


