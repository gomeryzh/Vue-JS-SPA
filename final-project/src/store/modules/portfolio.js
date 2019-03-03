const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, stockPrice, quantity }) {
    const selectedStock = state.stocks.find(stock => stock.id === stockId);
    if (selectedStock) {
      selectedStock.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, stockPrice, quantity }) {
    const selectedStock = state.stocks.find(stock => stock.id === stockId);
    if (selectedStock > quantity) {
      selectedStock.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(selectedStock), 1);
    }
    state.funds += stockPrice * quantity;
  },
  SET_PORTFOLIO(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const selectedStock = getters.stocks.find(elem => elem.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        price: selectedStock.price,
        name: selectedStock.name
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default { state, mutations, actions, getters };
