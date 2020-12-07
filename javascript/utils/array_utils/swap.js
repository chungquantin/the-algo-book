Array.prototype.swap = (self, x, y) => {
	var temp = self[x];
	self[x] = self[y];
	self[y] = temp;
};
