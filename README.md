# Pinboard Popup

Browser extension that triggers the Pinboard bookmarklet for
bookmarking a website in Pinboard.

Available for:

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/pinboard-bookmark/)
- [Chrome](https://chrome.google.com/webstore/detail/pinboard-popup/pfbacfpikpbgbhecjipbhdhhbpglljne)

## Firefox Usage

You can install it from [Firefox Add-ons](https://chrome.google.com/webstore/detail/pinboard-popup/pfbacfpikpbgbhecjipbhdhhbpglljne).

Keyboard shortcut:

- Linux/Windows: *Alt+Shift+D*
- Chrome: *Command+Shift+D*

## Chrome Usage

You can install it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/pinboard-popup/pfbacfpikpbgbhecjipbhdhhbpglljne),
or if you're inclined, you can install it manually, like this:

1. Download the [zip archive](https://github.com/alexandru/pinboard-popup/archive/master.zip)
   and unpack it
2. Go to [chrome://extensions/](chrome://extensions/) and activate
   *"Developer mode"* by clicking the upper-right checkbox
3. Click on the *"Load unpacked extension..."* button, then select
   the unarchived directory from step 1

Chrome lets you assign a keyboard shortcut to it.
Go to [chrome://extensions/](chrome://extensions/),
scroll down that page and click on the *"Keyboard shortcuts"*
link. Here you can assign a shortcut for activating this extension.
I prefer *Command+D*, being also the shortcut used by the official
Firefox extension.

## Why I built it

I started using [Pinboard.in](https://pinboard.in/) and wanted to
trigger the [bookmarklet code](https://pinboard.in/howto/) with a
keyboard shortcut, however Chrome doesn't let you assign keyboard
shortcuts to simple bookmarks. And looking at the available Chrome extensions
for Pinboard I couldn't see any official one and I don't trust Chrome
extensions from people I don't know or pay in some capacity.

For Firefox, the official extension is fine on OS X, however on Linux the
keyboard shortcut no longer works.

Therefore I've built my own extension. All it does is to activate
the official bookmarklet for adding a website to Pinboard.

**Pro-tip** - you can convert any bookmarklet to a Chrome extension by
yourself, see:
[sandbox.self.li/bookmarklet-to-extension/](https://sandbox.self.li/bookmarklet-to-extension/).
This doesn't work so well for Firefox, because Firefox doesn't allow
opening of popups, like the Pinboard bookmarklet does.

## LICENSE

Copyright &copy;2016 Alexandru Nedelcu, some rights reserved.

Licensed under GPLv3. See 'LICENSE.txt' for details.
