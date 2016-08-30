module.exports = readDirectory();

function readDirectory(){
	fs.readdir(process.argv[2], function (err, fileList) {
  if (err) throw console.error(err);  
  fileList.map( function(item) {
  	if (path.extname(item) === '.md')
     console.log(item);
})

	
});
}
