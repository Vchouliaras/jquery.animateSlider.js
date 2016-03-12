# Animate Slider   v1.0.6
<br/>
A jQuery Slider plugin with specific animations effects for each element.


##How it Works 

The Animate Slider plugin uses some predefined animation classes (fadeIn,fadeOut,rotateIn,bounce,slideInRight etc.) found in ``jquey.animateSlider.css`` and adds them to each element on the slider. It also add classes with delay for each animation (delay1s,delay1-5s,delay2s etc.)

##How to Start

Two quick start options are available:

* Download the [production version][min] with the plugin's css [stylesheet][css]
* Clone the repo: `git://github.com/Vchouliaras/jquery.animateSlider.js.git`
 
[min]: https://raw.github.com/vchouliaras/jquery.animateSlider.js/master/dist/jquery.animateSlider.min.js
[css]: https://raw.github.com/vchouliaras/jquery.animateSlider.js/master/assets/jquery.animateSlider.css


##How to use

In your web page:

```html

<!-- plugin's css styles -->
<link rel="stylesheet" href="css/jquery.animateSlider.css">


<ul class="anim-slider">


	<li class="anim-slide">
	   <!-- your content here -->
	</li>

	<li class="anim-slide">
	    <!-- your content here -->
	</li>



	<!-- arrows -->
	<nav class="anim-arrows">
		<span class="anim-arrows-prev"></span>
		<span class="anim-arrows-next"></span>
	</nav>
	<!-- dynamically created dots -->
		
</ul>


<script src="js/jquery.js"></script>
<script src="js/modernizr.js"></script>
<!-- Load the plugin -->
<script src="js/jquery.animateSlider.js"></script>
<script>
        $(function()
        {
            $(".anim-slider").animateSlider();
        });
</script>
```
##Options

Here's a list of available settings.

```javascript
$(".anim-slider").animateSlider(
    {
	    autoplay    :   true,   //starts the autoplay 
	    interval    :   5000,   //time between slides if autoplay is true
	    animations  :           //specify the animations for each element of the slide
	    {
	        0   :   //Slide No1
	        {
	            tagName :   //tagName or id or class name of the element  
	            {
	               show         :   "fadeIn",   //class to add when the element appears
	               hide         :   "fadeOut",  //class to add when the element disappears
	               delayShow    :   "delay1s"   //class to add to delay show effect
	            },
	            "#id"   :
	            {
	               show         :   "bounceIn",
	               hide         :   "bounceOut",
	               delayShow    :   "delay1-5s"
	            },
	            ".class":
	            {
	               show         :   "rotateIn",
	               hide         :   "rotateOut",
	               delayShow    :   "delay2s" 
	            }
	        },
	        1   :   //Slide No2
	        {
	            "#id"   :
	            {
	               show         :   "bounceInDown",
	               hide         :   "bounceOutUp",
	               delayShow    :   "delay0-5s"
	            },
	            tagName :
	            {
	               show         :   "slideInLeft",
	               hide         :   "slideOutRight",
	               delayShow    :   "delay1s"
	            },
	        }
	    }     
	}
);
```

## Examples

