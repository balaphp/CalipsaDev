const {auth} = require('../libs/authentication');

describe('Given the authentication scheme,', () => {
  describe('Given api authentication', () => {
    it('Should allow based on current user/pass', () => {
      const info = {
        'user': 'TEST',
        'pass': 'TEST'
      }

      expect(auth('HTTP', info)).toEqual(true);
    });
  });

  describe('Given Api authentication', () => {
    it('Should allow a request based on Api key', () => {
      const info = {
        'X-API-KEY': 'X182J-3998C1-511921-T45CD'
      }

      expect(auth('WS', info)).toEqual(true);
    });
  });

  describe('Given Api authentication', () => {
    it('Should fail a request based on wrong Api key', () => {
      const info = {
        'X-API-KEY': '51JE2-488JU-988EC2-ALIRI'
      }

      expect(auth('WS', info)).toEqual(false);
    });
  });

  describe('Given the authentication scheme,', () => {
    describe('Given api authentication', () => {
      it('Should fail based on wrong user info', () => {
        const info = {
          'user': 'OW2',
          'pass': 'TechnicallyAbsent'
        }

        expect(auth('HTTP', info)).toEqual(false);
      });
    });
  })
});
