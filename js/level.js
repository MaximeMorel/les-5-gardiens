define(['lib/jquery'], function (jquery) {
    var Level = function (levelNum) {
        this.levelDir = 'data/lvl' + levelNum + '/';
    }

    Level.prototype.load = function (callback) {
        this.callback = callback;

        this.resourcesToLoad = 2;
        this.loaded = 0;

        $.getJSON(this.levelDir + 'map.json', function (data) {
            this.map = data;
            this.loadedResource();
        });
        $.getJSON(this.levelDir + 'riddles.json', function (data) {
            this.riddles = data;
            this.loadedResource();
        });
    }

    Level.prototype.loadedResource = function () {
        this.loaded +=1;

        if (this.loaded >= this.resourcesToLoad) {
            // All resources are loaded.
            this.callback();
        }
    }

    return Level;
});