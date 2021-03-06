! function($, undefined) {
    "use strict";
	var page = {
		init: function () {		
			function a(a) {
				a ? $(".loading").addClass("active") : $(".loading").removeClass("active")
			}

			function b(a) {
				a ? ($("body").addClass("contrast"), $("#prettify").attr("href", "styles/vendor/google-code-prettify/tomorrow-night.css")) : ($("body").removeClass("contrast"), $("#prettify").attr("href", "styles/vendor/google-code-prettify/github.css"))
			}
			$(".nav-main").each(function () {
				var a = $(this).find(".active");
				a.parents("li").addClass("active")
			}), $.rvFontsize({
				targetSection: "#content .vbox",
				store: !0,
				controllers: {
					appendTo: "#rvfs-controllers",
					showResetButton: !0,
					template: '<li><a href="#" class="rvfs-decrease" data-toggle="tooltip" data-placement="bottom" title="Diminuir Letra"><i class="fa fa-font"></i>-</a></li><li><a href="#" class="rvfs-reset" data-toggle="tooltip" data-placement="bottom" title="Tamanho Letra Padrão"><i class="fa fa-font"></i></a></li><li><a href="#" class="rvfs-increase" data-toggle="tooltip" data-placement="bottom" title="Almentar Letra"><i class="fa fa-font"></i>+</a></li><li><a href="#" class="active-contrast" data-toggle="tooltip" data-placement="bottom" title="Contraste"><i class="fa fa-adjust"></i></a></li>'
				}
			}), $('[data-toggle="fullscreen"]').on("click", function (a) {
				a.preventDefault(), screenfull.enabled && screenfull.request()
			}), $(".active-loading").on("click", function (b) {
				b.preventDefault(), a($(".loading").hasClass("active") ? !1 : !0)
			}), $(".active-contrast").on("click", function (a) {
				a.preventDefault(), $("body").hasClass("contrast") ? (b(!1), $.removeCookie("contrast")) : (b(!0), $.cookie("contrast", 1))
			}), b($.cookie("contrast") ? !0 : !1)
		}
	},
		footer = {
			init: function () {
				$(".footer-bottom").each(function () {
					var a = $(this),
						b = $(window).outerHeight(),
						c = $("#barra-brasil").outerHeight(),
						d = $(".entry-content").outerHeight(),
						e = c + d + a.outerHeight();
					b >= e ? a.addClass("footer-fixed") : a.removeClass("footer-fixed")
				})
			}
		},
		bootstrap = {
			init: function () {
				$('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover(), $(document).on("click", ".popover-title .close", function (a) {
					var b = $(a.target),
						c = b.closest(".popover").prev();
					c && c.popover("hide")
				}), $(".carousel").carousel()
			}
		},
		form = {
			init: function () {
				$(".form-datepicker").each(function () {
					$(this).datepicker({
						language: $(this).data("language")
					})
				}), $(".form-slider").each(function () {
					$(this).slider()
				}), $(".form-chosen-select").each(function () {
					var a = $(this);
					a.chosen();
					var b = a.closest(".chosen-control");
					b.on("click", ".select", function (b) {
						b.preventDefault(), a.find("option").attr("selected", "selected"), a.find("option").prop("selected", !0), a.trigger("chosen:updated")
					}), b.on("click", ".deselect", function (b) {
						b.preventDefault(), a.find("option").attr("selected", ""), a.find("option").prop("selected", !1), a.trigger("chosen:updated")
					})
				}), $(".form-markdown").each(function () {
					var a, b = $(this).attr("id"),
						c = {
							container: b,
							basePath: "",
							theme: {
								base: "styles/vendor/epiceditor/epiceditor.css",
								preview: "styles/vendor/epiceditor/bartik.css",
								editor: "styles/vendor/epiceditor/epic-light.css"
							}
						};
					a = new EpicEditor(c).load()
				}), $(".date").mask("00/00/0000", {
					placeholder: "__/__/____"
				}), $(".time").mask("00:00:00", {
					placeholder: "__:__:__"
				}), $(".date_time").mask("00/00/0000 00:00:00", {
					placeholder: "__/__/____ __:__:__"
				}), $(".zipcode").mask("00.000-000", {
					placeholder: "__.___-___"
				}), $(".phone").mask("0000-0000", {
					placeholder: "____-____"
				}), $(".phone_with_ddd").mask("(00) 0000-0000", {
					placeholder: "(__) ____-____"
				});
				var a = function (a) {
					return a.match(/^(\(?11\)? ?9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])[0-9]{1})/g) ? "(00) 00000-0000" : "(00) 0000-0000"
				};
				$(".celphones").mask(a, {
					placeholder: "(__) ____-____"
				}), $(".phone_international").mask("+099 (099) ZZZ", {
					placeholder: "+__ (__) ____-____",
					maxlength: !1,
					translation: {
						Z: {
							pattern: /\d|-/,
							recursive: !0
						}
					}
				}), $(".cpf").mask("000.000.000-00", {
					placeholder: "___.___.___-__",
					reverse: !0
				}), $(".money").mask("000.000.000.000.000,00", {
					placeholder: "0,00",
					reverse: !0
				}), $(".money2").mask("#.##0,00", {
					placeholder: "0,00",
					reverse: !0,
					maxlength: !1
				}), $(".ip_address").mask("0ZZ.0ZZ.0ZZ.0ZZ", {
					placeholder: "___.___.___.___",
					translation: {
						Z: {
							pattern: /[0-9]/,
							optional: !0
						}
					}
				}), $(".ip_address2").mask("099.099.099.099", {
					placeholder: "___.___.___.___"
				}), $(".percent").mask("##0,00%", {
					placeholder: "0,00%",
					reverse: !0
				}), $(".plate").mask("SSS-0000", {
					placeholder: "___-____"
				}), $(".clear-if-not-match").mask("00/00/0000", {
					clearIfNotMatch: !0
				}), $(".pis").mask("000.00000.00-0", {
					placeholder: "___._____.__-_"
				}), $(".cnpj").mask("009.000.000/0000-00", {
					placeholder: "___.___.___/____-__"
				}), $(".dropfile").each(function () {
					var a = $(this);
					return "undefined" == typeof window.FileReader ? void $("small", this).html("File API & FileReader API not supported").addClass("text-danger") : (this.ondragover = function () {
						return a.addClass("hover"), !1
					}, this.ondragend = function () {
						return a.removeClass("hover"), !1
					}, void (this.ondrop = function (b) {
						b.preventDefault(), a.removeClass("hover").html("");
						var c = b.dataTransfer.files[0],
							d = new FileReader;
						return d.onload = function (b) {
							a.append($("<img>").attr("src", b.target.result))
						}, d.readAsDataURL(c), !1
					}))
				}), $("[data-parsley-validate]").each(function () {
					if ($(this).parsley(), $(this).find(".tab-content")) {
						var a = $(this);
						$.listen("parsley:field:success", function (b) {
							var c = $(b.$element).closest(".tab-pane").attr("id"),
								d = a.find('a[href$="#' + c + '"]');
							d.hasClass("tab-error") && d.removeClass("tab-error")
						}), $.listen("parsley:field:error", function (b) {
							var c = $(b.$element).closest(".tab-pane").attr("id"),
								d = a.find('a[href$="#' + c + '"]');
							d.hasClass("tab-error") || d.addClass("tab-error")
						})
					}
				}), $(".form-summernote").each(function () {
					$(this).summernote({
						height: 250,
						lang: "pt-BR"
					})
				})
			}
		},
		list = {
			init: function () {
				$(".nestable").each(function () {
					$(this).nestable({
						group: $(this).data("group")
					})
				}), $(".nestable-menu").each(function () {
					var a = !1,
						b = $(this).data("target");
					$(this).on("click", function (c) {
						c.preventDefault(), a ? (a = !1, $(b).nestable("expandAll")) : (a = !0, $(b).nestable("collapseAll"))
					})
				}), $(".sortable").each(function () {
					$(this).sortable()
				})
			}
		},
		table = {
			init: function () {
				$(".checkall").on("click", function () {
					$(this).closest("table").find(":checkbox").prop("checked", this.checked)
				}), $(".checkrow").on("click", function () {
					$(this).closest("tr").find(":checkbox").prop("checked", this.checked)
				}), $(".checkcol").on("click", function () {
					$(this).closest("table").find("." + $(this).data("check")).prop("checked", this.checked)
				})
			}
		},
		widget = {
			init: function () {
				$(".portlet").each(function () {
					$(this).sortable({
						connectWith: ".portlet",
						iframeFix: !1,
						items: $(this).data("items"),
						opacity: $(this).data("opacity"),
						helper: "original",
						revert: !0,
						forceHelperSize: !0,
						placeholder: "sortable-box-placeholder round-all",
						forcePlaceholderSize: !0,
						tolerance: "pointer"
					})
				}), $(".calendar").each(function () {
					var a = $(this),
						b = a.data("url"),
						c = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
						d = ["D", "S", "T", "Q", "Q", "S", "S"];
					$.ajax(b, {
						dataType: "json",
						success: function (b) {
							var e = b;
							a.calendar({
								months: c,
								days: d,
								events: e,
								popover_options: {
									placement: "top",
									html: !0
								}
							})
						},
						error: function (a, b, c) {
							console.error(c)
						}
					})
				})
			}
		},
		menu = {
			init: function () {
				$('[data-ride="collapse"] a').on("click", function (a) {
					var b, c = $(a.target);
					c.is("a") || (c = c.closest("a")), b = c.parent().siblings(".active"), b && b.toggleClass("active").find("> ul:visible").slideUp(200), c.parent().hasClass("active") && c.next().slideUp(200) || c.next().slideDown(200), c.parent().toggleClass("active"), c.next().is("ul") && a.preventDefault(), setTimeout(function () {
						$(document).trigger("updateNav")
					}, 300)
				}), $.fn.dropdown.Constructor.prototype.change = function (a) {
					a.preventDefault();
					var b, c, d, e, f, g, h = $(a.target),
						i = !1;
					h.is("a") || (h = h.closest("a")), c = h.closest(".dropdown-menu"), d = c.parent().find(".dropdown-label"), g = d.text(), b = h.find("input"), i = b.is(":checked"), b.is(":disabled") || "radio" === b.attr("type") && i || ("radio" === b.attr("type") && c.find("li").removeClass("active"), h.parent().removeClass("active"), i || h.parent().addClass("active"), b.prop("checked", !b.prop("checked")), f = c.find("li > a > input:checked"), f.length ? (e = [], f.each(function () {
						var a = $(this).parent().text();
						a && e.push($.trim(a))
					}), e = e.length < 4 ? e.join(", ") : e.length + " selected", d.html(e)) : d.html(d.data("placeholder")))
				}, $(".dropdown-select > li > a").on("click.dropdown-menu", $.fn.dropdown.Constructor.prototype.change)
			}
		},
		general = {
			init: function () {
				$("[data-toggle-class]").on("click", function (a) {
					a.preventDefault();
					var b, c, d, e, f = $(a.target);
					f.data("toggle-class") || (f = f.closest("[data-toggle-class]")), b = f.data("toggle-class"), c = f.data("target") || f.attr("href"), b && (d = b.split(",")), c && (e = c.split(",")), d && d.length && $.each(e, function (a) {
						if (-1 !== d[a].indexOf("*")) {
							var b = new RegExp("\\s" + d[a].replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g");
							$(f).each(function (a, c) {
								for (var d = " " + c.className + " "; b.test(d);) d = d.replace(b, " ");
								c.className = $.trim(d)
							})
						}
						"#" !== e[a] && $(e[a]).toggleClass(d[a]) || f.toggleClass(d[a])
					}), f.toggleClass("active")
				}), $(".panel-toggle").on("click", function (a) {
					a.preventDefault();
					var b, c = $(a.target),
						d = "collapse";
					c.is("a") || (c = c.closest("a")), b = c.closest(".panel"), b.find(".panel-body").toggleClass(d), c.toggleClass("active")
				})
			}
		},
		chart = {
			init: function () {
				$(".easypiechart").each(function () {
					var a = $(this),
						b = a.data(),
						c = a.find(".step"),
						d = parseInt($(b.target, 10).text(), 10),
						e = 0;
					b.barColor && (b.barColor = function (a) {
						return a /= 100, "rgb(" + Math.round(200 * a) + ", 200, " + Math.round(200 * (1 - a)) + ")"
					}), b.onStep = function (a, f, g) {
						e = g, c.text(parseInt(g, 10)), b.target && $(b.target).text(parseInt(g, 10) + d)
					}, b.onStop = function () {
						d = parseInt($(b.target).text(), 10), b.update && setTimeout(function () {
							a.data("easyPieChart").update(100 - e)
						}, b.update)
					}, $(this).easyPieChart(b)
				});
				var sr, sparkline;
				sparkline = function ($re) {
					$(".sparkline").each(function () {
						var $data = $(this).data();
						(!$re || $data.resize) && ("pie" === $data.type && $data.sliceColors && ($data.sliceColors = eval($data.sliceColors)), "bar" === $data.type && $data.stackedBarColor && ($data.stackedBarColor = eval($data.stackedBarColor)), $data.valueSpots = {
							"0:": $data.spotColor
						}, $(this).sparkline("html", $data))
					})
				}, $(window).resize(function () {
					clearTimeout(sr), sr = setTimeout(function () {
						sparkline(!0)
					}, 500)
				}), sparkline(!1)
			}
		},
		mobile = {
			init: function () {
				$(".no-touch .slim-scroll").each(function () {
					var a, b = $(this),
						c = b.data();
					b.slimScroll(c), $(window).resize(function () {
						clearTimeout(a), a = setTimeout(function () {
							b.slimScroll(c)
						}, 500)
					}), $(document).on("updateNav", function () {
						b.slimScroll(c)
					})
				})
			}
		},
		browser = {
			init: function () {
				$(".ie11 .vbox").each(function () {
					$(this).height($(this).parent().height())
				})
			}
		},
		ie = {
			init: function () { }
		},
		onReady = {
			init: function () {
				page.init(), footer.init(), bootstrap.init(), form.init(), table.init(), list.init(), widget.init(), menu.init(), general.init(), chart.init(), mobile.init(), browser.init(), ie.init()
			}
		},
		onLoad = {
			init: function () { }
		},
		onResize = {
			init: function () {
				footer.init()
			}
		},
		onScroll = {
			init: function () { }
		},
		closeAll = {
			init: function () {
				$('.closeall').click(function () {
					$('.panel-collapse.in')
						.collapse('hide');
				});
			}
		};
    $(document).ready(onReady.init), $(window).load(onLoad.init), $(window).resize(onResize.init), $(window).scroll(onScroll.init)
}(jQuery);