[Check out the demo](http://shane-heyns.github.io/jquery.animateSlider.js)

##Effects
##Bounce
bounce,  bounceIn,  bounceInDown,  bounceInRight,  bounceInUp,  bounceOut,  bounceOutDown,  bounceOutLeft,  bounceOutRight,  bounceOutUp,  bounceInBig,  bounceInLarge,  bounceInUpBig,  bounceInUpLarge,  bounceInDownBig,  bounceInDownLarge,  bounceInLeft,  bounceInLeftBig,  bounceInLeftLarge,  bounceInRightBig,  bounceInRightLarge,  bounceInUpLeft,  bounceInUpLeftBig,  bounceInUpLeftLarge,  bounceInUpRight,  bounceInUpRightBig,  bounceInUpRightLarge,  bounceInDownLeft,  bounceInDownLeftBig,  bounceInDownLeftLarge,  bounceInDownRight,  bounceInDownRightBig,  bounceInDownRightLarge,  bounceOutBig,  bounceOutLarge,  bounceOutUpBig,  bounceOutUpLarge,  bounceOutDownBig,  bounceOutDownLarge,  bounceOutLeftBig,  bounceOutLeftLarge,  bounceOutRightBig,  bounceOutRightLarge,  bounceOutUpLeft,  bounceOutUpLeftBig,  bounceOutUpLeftLarge,  bounceOutUpRight,  bounceOutUpRightBig,  bounceOutUpRightLarge,  bounceOutDownLeft,  bounceOutDownLeftBig,  bounceOutDownLeftLarge,  bounceOutDownRight,  bounceOutDownRightBig,  bounceOutDownRightLarge

##Fade
fadeIn,  fadeInDown,  fadeInDownBig,  fadeInLeft,  fadeInLeftBig,  fadeInRight,  fadeInRightBig,  fadeInUp,  fadeInUpBig,  fadeInUpLarge,  fadeInDownLarge,  fadeInLeftLarge,  fadeInRightLarge,  fadeInUpLeft,  fadeInUpLeftBig,  fadeInUpLeftLarge,  fadeInUpRight,  fadeInUpRightBig,  fadeInUpRightLarge,  fadeInDownLeft,  fadeInDownLeftBig fadeInDownLeftLarge,  fadeInDownRight,  fadeInDownRightBig,  fadeInDownRightLarge,  fadeOutUpLarge,  fadeOutDownLarge fadeOutLeftLarge,  fadeOutRightLarge,  fadeOutUpLeft,  fadeOutUpLeftBig,  fadeOutUpLeftLarge,  fadeOutUpRight,  fadeOutUpRightBig,  fadeOutUpRightLarge,  fadeOutDownLeft,  fadeOutDownLeftBig,  fadeOutDownLeftLarge,  fadeOutDownRight,  fadeOutDownRightBig,  fadeOutDownRightLarge,  fadeOut,  fadeOutDown,  fadeOutDownBig,  fadeOutLeft fadeOutLeftBig,  fadeOutRight,  fadeOutRightBig,  fadeOutUp,  fadeOutUpBig 

##Flip
flipInX,  flipInY,  flipOutX,  flipOutY,  lightSpeedIn,  lightSpeedOut,  flipInTopFront,  flipInTopBack flipInBottomFront,  flipInBottomBack,  flipInLeftFront,  flipInLeftBack,  flipInRightFront,  flipInRightBack,  flipOutTopFront,  flipOutTopBack,  flipOutBottomFront,  flipOutBottomback,  flipOutLeftFront,  flipOutLeftBack,  flipOutRightFront,  flipOutRightBack 

##Rotate
rotateIn,  rotateInDownLeft,  rotateInDownRight,  rotateInUpLeft,  rotateInUpRight,  rotateOut,  rotateOutDownLeft,  rotateOutDownRight,  rotateOutUpLeft,  rotateOutUpRight 

##Slide
slideInDown,  slideInLeft,  slideInRight,  slideOutLeft,  slideOutRight,  slideOutUp,  slideInUp,  slideOutDown 

##Zoom
zoomIn,  zoomInUp,  zoomInUpBig,  zoomInUpLarge,  zoomInDown,  zoomInDownBig,  zoomInDownLarge,  zoomInLeft,  zoomInLeftBig,  zoomInLeftLarge,  zoomInRight,  zoomInRightBig,  zoomInRightLarge,  zoomInUpLeft,  zoomInUpLeftBig,  zoomInUpLeftLarge,  zoomInUpRight,  zoomInUpRightBig,  zoomInUpRightLarge,  zoomInDownLeft,  zoomInDownLeftBig,  zoomInDownLeftLarge,  zoomInDownRight,  zoomInDownRightBig,  zoomInDownRightLarge,  zoomOut,  zoomOutUp,  zoomOutUpBig,  zoomOutUpLarge,  zoomOutDown,  zoomOutDownBig,  zoomOutDownLarge,  zoomOutLeft,  zoomOutLeftBig,  zoomOutLeftLarge,  zoomOutRight,  zoomOutRightBig,  zoomOutRightLarge,  zoomOutUpLeft,  zoomOutUpLeftBig,  zoomOutUpLeftLarge,  zoomOutUpRight,  zoomOutUpRightBig,  zoomOutUpRightLarge,  zoomOutDownLeft,  zoomOutDownLeftBig,  zoomOutDownLeftLarge,  zoomOutDownRight,  zoomOutDownRightBig,  zoomOutDownRightLarge 

##Other
hinge,  rollIn,  rollOut,  strobe,  shakeX,  shakeY,  spin,  spinReverse,  slingshot,  slingshotReverse,  pulsate,  heartbeat,  panic,  flash,  pulse,  rubberBand,  shake,  swing,  tada,  wobble 

## Credits

Animate Slider plugin is built on top of  [jQuery](http://jquery.com)  using [Modernizr](http://www.modernizr.com) and [Animate.css](http://daneden.github.io/animate.css/)


## License
Copyright (c) 2014 Vasileios Chouliaras<br/>
Licensed under the MIT license.
