FormToWizard
==========================
Turn plain webform into a powerful wizard with jQuery

From Janko Jovanovic, thank you for this great plugin ! :)

View his original plugin : http://www.jankoatwarpspeed.com/turn-any-webform-into-a-powerful-wizard-with-jquery-formtowizard-plugin/

Usage
==========================
- Create a web form with <fieldset /> and <legend /> 
- Add somme javascript
```javascript
$("form").formToWizard({
	submitButton: "",
	prevClasses: '',
	nextClasses: '',
	strPrev: '< Back',
	strNext: 'Next >',
	strStep: 'Step'
});
```
Here are all available attributes, they are all optional.

Example
==========================
(Complete demo & exemple coming in the future)

You can combine these options with Gettext to get an i18n wizard, and use Bootstrap to style the prev / next buttons :
```javascript
$("form").formToWizard({
	prevClasses: 'btn btn-default',
	nextClasses: 'btn btn-default',
	strPrev: '< <?php echo _("Retour"); ?>',
	strNext: '<?php echo _("Suivant"); ?> >',
	strStep: '<?php echo _("Étape"); ?>'
});
```

Here is my original code, using : Gettext, Bootstrap, Smarty
```javascript
$("form").formToWizard({
	prevClasses: 'btn btn-border',
	nextClasses: 'btn btn-border',
	strPrev: '< <{_("Retour")}>',
	strNext: '<{_("Suivant")}> >',
	strStep: '<{_("Étape")}>'
});
```


TODO
==========================
- write the README =)
- use better selectors and class
- is the CSS good enough ? I'm using it with Twitter's Bootstrap right now