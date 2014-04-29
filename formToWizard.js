/* Created by jankoatwarpspeed.com */

(function($) {
    $.fn.formToWizard = function(options) {
        options = $.extend({
            submitButton: "",
            prevClasses: '',
            nextClasses: '',
            strPrev: '< Back',
            strNext: 'Next >',
            strStep: 'Step'
        }, options);

        var element = this;

        var steps = $(element).find("fieldset");
        var actual = 0;
        var count = steps.size();
        var submmitButtonName = "#" + options.submitButton;
        $(submmitButtonName).hide();
        this.addClass('form-wizard');

        // 2
        $(element).before("<ul id='steps'></ul>");

        steps.each(function(i) {
            $(this).wrap("<div id='step" + i + "'></div>");
            $(this).append("<p id='step" + i + "commands'></p>");

            // 2
            var name = $(this).find("legend").html();
            $("#steps").append("<li id='stepDesc" + i + "'>\n\
                                    <a href='#' id='goto" + i + "'>\n\
                                        " + options.strStep + " " + (i + 1) + "<span>" + name + "</span>\n\
                                    </a>\n\
                                </li>");

            $("#goto" + i).bind("click", function(e) {
                e.preventDefault();
                $("#step" + actual).hide();
                $("#step" + (i)).show();
                $(submmitButtonName).hide();
                selectStep(i);
                actual = i;
            });

            if (i == 0) {
                createNextButton(i);
                selectStep(i);
            }
            else if (i == count - 1) {
                $("#step" + i).hide();
                createPrevButton(i);
            }
            else {
                $("#step" + i).hide();
                createPrevButton(i);
                createNextButton(i);
            }
        });

        function createPrevButton(i) {
            var stepName = "step" + i;
            var prevClass = "wizard-prev";
            prevClass = (options.prevClasses) ? options.prevClasses + " " + prevClass : prevClass;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Prev' class='" + prevClass + "'>" + options.strPrev + "</a>");

            $("#" + stepName + "Prev").bind("click", function(e) {
                e.preventDefault();
                $("#" + stepName).hide();
                $("#step" + (i - 1)).show();
                $(submmitButtonName).hide();
                selectStep(i - 1);
            });
        }

        function createNextButton(i) {
            var stepName = "step" + i;
            var nextClass = "wizard-next";
            nextClass = (options.nextClasses) ? options.nextClasses + " " + nextClass : nextClass;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Next' class='" + nextClass + "'>" + options.strNext + "</a>");

            $("#" + stepName + "Next").bind("click", function(e) {
                e.preventDefault();
                $("#" + stepName).hide();
                $("#step" + (i + 1)).show();
                if (i + 2 == count)
                    $(submmitButtonName).show();
                selectStep(i + 1);
            });
        }

        function selectStep(i) {
            $("#steps li").removeClass("current");
            $("#stepDesc" + i).addClass("current");
        }

    }
})(jQuery); 