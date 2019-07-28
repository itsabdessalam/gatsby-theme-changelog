module.exports = {
	sanitize: str => {
		return str.replace(/&#(\d+);/g, (match, dec) => {
			return String.fromCharCode(dec);
		});
	},
	slugify: str => {
		const a =
			"àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
		const b =
			"aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
		const p = new RegExp(a.split("").join("|"), "g");

		return str
			.toString()
			.toLowerCase()
			.replace(/\s+/g, "-")
			.replace(p, c => {
				return b.charAt(a.indexOf(c));
			})
			.replace(/&/g, "-and-")
			.replace(/[^\w-]+/g, "")
			.replace(/--+/g, "-")
			.replace(/^-+/, "")
			.replace(/-+$/, "");
	},
	splitCamelCase: str => {
		return str
			.replace(/([a-z])([A-Z])/g, "$1 $2")
			.split(" ")
			.map(item => {
				return item.toLowerCase();
			});
	},
	parseToObject: obj => {
		return JSON.parse(JSON.stringify(obj));
	},
	formatDate: (date, locale) => {
		return new Date(date).toLocaleDateString(locale, {
			year: "numeric",
			month: "long",
			day: "numeric"
		});
	},
	hexToRgba: (hexValue, alphaValue) => {
		const pattern = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
			hex = hexValue.replace(pattern, (m, r, g, b) => {
				return r + r + g + g + b + b;
			}),
			rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
			r = parseInt(rgb[1], 16),
			g = parseInt(rgb[2], 16),
			b = parseInt(rgb[3], 16);
		return `rgba(${r},${g},${b}, ${alphaValue})`;
	},
	importAll: req => {
		req.keys().forEach(req);
	}
};
