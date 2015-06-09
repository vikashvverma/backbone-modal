requirejs.config({
    paths: {
        'jquery': 'lib/jquery.min',
        'underscore': 'lib/underscore.min',
        'backbone': 'lib/backbone.min',
        'Modal': 'src/Modal1'
    },
    shim: {
        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['Modal','jquery'], function(Modal,$) {
    var demo = {

    	alert: function(){
    		Modal.alert('Alert Title', 'This is an alert message.')
    	},

    	alertTitle: function(){
    		Modal.alert('Alert Title Only', '')
    	},

    	alertMsg: function(){
    		Modal.alert('This is an alert with message only, no title')
    	},

    	alertLong: function(){
    		new Modal({
    			title: 'Alert Title',
    			msg: '<p>This is a really long message. You can see that the message scrolls. Meh Blue Bottle nulla consectetur dreamcatcher vero. Austin pug gastropub deserunt pour-over. Occaecat ethnic cillum, adipisicing dolore aliquip readymade Truffaut kogi McSweeney\'s do skateboard retro pork belly before they sold out. Ullamco delectus laboris, Tonx mixtape XOXO excepteur ad fashion axe irony deserunt mumblecore. Messenger bag voluptate pop-up, Intelligentsia yr selfies swag fugiat pickled. Exercitation chillwave semiotics, cupidatat placeat ad sint fugiat literally irure roof party bicycle rights. Roof party dolore gastropub fingerstache PBR pork belly, next level twee pop-up Bushwick viral fashion axe master cleanse freegan YOLO.</p><p>Banksy Neutra sunt enim ennui, ethical sapiente cray ut. Food truck typewriter mustache 3 wolf moon, eiusmod aesthetic Truffaut distillery cillum American Apparel gastropub DIY. Pitchfork butcher pug Carles culpa mollit. Selfies aesthetic actually, seitan raw denim Odd Future tattooed post-ironic pour-over squid vinyl four loko laboris Schlitz salvia. Odd Future next level elit meggings, small batch banh mi Schlitz tousled. Ex velit pour-over ennui chambray. Et Godard direct trade Etsy, aute ethnic fap duis.</p><p>Pickled anim reprehenderit Echo Park mollit, brunch Pitchfork mustache cillum High Life. Trust fund butcher wolf culpa, roof party Wes Anderson Vice iPhone. Austin Blue Bottle gastropub banh mi put a bird on it ethnic Carles. Roof party stumptown hashtag, single-origin coffee nihil dreamcatcher literally odio Banksy mollit aute paleo accusamus officia Tumblr. Echo Park chambray fap, mumblecore minim cred consequat paleo wolf drinking vinegar. Chambray cray Wes Anderson biodiesel drinking vinegar. Occupy selvage mlkshk, try-hard gluten-free non Vice banh mi trust fund.</p><p>Gentrify fashion axe whatever voluptate banjo. Vero jean shorts fanny pack bitters, cliche officia wayfarers. Assumenda farm-to-table lomo selvage, organic pour-over tousled mlkshk est craft beer. Fixie biodiesel duis, fugiat Blue Bottle roof party skateboard 8-bit cardigan pop-up banh mi irony ullamco raw denim pickled. Art party readymade banh mi, bitters quinoa 8-bit organic vegan pug Shoreditch McSweeney\'s four loko Tumblr DIY irony. Velit officia 3 wolf moon hashtag, incididunt Intelligentsia Marfa nisi chillwave. Pour-over lo-fi duis, meh sapiente kitsch nulla mixtape.</p><p>This is a really long message. You can see that the message scrolls. Meh Blue Bottle nulla consectetur dreamcatcher vero. Austin pug gastropub deserunt pour-over. Occaecat ethnic cillum, adipisicing dolore aliquip readymade Truffaut kogi McSweeney\'s do skateboard retro pork belly before they sold out. Ullamco delectus laboris, Tonx mixtape XOXO excepteur ad fashion axe irony deserunt mumblecore. Messenger bag voluptate pop-up, Intelligentsia yr selfies swag fugiat pickled. Exercitation chillwave semiotics, cupidatat placeat ad sint fugiat literally irure roof party bicycle rights. Roof party dolore gastropub fingerstache PBR pork belly, next level twee pop-up Bushwick viral fashion axe master cleanse freegan YOLO.</p><p>Banksy Neutra sunt enim ennui, ethical sapiente cray ut. Food truck typewriter mustache 3 wolf moon, eiusmod aesthetic Truffaut distillery cillum American Apparel gastropub DIY. Pitchfork butcher pug Carles culpa mollit. Selfies aesthetic actually, seitan raw denim Odd Future tattooed post-ironic pour-over squid vinyl four loko laboris Schlitz salvia. Odd Future next level elit meggings, small batch banh mi Schlitz tousled. Ex velit pour-over ennui chambray. Et Godard direct trade Etsy, aute ethnic fap duis.</p><p>Pickled anim reprehenderit Echo Park mollit, brunch Pitchfork mustache cillum High Life. Trust fund butcher wolf culpa, roof party Wes Anderson Vice iPhone. Austin Blue Bottle gastropub banh mi put a bird on it ethnic Carles. Roof party stumptown hashtag, single-origin coffee nihil dreamcatcher literally odio Banksy mollit aute paleo accusamus officia Tumblr. Echo Park chambray fap, mumblecore minim cred consequat paleo wolf drinking vinegar. Chambray cray Wes Anderson biodiesel drinking vinegar. Occupy selvage mlkshk, try-hard gluten-free non Vice banh mi trust fund.</p><p>Gentrify fashion axe whatever voluptate banjo. Vero jean shorts fanny pack bitters, cliche officia wayfarers. Assumenda farm-to-table lomo selvage, organic pour-over tousled mlkshk est craft beer. Fixie biodiesel duis, fugiat Blue Bottle roof party skateboard 8-bit cardigan pop-up banh mi irony ullamco raw denim pickled. Art party readymade banh mi, bitters quinoa 8-bit organic vegan pug Shoreditch McSweeney\'s four loko Tumblr DIY irony. Velit officia 3 wolf moon hashtag, incididunt Intelligentsia Marfa nisi chillwave. Pour-over lo-fi duis, meh sapiente kitsch nulla mixtape.</p>'});
    	},


    	alertProgress: function(msg){

    		var modal = new Modal({title: 'Uploading file...', msg: msg||'', btns: false})

    		// fake progress
    		var progress = 0;
    		var interval = setInterval(function(){

    			progress = progress+10;

    			modal.progress(progress);

    			if( progress >= 100 ){
    				clearInterval(interval);
    				modal.close();
    			}

    		}, 200);

    	},

    	confirm: function(){
    		Modal.confirm(function(){
    			alert('You have confirmed this action!')
    		})
    	},

    	confirmCancelCallback: function(){
    		Modal.confirm(function(){
    			alert('You have confirmed this action!')
    		}).on('cancel', function(){
    			alert('You have chosen to NOT confirm this action');
    		})
    	},

    	confirmDelete: function(){
    		Modal.confirmDelete(function(){
    			alert('You have confirmed the deletion of an item!')
    		})
    	},

    	prompt: function(){
    		Modal.prompt('What’s your name?', '', {}, function(val){
    			setTimeout(function(){
    				alert('Hello '+val);
    			},0);
    		})
    	},

    	promptColor: function(){
    		Modal.prompt('Background Color', '', {pattern: 'hexcode', val: 'ffffff', placeholder: 'FFFFFF'}, function(val){
    			document.body.style.backgroundColor = val;
    		})
    	},

    	promptTextarea: function(){
    		var opts = {
    			placeholder: 'Tell us how you really feel...',
    			h: 100
    		};

    		Modal.prompt('Tell us', 'Write us a little blurb', opts, function(val){
    			setTimeout(function(){
    				alert('You said: '+val);
    			},0);
    		})
    	},

    	spinner: function(){
    		Modal.spinner();
    		setTimeout(function(){
    			Modal.close() // closes all modals
    		}, 1200)
    	},

    	alertAttentionGetters: function(){

    		var m = new Modal({
    			title: 'Attention Getters',
    			msg: 'You can use theses attention getters to inform users of warnings and errors.<br>Animations are provided by <a href="http://daneden.github.io/animate.css/" target="_blank">Animate.css</a><br><br><b>Example:</b>\
    <pre><code>var m = new Modal({title: \'Testing\'});'+"\n"+'m.bounce();</code></pre>',
    			btns: [
    				{label: 'Bounce', className: 'btn-primary', onClick: function(){ m.bounce(); }},
    				{label: 'Wobble', className: 'btn-primary', onClick: function(){ m.wobble(); }},
    				{label: 'Shake', className: 'btn-primary', onClick: function(){ m.shake(); }},
    				{label: 'Swing', className: 'btn-primary', onClick: function(){ m.swing(); }},
    				{label: 'Tada', className: 'btn-primary', onClick: function(){ m.tada(); }},
    				{label: 'Pulse', className: 'btn-primary', onClick: function(){ m.pulse(); }},
    				'close'
    			]
    		})

    	},

    	modalEffect: function(effect){
    		new Modal({
    			title: 'Modal Title',
    			msg: 'A short message about this modal.<br><br>There are several different effects that can be used<br>to show modals.',
    			effect: effect || 1
    		})
    	}
    };
    window.demo=demo;
});
