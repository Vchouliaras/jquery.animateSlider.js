/*
*
*  @name        Animate Slider 
*  @description A jQuery Slider plugin with specific animations for each element 
*  @version     0.1.0 
*  @copyright   2014 - Vasileios Chouliaras <vasilis.chouliaras@gmail.com> 
*  @license     MIT - https://github.com/vchouliaras/jquery.animateSlider.js/blob/master/LICENSE-MIT 
*
*/
;(function($,window,document,undefined)
{
	/**
	 * [Create the contructor of animateSlider Plugin]
	 * @param  {object} element [the element the plugin is chain to]
	 * @param  {object} options [plugin's configuration object]
	 */
	var animateSlider	=	function(element,options)
	{
		this.element	=	element;
		this.$element	=	$(element);
		this.options	=	options;
	};

	animateSlider.prototype = 
	{
		/**
		 * [Initialize the plugin]
		 */
		init		:	function()
		{
			//Use Modernizr
			this.cssAnimations  =	Modernizr.cssanimations;
			this.cssTransitions =	Modernizr.csstransitions;
			if (!this.cssAnimations || !this.cssTransitions)
			{
				throw new Error("Your broswer does not support CSS3 Animations or Transitions");
			}
			
			this.config			=	$.extend({},this.defaults,this.options);
			this.slides			=	this.$element.children(".anim-slide");
			this.slidesCount	=	this.slides.length;
			this.interval		=	[];//Ovveride config.interval 
			this.current		=	0; //first slide	
	
			var $dots	=	$("<div class=\"anim-dots\"></div>");
			var temp	=	this.slidesCount;
			while ( temp --)
			{
				$dots.append("<span></span>");
			}
			$dots.appendTo(this.$element);
			this.slides.eq(this.current).addClass("anim-slide-this");

			this.$dots			=	this.$element.find(".anim-dots>span");
			this.$navNext		=	this.$element.find(".anim-arrows-next");
			this.$navPrev		=	this.$element.find(".anim-arrows-prev");
			
			this.loadEvents();
			this.navigate(this.current);
			this.updateDots();
			this.autoplay();
		},
		/**
		 * [Go to current slide and set the proper classes to animate the elements]
		 * @param  {number} page [current slide]
		 */
		navigate	:	function(page)
		{
			//Classes created from animate.css, you can add your own here.
			var classes		=	'bounce flash pulse rubberBand shake swing tada wobble bounceIn bounceInDown bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight slideInDown slideInLeft slideInRight slideOutLeft slideOutRight slideOutUp slideInUp slideOutDown hinge rollIn rollOut fadeInUpLarge fadeInDownLarge fadeInLeftLarge fadeInRightLarge fadeInUpLeft fadeInUpLeftBig fadeInUpLeftLarge fadeInUpRight fadeInUpRightBig fadeInUpRightLarge fadeInDownLeft fadeInDownLeftBig fadeInDownLeftLarge fadeInDownRight fadeInDownRightBig fadeInDownRightLarge fadeOutUpLarge fadeOutDownLarge fadeOutLeftLarge fadeOutRightLarge fadeOutUpLeft fadeOutUpLeftBig fadeOutUpLeftLarge fadeOutUpRight fadeOutUpRightBig fadeOutUpRightLarge fadeOutDownLeft fadeOutDownLeftBig fadeOutDownLeftLarge fadeOutDownRight fadeOutDownRightBig fadeOutDownRightLarge bounceInBig bounceInLarge bounceInUpBig bounceInUpLarge bounceInDownBig bounceInDownLarge bounceInLeft bounceInLeftBig bounceInLeftLarge bounceInRightBig bounceInRightLarge bounceInUpLeft bounceInUpLeftBig bounceInUpLeftLarge bounceInUpRight bounceInUpRightBig bounceInUpRightLarge bounceInDownLeft bounceInDownLeftBig bounceInDownLeftLarge bounceInDownRight bounceInDownRightBig bounceInDownRightLarge bounceOutBig bounceOutLarge bounceOutUpBig bounceOutUpLarge bounceOutDownBig bounceOutDownLarge bounceOutLeftBig bounceOutLeftLarge bounceOutRightBig bounceOutRightLarge bounceOutUpLeft bounceOutUpLeftBig bounceOutUpLeftLarge bounceOutUpRight bounceOutUpRightBig bounceOutUpRightLarge bounceOutDownLeft bounceOutDownLeftBig bounceOutDownLeftLarge bounceOutDownRight bounceOutDownRightBig bounceOutDownRightLarge zoomIn zoomInUp zoomInUpBig zoomInUpLarge zoomInDown zoomInDownBig zoomInDownLarge zoomInLeft zoomInLeftBig zoomInLeftLarge zoomInRight zoomInRightBig zoomInRightLarge zoomInUpLeft zoomInUpLeftBig zoomInUpLeftLarge zoomInUpRight zoomInUpRightBig zoomInUpRightLarge zoomInDownLeft zoomInDownLeftBig zoomInDownLeftLarge zoomInDownRight zoomInDownRightBig zoomInDownRightLarge zoomOut zoomOutUp zoomOutUpBig zoomOutUpLarge zoomOutDown zoomOutDownBig zoomOutDownLarge zoomOutLeft zoomOutLeftBig zoomOutLeftLarge zoomOutRight zoomOutRightBig zoomOutRightLarge zoomOutUpLeft zoomOutUpLeftBig zoomOutUpLeftLarge zoomOutUpRight zoomOutUpRightBig zoomOutUpRightLarge zoomOutDownLeft zoomOutDownLeftBig zoomOutDownLeftLarge zoomOutDownRight zoomOutDownRightBig zoomOutDownRightLarge flipInTopFront flipInTopBack flipInBottomFront flipInBottomBack flipInLeftFront flipInLeftBack flipInRightFront flipInRightBack flipOutTopFront flipOutTopBack flipOutBottomFront flipOutBottomback flipOutLeftFront flipOutLeftBack flipOutRightFront flipOutRightBack strobe shakeX shakeY spin spinReverse slingshot slingshotReverse pulsate heartbeat panic';
			var classShow,classHide,delayShow,$next,$current,currentAnimate,nextAnimate;

			$current		=	this.slides.eq(this.current);
			currentAnimate	=	this.elemAnimate(this.current,this.config);
			this.current	=	page;
			$next			=	this.slides.eq(this.current);
			nextAnimate		=	this.elemAnimate(this.current,this.config);

				/*=========================================*/
				$current.removeClass(" anim-slide-this "+classes);
				$current.find("*").removeClass(classes);

					//Iterate through a javascript plain object of current and next Slide
					$.each(currentAnimate,function(index)
					{
						if ( index == $current.prop("tagName").toLowerCase() )
						{
							classHide	=	$current.data("classHide");
							delayShow	=	$current.data("delayShow");
							$current.removeClass(delayShow);
							$current.addClass(classHide+" animated");
							return false;
						}
						else
						{
							classHide	=	$current.find(index).data("classHide");
							delayShow	=	$current.find(index).data("delayShow"); 
							$current.find(index).removeClass(delayShow);
							$current.find(index).addClass(classHide+" animated");
						}
					});
					$.each(nextAnimate,function(index)
						{
							if ( index == $current.prop("tagName").toLowerCase() )
							{
								classShow	=	$next.data("classShow") ;
								delayShow	=	$next.data("delayShow");
								$next.removeClass(classes);
								$next.addClass(classShow+" "+delayShow+" animated");
								return false;
							}
							else
							{
								classShow	=	$next.find(index).data("classShow");
								delayShow	=	$next.find(index).data("delayShow"); 
								$next.find(index).removeClass(classes);
								$next.find(index).addClass(classShow+" "+delayShow+" animated ");
							}
						});

				$next.addClass(" anim-slide-this");
			    /*=========================================*/ 
			this.updateDots();
		},
		/**
		 * [Update the dots to the current slide]
		 */
		updateDots	:	function() 
		{
			this.$dots.removeClass("anim-dots-this");
			this.$dots.eq(this.current).addClass("anim-dots-this");
		},
		/**
		 * [If the dots are clicked the autoplay procedure stops
		 * and you navigate to the current slide]
		 * @param  {number} page [current slide]
		 */
		dots		:	function(page)
		{
			if ( page >= this.slidesCount || page < 0)
			{
				return false;
			}
			if (this.config.autoplay)
			{
				clearTimeout(this.autoplay);
				this.config.autoplay	=	false;
			}
			this.navigate(page);
		},
		/**
		 * [Get the configuration object for each slide element and attach it to elements with $.data]
		 * @param  {number} page   [current slide]
		 * @param  {object} config [configuration object]
		 */
		elemAnimate	:	function(page,config)
		{
			if ( typeof config.animations == "object" )
			{
				if ( this.slidesCount !== Object.keys(config.animations).length )
				{
					throw new SyntaxError("Slides length and animation Object length must be equal.");
				}
				//Get the selected Slide configuration object
				var animations		=	config.animations[page];
				var $current		=	this.slides.eq(page);
				return $.each(animations,function(index,value)
					{
						
						if ( index	==	$current.prop("tagName").toLowerCase() )
						{
							if ( $current.data("classShow")	== null )
							{
								if ( typeof value.show		===	"string" )	{	$current.data("classShow",value.show);		}	else	{	$current.data("classShow","");	}
								if ( typeof value.hide		===	"string" )	{	$current.data("classHide",value.hide);		}	else	{	$current.data("classHide","");	}	
								if ( typeof	value.delayShow	===	"string" )	{	$current.data("delayShow",value.delayShow);	}	else	{	$current.data("delayShow"," ");	}	
							}
							return false;
						}
						else
						{
							if ( !$current.find(index)[0] )
							{
								throw new TypeError("The element \'"+index+"\' does not exist.");
							}

							if ( $current.find(index).data("classShow") == null )
							{
								if( typeof value.show		===	"string" ) {	$current.find(index).data("classShow",value.show);		} else	{	$current.find(index).data("classShow"," ");	}
								if( typeof value.hide		===	"string" ) {	$current.find(index).data("classHide",value.hide);		} else	{	$current.find(index).data("classHide"," ");	}
								if( typeof value.delayShow	===	"string" ) {	$current.find(index).data("delayShow",value.delayShow);	} else	{	$current.find(index).data("delayShow"," ");	}
							}
						}
					});
			}
		},
		/**
		 * [Call the animDuration for each slide and if the animation time of current slide is bigger than 
         * config.interval replace it with this.inteval, else leave config.interval with the default value]
		 */
		autoplay	:	function() 
		{
			if (this.config.autoplay)
			{
				var page				=	this.current;
				var that				=	this;
				var loop				=	function()
				{
					page	=	( page >= that.slidesCount -1 || page < 0 )	? 0 : page + 1;
					that.navigate(page);
					that.autoplay();
				};

				if ( this.interval.length === this.slidesCount )
				{
					this.autoplayTime	=	setTimeout(loop,this.interval[page]);
					return;
				}

				this.animDuration(page).done(function(animationTime)
				{
					if( animationTime >= that.config.interval )
					{
						that.interval[page]	=	animationTime;
						that.autoplayTime	=	setTimeout(loop,0);	
					}				
					else if( animationTime < that.config.interval	)
					{
						that.interval[page]	=	that.config.interval;
						that.autoplayTime	=	setTimeout(loop,that.config.interval-animationTime);
					}
				});
			}
		},
		/**
		 * [Find the total animation time for the current slide]
		 * @param  {number} page	[current slide]
		 * @return {object} promise [jQuery's Promises to make asynchronous call]
		 */
		animDuration:	function(page) 
		{
			var $slideAnimations			=	this.slides.eq(page);
			var slideAnimationsCount		=	$slideAnimations.children("*.animated").length;
			var animationStart				=	+new Date();
			var	promise						=	new $.Deferred();
			var	animationTime,count			=	0;
			$slideAnimations.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd",function()
				{
					var animationEnd	=	+new Date();
					animationTime		=	Math.ceil((animationEnd -animationStart)/1000)*1000;
					count++;
					if (count == slideAnimationsCount)
					{
						promise.resolve(animationTime);
					}
				});	
			return promise;
		},
		/**
		 * [Attach events handlers to specific tasks]
		 */
		loadEvents	:	function()
		{
			var that = this;
			this.$navNext.on("click.slide",function(event)
				{
					if (that.config.autoplay)
					{
						clearTimeout(that.autoplay);
						that.config.autoplay	=	false;
					}
					var page	=	(that.current >= that.slidesCount - 1 ) ?  0 : that.current + 1 ;
					that.navigate(page,"next");
					event.preventDefault();
				});
			this.$navPrev.on("click.slide",function(event)
				{
					if (that.config.autoplay)
					{
						clearTimeout(that.autoplay);
						that.config.autoplay	=	false;
					}
					var page	=	( that.current === 0 )? that.slidesCount - 1 : that.current - 1;
					that.navigate(page,"prev");
					event.preventDefault(); 
				});
			this.$dots.on("click.slide",function(event)
				{
					var page	=	$(this).index();
					that.dots(page);
					event.preventDefault();
				});
		},
		defaults	:
		{
			autoplay	: true,
			interval	: 5000
		}
	};

	/**
	 * [Attach the plugin to jQuery's prototype]
	 * @param  {object} options [plugin's configuration object]
	 * @return {object} this    [the jQuery wrapper]
	 */
	$.fn.animateSlider	=	function(options)
	{
		return this.each(function()
			{
				var instance	=	$.data(this,"animateSlider");
				if (!instance)
				{
					$.data(this,"animateSlider",new animateSlider(this,options).init());
				}
			});
	};
})(jQuery);
