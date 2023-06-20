'use strict';

const logoutButton = new LogoutButton();
logoutButton.action = () => {
    ApiConnector.logout(response => {
        if(response.success) {
            location.reload();
        }
    });
};

ApiConnector.current(response => {
    if(response.success) {
        ProfileWidget.showProfile(response.data);
    }
});

const tableBody = new RatesBoard();
const requestCurrencyRates = () => {
    ApiConnector.getStocks(response => {
        if(response.success) {
            tableBody.clearTable();
            tableBody.fillTable(response.data);
        };
    });
};
requestCurrencyRates();
setInterval(requestCurrencyRates, 60000);


