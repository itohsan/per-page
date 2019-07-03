PerPage
====
display percentage of vertical position in page

- demo
https://itohsan.github.io/per-page/index.html

- requirement
jquery

- simple usage
```
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script type="text/javascript" src="jquery.per-page.js"></script>
<script>
$('body').perPage();
</script>
```

- options
```
$('body').perPage({
//	'background-image' : 'url("./flower_himawari_mark.png")',
	'background-color' : 'black',
	'color' : 'lightgray',
	'right' : '1.0rem',
	'bottom' : '1.0rem',
	'opacity' : '0.5',
	'scale' : 1.0,
	'text-scale' : 1.0
});
```

- licence
MIT

- author
https://twitter.com/ponytaili
