/**
 * @fileoverview Fetches hero sale data.
 */

const { getContractAuctionSales } = require('../ether');

/**
 * Fetches hero sale data.
 *
 * @param {string} heroId The hero id.
 * @return {Promise<Object>} Hero sales data.
 */
exports.getSalesData = async (heroId) => {
  try {
    const salesContract = await getContractAuctionSales();
    const auctionData = await salesContract.getAuction(heroId);

    return {
      onSale: true,
      auctionId: Number(auctionData.auctionId),
      seller: auctionData.seller,
      startingPrice: auctionData.startingPrice.toString(),
      endingPrice: auctionData.endingPrice.toString(),
      duration: Number(auctionData.duration),
      startedAt: Number(auctionData.startedAt),
    };
  } catch (ex) {
    // an error means hero is not for sale
    return {
      onSale: false,
      auctionId: null,
      seller: '',
      startingPrice: 0,
      endingPrice: 0,
      duration: 0,
      startedAt: 0,
    };
  }
};
