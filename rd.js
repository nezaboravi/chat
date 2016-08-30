
module.exports = function () {
	return parseFolder;
}
var parseFolder =  function(dirName, fileName, callback ) {
	items = [];
	fs.readdir(process.argv[2], function (err, fileList) {
  		if (err) throw console.error(err);  
		fileList.map( function(item) {
  			if (path.extname(item) === '.md')
     			items.push(item);
		})
	});
    return items;
}
  