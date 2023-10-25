!function(e) {
    "use strict";
    e(window).on("load", function() {
        e("#status").fadeOut(),
        e("#preloader").css({
            height: "0%"
        }),
        e("body").delay(350).css({
            "overflow-x": "visible"
        })
    });
    var t = e(".video");
    t.length > 0 && t.magnificPopup({
        type: "iframe",
        iframe: {
            markup: '<style>.mfp-iframe-holder .mfp-content {max-width: 900px;height:500px}</style><div class="mfp-iframe-scaler" ><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div></div>'
        }
    });
    var a = e(".counter");
    a.length > 0 && a.counterUp({
        delay: 20,
        time: 500
    });
    var s = e(".parallaxie");
    s.length > 0 && s.parallaxie({
        speed: .5
    });
    var i = e(".screen");
    i.length > 0 && i.owlCarousel({
        loop: !0,
        nav: !1,
        autoplay: !0,
        autoplayTimeout: 2e3,
        margin: 25,
        responsive: {
            320: {
                items: 1,
                margin: 0
            },
            481: {
                items: 3,
                margin: 60
            },
            991: {
                items: 4
            }
        }
    });
    var n = e(".quote");
    n.length > 0 && n.owlCarousel({
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 2500,
        margin: 5,
        nav: !1,
        responsive: {
            300: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    var o = e(".app-slide-auto");
    o.length > 0 && o.owlCarousel({
        dots: !1,
        loop: !0,
        center: !0,
        margin: 0,
        autoplay: !0,
        autoplayTimeout: 2500,
        autoWidth: !0,
        ouchDrag: !1,
        mouseDrag: !1
    });
    var l = e(".app-slide");
    l.length > 0 && (l.owlCarousel({
        loop: !0,
        center: !0,
        margin: 0, 
        navs: !1,
        dots: !0,
        ouchDrag: !1,
        mouseDrag: !1,
        dotsContainer: ".tab-list",
        items:1,
    }),
    e(".owl-dot").on("click", function() {
        l.trigger("to.owl.carousel", [e(this).index(), 300])
    }));
    var r = e(".feat-slide");
    r.length > 0 && r.owlCarousel({
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 2500,
        nav: !0,
        margin: 30,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            300: {
                items: 1
            },
            400: {
                items: 2,
                margin: 10
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    }),
    (new WOW).init(),
    e(".subscribe form").submit(function(t) {
        t.preventDefault();
        var a = e(".subscribe form").serialize();
        e.ajax({
            type: "POST",
            url: "assets/subscribe.php",
            data: a,
            dataType: "json",
            success: function(t) {
                0 == t.valid ? (e(".success-message").hide(),
                e(".error-message").hide(),
                e(".error-message").html(t.message),
                e(".error-message").fadeIn("fast", function() {
                    e(".subscribe form").addClass("animated shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        e(this).removeClass("animated shake")
                    })
                })) : (e(".error-message").hide(),
                e(".success-message").hide(),
                e(".subscribe form").hide(),
                e(".success-message").html(t.message),
                e(".success-message").fadeIn("fast", function() {
                    e(".top-content").backstretch("resize")
                }))
            }
        })
    });
    var c = e(".right-nav a, .demo a");
    function m(t) {
        e(t.target).prev(".panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus")
    }
    c.length > 0 && c.on("click", function(t) {
        if (e(document).off("scroll"),
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var a = e(this.hash)
              , s = e(".navbar").height() - 2;
            if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
                return e("html,body").animate({
                    scrollTop: a.offset().top - s
                }, 1e3),
                !1
        }
    }),
    e(".panel-group").on("hidden.bs.collapse", m),
    e(".panel-group").on("shown.bs.collapse", m);
    var d = e("#contact-form");
    d.validator(),
    d.on("submit", function(t) {
        if (!t.isDefaultPrevented()) {
            return e.ajax({
                type: "POST",
                url: "assets/contact.php",
                data: e(this).serialize(),
                success: function(e) {
                    var t = "alert-" + e.type
                      , a = e.message
                      , s = '<div class="alert ' + t + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + a + "</div>";
                    t && a && (d.find(".messages").html(s),
                    d[0].reset())
                }
            }),
            !1
        }
    });
    var u = document.getElementById("filt-monthly");
    if ("undefined" != u && null != u) {
        var g = document.getElementById("filt-monthly")
          , h = document.getElementById("filt-hourly")
          , p = document.getElementById("switcher")
          , f = document.getElementById("monthly")
          , v = document.getElementById("hourly");
        g.addEventListener("click", function() {
            p.checked = !1,
            g.classList.add("toggler--is-active"),
            h.classList.remove("toggler--is-active"),
            f.classList.remove("none"),
            v.classList.add("none")
        }),
        h.addEventListener("click", function() {
            p.checked = !0,
            h.classList.add("toggler--is-active"),
            g.classList.remove("toggler--is-active"),
            f.classList.add("none"),
            v.classList.remove("none")
        }),
        p.addEventListener("click", function() {
            h.classList.toggle("toggler--is-active"),
            g.classList.toggle("toggler--is-active"),
            f.classList.toggle("none"),
            v.classList.toggle("none")
        })
    }
}(jQuery);





function Timeline(cvs) {

    var self = this,
        paused = true,
        rafid = 0,
        mouse = { x: 0, y: 0 },
        canvas = cvs,
        ctx = null;

    self.lines = [];

    self.isOK = false;
    self.options = {
        speed: 0.1,
        density: 8,
        radius: 600,
    };
    self.targets = [
        [29, 32, 48, 68],
        [29, 33, 38]
    ];
    self.dotColors = [
        ['#13669b', 'rgba(19, 102, 155, 0.3)', 'rgba(19, 102, 155, 0.08)'],
        ['#7dd317', 'rgba(113, 222, 15, 0.3)', 'rgba(91, 164, 22, 0.12)'],
    ];

    self.isPaused = function () {
        return paused;
    };

    function InitDots() {
        var tl = $('.timeline');
        var top = tl.find('h2').outerHeight();

        self.lines[0].dots = [];
        var y = top;
        tl.find('article:first figure').each(function () {

            self.lines[0].dots.push([$(this).outerWidth() + 20, y + 20]);

            y += $(this).outerHeight();
        });

        self.lines[1].dots = [];
        var y = top;
        tl.find('article:last figure').each(function () {

            self.lines[1].dots.push([canvas.width - $(this).outerWidth() - 20, y + 20]);

            y += $(this).outerHeight();
        });
    }

    function OnResize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        var wasPaused = paused;
        self.toggle(false);
        // Init lines
        self.lines[0].reset(canvas.offsetWidth / 2 - 15);
        self.lines[1].reset(canvas.offsetWidth / 2 + 15);

        InitDots();

        self.toggle(!wasPaused);
    }

    function init() {
        var result = false;
        try {
            result = !!(canvas.getContext && (ctx = canvas.getContext('2d')));

            self.lines[0] = new Line(0, canvas.offsetHeight - 100, '#4789a3', self.options, mouse);
            self.lines[1] = new Line(0, canvas.offsetHeight - 100, '#a0d59c', self.options, mouse);

        } catch (e) {
            return false;
        }

        $(canvas).mousemove(function (e) {

            if (e.offsetX) {
                mouse.x = e.offsetX;
                mouse.y = e.offsetY;
            }
            else if (e.layerX) {
                mouse.x = e.layerX;
                mouse.y = e.layerY;
            }
            else {
                mouse.x = e.pageX - $(canvas).offset().left;
                mouse.y = e.pageY - $(canvas).offset().top;
            }
        });

        $(window).resize(OnResize);

        OnResize();

        return result;
    }

    function Line(y, height, color, options, mouse) {
        var self = this;

        self.color = color;
        self.options = options;
        self.mouse = mouse;
        self.height = height;
        self.dots = [];
        self.y = y;

        self.points = [];

        self.reset = function (x, f) {
            self.points = [];
            for (var y = self.y; y < self.height; y += self.options.density)
                self.points.push(new Point(x, y, self.color));
        }

        self.update = function () {
            for (var i = 0; i < self.points.length; i++)
                self.points[i].update(self.mouse, self.options);
        }

        function Point(x, y) {
            this.y = y;
            this.x = x;
            this.base = { x: x, y: y };

            this.update = function (mouse, options) {
                var dx = this.x - mouse.x,
                    dy = this.y - mouse.y,
                    alpha = Math.atan2(dx, dy),
                    alpha = (alpha > 0 ? alpha : 2 * Math.PI + alpha),
                    d = options.radius / Math.sqrt(dx * dx + dy * dy);

                this.y += Math.cos(alpha) * d + (this.base.y - this.y) * options.speed;
                this.x += Math.sin(alpha) * d + (this.base.x - this.x) * options.speed;
            }
        }
    }

    function drawCircle(p, r, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();
    }

    function drawLine(p1, p2) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.closePath();
    }

    function redraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < 2; i++) {
            var points = self.lines[i].points;

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = self.lines[i].color;
            ctx.moveTo(points[15].x, points[15].y);

            for (var j = 15; j < points.length - 2; j++) {
                var point = points[j];

                var xc = (points[j + 1].x + point.x) / 2;
                var yc = (points[j + 1].y + point.y) / 2;


                ctx.quadraticCurveTo(point.x, point.y, xc, yc);
            }
            ctx.stroke();
            ctx.closePath();


            // Dots
            ctx.lineWidth = 1.2;
            ctx.strokeStyle = self.dotColors[i][2];
            for (var j = 0; j < self.lines[i].dots.length; j++) {
                var dot = self.lines[i].dots[j],
                    id = self.targets[i][j];
                    dot2 = [
                        (self.lines[i].points[id].x + self.lines[i].points[id + 1].x) / 2,
                        (self.lines[i].points[id].y + self.lines[i].points[id + 1].y) / 2,
                    ];

                var p1 = { x: dot[0], y: dot[1] };
                var p2 = { x: dot2[0], y: dot2[1] };


                drawLine(p1, p2);
                drawCircle(p1, 3, self.dotColors[i][0]);

                drawCircle(p2, 11, self.dotColors[i][1]);
                drawCircle(p2, 5.5, self.dotColors[i][0]);
            }
        }
    }

    function animate() {
        rafid = requestAnimationFrame(animate);

        self.lines[0].update();
        self.lines[1].update();

        redraw();
    }

    self.toggle = function (run) {
        if (!self.isOK) return false;

        if (run === undefined)
            self.toggle(!paused);

        else if (!!run && paused) {
            paused = false;
            animate();
        }
        else if (!!!run) {
            paused = true;
            cancelAnimationFrame(rafid);
        }
        return true;
    }


    self.isOK = init();
}
new Timeline($('#cvs3').get(0)).toggle(true);

 