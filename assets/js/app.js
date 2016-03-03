Vue.directive('focus', {
    bind: function () {
        this.el.focus();
    }
});

new Vue({
	el: '#app',
	data: {
		input: '',
		phonetic: '',
		nato: {
				"a" : "Alpha",
				"b" : "Bravo",
				"c" : "Charlie",
				"d" : "Delta",
				"e" : "Echo",
				"f" : "Foxtrot",
				"g" : "Golf",
				"h" : "Hotel",
				"i" : "India",
				"j" : "Juliet",
				"k" : "Kilo",
				"l" : "Lima",
				"m" : "Mike",
				"n" : "November",
				"o" : "Oscar",
				"p" : "Papa",
				"q" : "Quebec",
				"r" : "Romeo",
				"s" : "Sierra",
				"t" : "Tango",
				"u" : "Uniform",
				"v" : "Victor",
				"w" : "Whiskey",
				"x" : "X-ray",
				"y" : "Yankee",
				"z" : "Zulu",
				"." : "[dot]",
				"-" : "[dash]",
				"/" : "[slash]",
				" " : " ",
				"0" : "Zero",
				"1" : "One",
				"2" : "Two",
				"3" : "Three",
				"4" : "Four",
				"5" : "Five",
				"6" : "Six",
				"7" : "Seven",
				"8" : "Eight",
				"9" : "Niner"
		}
	},
	computed: {
		phonetic: function() {
			var vm = this;
			var output = [];
			
			this.input.split('').forEach(function(char) {
				var char = char.toLowerCase();
				
				if(vm.nato.hasOwnProperty(char)) {
					output.push(vm.nato[char]);
				} else {
					output.push('['+char+']');
				}
			});
			
			return output.join(' ').replace(/\s\s+/g, ' ');
		}
	}

});
