(function() {

    CatHandler = function() {
        var self=this;    
            
        var probability_add_cat = 1.0;
        var probability_remove_cat = 0.0;
        var loop_frequency = 1000;

        setInterval(function() {
            
        }, loop_frequency);
    }

    CatHandler.prototype.placeCats = function() {
        var visible = [];
        $('body').find('div').each(function(a,b) {
            if($(b).visible()) {
                visible.push(b);
            }
        });
        
        var cats = [];
            
        if(visible.length) {
            var c = new Cat('adult_horizontal.png', 'Fluffy', visible[0]);
        }

    }

    CatHandler.prototype.initializeVisibilityGrid = function() {
        var self=this;

        var w = window.innerWidth;
        var h = window.innerHeight;
        
        var ratio = w/h;
        console.log(ratio);

        self.visibilityGrid = [];
        for(var i=0; i<9; i++) {
            self.visibilityGrid[i] = new Array(9);
        }
    }

    function Cat(imagePath, name, el) {
        var self=this;
        self.html = '<img style="position:absolute; top:75px;" src="'+imagePath+'" />'
        
        //$(el).html($(el).html()+self.html);
    }
})();
