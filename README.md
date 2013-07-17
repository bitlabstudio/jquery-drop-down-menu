# jQuery Drop Down Menu

A simple jQuery plugin that allows to hover over an element and show a drop
down menu for this element.

We have mobile devices in mind, so the plugin works with both, hover events
and click (think: touch) events.

Demo: http://bitmazk.github.io/jquery-drop-down-menu


## Usage

Prepare your main menu item and it's drop down menu items:

    <div id="mainMenuItem">
        Click me
        <ul>
            <li>Submenu Item 1</li>
            <li>Submenu Item 2</li>
        </ul>
    </div>

Include the script before your closing `</body>` tag:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="/js/jquery.dropdownmenu.js"></script>

Invoke the plugin:

    <script>
        $(document).ready(function () {
            $('#mainMenuItem').dropDownMenu();
        });
    </script>

## Options

If you don't want hover or click functionality, you can disable it:

    $('#mainMenuItem').dropDownMenu({hover: false});
    $('#mainMenuItem').dropDownMenu({click: false});


## Callbacks

If you want to trigger some of your own animations when the drop down menu
is shown or hidden, subscribe to the following callbacks:

    $('#mainMenuItem').dropDownMenu({
        onNavShow: function(e) {
            $(e).fadeTo('fast', 0.5);
        }
        ,onNavHide: function(e) {
            $(e).fadeTo('fast', 1);
        }
    });


## API

You can access the methods this plugin uses internally like so:

    <script>
        ...
        $('#mainMenuItem').dropDownMenu('show_nav');
        $('#mainMenuItem').dropDownMenu('hide_nav');
        $('#mainMenuItem').dropDownMenu.('toggle_nav', false);
    </script>


## Troubleshooting

Please note that the plugin dynamically adds the attributes `data-clicked` and
`data-visible` to your main menu item, so you should make sure not to use them
anywhere else. If this collides with your other code, we can easily make these
attributes variable via options. If you need this, please open an issue.
