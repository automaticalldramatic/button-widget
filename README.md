# Design and implement Button Widget

## What

Given a Button container on html page and finite set of buttons, paint as many buttons in container as possible.
if container cannot accomodate all the buttons, have a custom button called "more" at the end.
Click on "more" should show remaining buttons.

Click on button 'Bx' should execute external function `funcBx` (just have `alert('Bx clicked')` in this function).
(External function is one which is not defined by the widget creator, but by the widget consumer.)

There might be a requirement of more than one such widget with same or different set of buttons on a page.
Button Container could be any where on a page (Top, Bottom, Left, Right , Center, any where)
The consumer of the widget might want to replace the function linked with button ('funcBx') on rum time with some other function.

Future extensions (which you neet not to implement now, but your design should be such that in future implementation is smooth.)
1. Few a buttons could be in disabled state, and dynamically we might want to enable disable the buttons. Disabled button should have lower priority to be upfront.
2. Dynamically we might resize the dimension of the Container of your widget, in such a situation your widget should rearrange the buttons.

## How

I use the Simple JavaScript Inheritance pattern described by [John Resig](http://ejohn.org/).

**Advantages of using this method:**
* Creating a constructor is very simple (in this case simply providing an init method does the trick).
* In order to create a new ‘class’ you must extend (sub-class) an existing class.
* All of the ‘classes’ inherit from a single ancestor: `Mygola`. Therefore if you want to create a brand new class it must be a sub-class of `Mygola`.
* Access to overridden methods is provided (with their context properly set).


