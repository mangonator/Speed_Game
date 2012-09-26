
	var sequence = new Array()
	,	play = null
	,	level = 5
	,	input = true
	,	i = 0
	,	turn = 0
	,	player = 1
	,	button = false;

	function button_anim(button, background_color, state ) { 	// State 0/1 (off/on). Light animation for buttons. backround color format: 'rgba(255,0,0,.7)' or '#000' 
		if(state == 1) $(button).css('box-shadow','0 0 20px ' + background_color);
		else  $(button).css('box-shadow','inset 3px 3px 100px' + background_color);
	}
	
	function game() {
	
		/// BUTTON 1
	
	if (player = 1) {
		if (turn == 0 && button != true) {
			$('#overlay').css('top','280px');
		} else if (button != true) {
			$('#overlay').css('top','0px');
		}
	}else if (player = 2) {
		if (turn == 0 && button != true) {
			$('#overlay').css('top','0px');
		} else if (button != true) {
			$('#overlay').css('top','280px');
		}
	}
		
		$('#p1_1, #p2_1').mousedown(function() {
			if (button == false) {
				button_anim('#p1_1,#p2_1', 'rgba(255,0,0,.7)', 1 );
				button = true;
				if (input) {
					sequence.push(1);
				}else if (sequence[i] != 1) {
					endGame();
				}else{
					i++;
				}
			}
		})
		.mouseup(function() {
			button_anim('#p1_1,#p2_1','#000', 0 );
			button = false;
		});
		
		/// BUTTON 2
		
		$('#p1_2, #p2_2').mousedown(function() {
			if (button == false) {
				button_anim('#p1_2,#p2_2', 'rgba(0,0,255,.7)', 1 );
				button = true;
				if (input) {
					sequence.push(2);
				}else if (sequence[i] != 2) {
					endGame();
				}else{
					i++;
				}
			}
		})		
		.mouseup(function() {
			button_anim('#p1_2,#p2_2', '#000', 0 );
			button = false;
		});
		
		/// BUTTON 3
		
		$('#p1_3, #p2_3').mousedown(function() {
			if (button == false) {
				button_anim('#p1_3,#p2_3', 'rgba(0,255,0,.7)', 1 );
				button = true;
				if (input) {
					sequence.push(3);
				}else if (sequence[i] != 3) {
					endGame();
				}else{
					i++;
				}
			}
		})
		.mouseup(function() {
			button_anim('#p1_3,#p2_3', '#000', 0 );
			button = false;
		});
		
		/// BUTTON 4
		
		$('#p1_4, #p2_4').mousedown(function() {
			if (button == false) {
				button_anim('#p1_4,#p2_4', 'rgba(255,255,0,.7)', 1 );
				button = true;
				if (input) {
					sequence.push(4);
				}else if (sequence[i] != 4) {
					endGame();
				}else{
					i++;
				}
			}
		})
		.mouseup(function() {
			button_anim('#p1_4,#p2_4', '#000', 0 );
				button = false;
		});
		
		if (sequence.length < level)
			$('#turn').html('<p>' + (level - (sequence.length)) + '</p>');
		else
			$('#turn').html('<p>' + i + '</p>');
		if (sequence.length == level) {
			input = false;
			turn = 1;
		}
		
		if (i == level && sequence.length == level && sequence.length == i) {
			i = 0;
			sequence = [];
			input = true;
			level++;
			turn = 0;
		}
	}

	function endGame(){
			$('#overlay').css({'top':'0','left':'0','height':'480px'});
			$('#p1_1, #p1_2, #p1_3, #p1_4, #p2_1, #p2_2, #p2_3, #p2_4').css('box-shadow','inset 3px 3px 100px #000');
			$('#message').fadeIn().html("Player " + player + " got to level: " + (level*1.0-4) + "<br> <input type='button' value='Start turn'>");
			if (player == 1) player = 2;
			if (player == 2) player = 1;
	}
	
	$(document).ready(function() {
		$('#lauta').css({'width':$(window).width(),'height':$(window).height()});
		play = setInterval(game, 40);
	});