describe('Game module', function() {
    describe('GameManager', function() {
        // Inject the Game module into this test
        beforeEach(module('Game'));

        var _gridService;
        beforeEach(module(function($provide){
            _gridService = {
                anyCellsAvailable: angular.noop,
                tileMatchesAvailable: angular.noop
            };
            $provide.value('GridService', _gridService);
        }));

        var gameManager; // instance of the GameManager
        beforeEach(inject(function(GameManager) {
            gameManager = GameManager;
        }));

        // Our tests will go below here
        describe('.movesAvailable', function() {

           it('should report true if there are cells available', function() {
               spyOn(_gridService, 'anyCellsAvailable').andReturn(true);
               expect(gameManager.movesAvailable()).toBeTruthy();
           });

           it('should report true if there are moves available', function() {
               spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
               spyOn(_gridService, 'tileMatchesAvailable').andReturn(true);
               expect(gameManager.movesAvailable()).toBeTruthy();
           });

           it('should report false if there are no moves available', function() {
               spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
               spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
               expect(gameManager.movesAvailable()).toBeFalsy();
           });

        });

    });
});