# jQuery Drop Down Menu

A simple jQuery plugin that allows to hover over an element and show a drop
down menu for this element.

We have mobile devices in mind, so the plugins works with both, hover events
and click (as in: touch) events.


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

    <script src="/js/jquery.dropdownmenu.js"></script>

Invoke the plugin:

    <script>
        $(document).ready(function () {
            $('#mainMenuItem').dropDownMenu();
        });
    </script>

You can access the methods this plugin uses internally like so:

    <script>
        ...
        $('#mainMenuItem').dropDownMenu.show_nav();
        $('#mainMenuItem').dropDownMenu.hide_nav();
        $('#mainMenuItem').dropDownMenu.toggle_nav();
    </script>

If you don't want hover or click functionality, you can disable it:

    $('#mainMenuItem').dropDownMenu({hover: false});
    $('#mainMenuItem').dropDownMenu({click: false});
