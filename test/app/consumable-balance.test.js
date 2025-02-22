/**
 * @fileoverview Tests consumable balance.
 */

const testLib = require('../lib/tester.lib');

const { consumableBalance, ADDRESS, CONSTANTS } = require('../..');

describe('Consumable Balance', () => {
  testLib.init();

  // NOTE
  // Performs actual RPC calls

  const { ZERO_ADDRESS } = CONSTANTS;

  describe('Happy Path', () => {
    it('should fetch consumables of an address', async () => {
      const { CONSUMABLE_STAMINA_VIAL } = ADDRESS;
      const balance = await consumableBalance(
        ZERO_ADDRESS,
        CONSUMABLE_STAMINA_VIAL,
      );

      expect(balance).toBeNumber();
      expect(balance).toBe(0);
    });
  });
});
