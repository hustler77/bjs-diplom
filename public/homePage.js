"use strict";

const logoutButton = new LogoutButton();
logoutButton.action = () => {
  ApiConnector.logout((response) => {
    if (response.success) {
      location.reload();
    }
  });
};

ApiConnector.current((response) => {
  if (response.success) {
    ProfileWidget.showProfile(response.data);
  }
});

const tableBody = new RatesBoard();
const requestCurrencyRates = () => {
  ApiConnector.getStocks((response) => {
    if (response.success) {
      tableBody.clearTable();
      tableBody.fillTable(response.data);
    }
  });
};
requestCurrencyRates();
setInterval(requestCurrencyRates, 60000);

const moneyManger = new MoneyManager();
moneyManger.addMoneyCallback = (data) => {
  ApiConnector.addMoney(data, (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
      moneyManger.setMessage(response.success, "Успешное пополнение");
    } else {
      moneyManger.setMessage(response.success, response.error);
    }
  });
};

moneyManager.conversionMoneyCallback = (data) => {
  ApiConnector.convertMoney(data, (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, "Успешная конвертация");
    } else {
      moneyManager.setMessage(response.success, response.error);
    }
  });
};
