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

**Future extensions** (which you neet not to implement now, but your design should be such that in future implementation is smooth.)

1. Few a buttons could be in disabled state, and dynamically we might want to enable disable the buttons. Disabled button should have lower priority to be upfront.

2. Dynamically we might resize the dimension of the Container of your widget, in such a situation your widget should rearrange the buttons.

## How

### Inheritance

I use the Simple JavaScript Inheritance pattern described by [John Resig](http://ejohn.org/). You can find this in `JS/mygola.js`.

**Advantages of using this method:**

1. Creating a constructor is very simple (in this case simply providing an init method does the trick).

2. In order to create a new ‘class’ you must extend (sub-class) an existing class.

3. All of the ‘classes’ inherit from a single ancestor: `Mygola`. Therefore if you want to create a brand new class it must be a sub-class of `Mygola`.

4. Access to overridden methods is provided (with their context properly set).

**Also, I have used a mix of ++jQuery++ and ++native javascript++ throughout the file. This is to demo that the widget need not be dependant on any library. We can deploy it as a stand alone widget without any library dependancies.**

### Widget

To create a widget on the front end, you have to create a new object of the Widget class. I have done this with classical inheritance. The whole project is also possible using prototypal inheritance applied, I was just more comfortable doing it this way. You can look at the `Widget.helpers.moreButton`() method to see prototypal inheritance in play.

So, you do something like `var widget = new Widget('buttonContainer');` on the widget consumer, where button container is the ID of the container you want to paint the widget in.

This will only initialize the widget. In the backend it calls the `init` constructor.

To start painting the widget, you have to call the `render` property. `render` as you can see takes two arguments. The first is the type of element you want to paint. Since, this example only deals with buttons, I am directly creating this element. Otherwise, we can use a switch:case condition and render different UI elements.

The second argument takes an array of objects. Each button object in the buttons array can have three properties:

1. `text`: The text that will display on the face of the button;

2. `handler`: the function that should fire based on the eventType set. We can extend this further to have multiple handlers;

3. `isDefault`: an optional boolean value that specifies that a button should be highlighted and focused by default. I am not handling this right now, cause this is out of the scope of our example.

I use `DocumentFragments` to create the UI as it is much better than writing to DOM in a loop. Fragments would create a document fragment and keep it in memory. The write will happen when we actually append to the DOM.

I use javascript native functions for this operation. We can also use jQuery for this. Something, like `$('<button> Some Text </button>')` would create a fragment in jQuery.

#### Widget Customizations

Also, you can customize various widget configuration parameters. For example: if you want to customize the number of buttons that are shown inside a widget, this is how you can do it.

```
	var widget = new Widget('buttonContainer');
	widget._config.buttonLimit = 10;
	widget._config.CSS.ids.morecontainer = 'customMoreContainer';
```

You can also give custom style to the widget.

```
	var widget = new Widget('buttonContainer');
	widget._config.CSS.container = {
		width: '300px',
		background: '#fff000'
	}
```

Regardless, you can always modify the style of the widget using CSS. This is given to help you dynamically modify the style before you render the widget again.

### Where can I see it.

You can see this in action on http://rizwaniqbal.com/experiments/mygola