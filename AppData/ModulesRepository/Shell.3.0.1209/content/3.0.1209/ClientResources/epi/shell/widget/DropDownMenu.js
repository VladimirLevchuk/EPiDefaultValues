//>>built
require({cache:{"url:epi/shell/widget/templates/DropDownMenu.htm":"<table class=\"dijit dijitMenu dijitMenuPassive dijitReset dijitMenuTable\" role=\"menu\" tabIndex=\"${tabIndex}\" data-dojo-attach-event=\"onkeypress:_onKeyPress\" cellspacing=\"0\">\r\n\t<tbody class=\"dijitReset\" data-dojo-attach-point=\"containerNode\">\r\n        <tr class=\"dijitReset dijitMenuItem\">\r\n            <td class=\"dijitReset dijitMenuItemLabel epi-menuHeader\" colspan=\"4\" data-dojo-attach-point=\"menuHeader\">${header}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>"}});define("epi/shell/widget/DropDownMenu",["dojo","dijit/DropDownMenu","epi","dojo/text!./templates/DropDownMenu.htm"],function(_1,_2,_3,_4){return _1.declare([_2],{templateString:_4,header:""});});