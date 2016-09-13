var express = require('express'),
    stylus  = require('stylus'),
    nib     = require('nib'),
    port = process.env.PORT || 8080

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

app.get('/about', function (req, res) {
  res.render('about',
  { title : 'About' }
  )
})

app.get('/projects', function(req, res) {
  res.render('projects',
  { title : 'Projects' }
  )
});

app.get('/collaboration', function(req, res) {
  res.render('collaboration',
  { title : 'Collaboration' }
  )
});

app.get('/rng', function(req, res) {
  res.render('rng',
  { title : 'Random Number Generator' }
  )
});

app.get('/wowilovebiomes', function(req, res) {
  res.render('biomes',
  { title : 'Myanmar Forest Services' }
  )
});

app.get('/wowilovebiomes-faq', function(req, res) {
  res.render('about-biomes',
  { title : 'Frequestly Asked Questions' }
  )
});

app.get('/wowilovebiomes-planatrip', function(req, res) {
  res.render('biomes-planatrip',
  { title : 'Plan a Trip' }
  )
});

app.get('*', function(req, res) {
  res.render('404',
  { title : '404' }
  )
});

app.listen(port, function() {
  console.log('Listening on port ' +  port);
});
